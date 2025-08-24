import { NextResponse } from "next/server";
import { getSupabaseService } from "@/lib/supabaseServer";

function ensureAdmin(req: Request) {
  // Lightweight protection: expect a header 'x-admin-key' equal to ADMIN_PASSWORD for simplicity locally.
  // In production, protect via middleware with NextAuth session check.
  const key = process.env.ADMIN_PASSWORD;
  const incoming = req.headers.get("x-admin-key");
  return key && incoming === key;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const exportCsv = url.searchParams.get("export") === "csv";
  const supabase = getSupabaseService();
  const { data, error } = await supabase.from("messages").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (exportCsv) {
    const rows = [["name","email","message","is_public","created_at"], ...data.map(d=>[d.name, d.email ?? "", d.message, d.is_public, d.created_at])];
    const csv = rows.map(r => r.map(v => JSON.stringify(v ?? "")).join(",")).join("\n");
    return new NextResponse(csv, { headers: { "content-type": "text/csv", "content-disposition": "attachment; filename=messages.csv" }});
  }
  return NextResponse.json({ messages: data, visitors: 0 });
}

export async function DELETE(req: Request) {
  if (!ensureAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const supabase = getSupabaseService();
  const { error } = await supabase.from("messages").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
