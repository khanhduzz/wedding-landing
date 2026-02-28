import { NextResponse } from "next/server";
import { getSupabaseService } from "@/lib/supabaseServer";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const exportCsv = url.searchParams.get("export") === "csv";

  const supabase = getSupabaseService();
  const { data, error } = await supabase
    .from("rsvp")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Export CSV (UTF-8 BOM for Excel)
  if (exportCsv) {
    const rows = [
      ["Họ tên", "Email", "Tham gia", "Số người", "Ngày gửi"],
      ...data.map(d => [
        d.name,
        d.email ?? "",
        d.attending ? "CÓ" : "KHÔNG",
        d.guest_count,
        d.created_at,
      ]),
    ];

    const csv =
      "\uFEFF" +
      rows
        .map(r => r.map(v => JSON.stringify(v ?? "")).join(";"))
        .join("\n");

    return new NextResponse(csv, {
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": "attachment; filename=rsvp_list.csv",
      },
    });
  }

  return NextResponse.json({ rsvps: data });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const supabase = getSupabaseService();
  const { error } = await supabase.from("rsvp").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
