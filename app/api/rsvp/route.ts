import { NextResponse } from "next/server";
import { getSupabaseAnon } from "@/lib/supabaseServer";
import { rsvpSchema } from "@/lib/validators";

export async function POST(req: Request) {
  const body = await req.json();
  const parse = rsvpSchema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: parse.error.flatten() }, { status: 400 });
  const supabase = getSupabaseAnon();
  const { error } = await supabase.from("rsvp").insert({
    name: parse.data.name,
    email: parse.data.email || null,
    attending: parse.data.attending,
    guest_count: parse.data.guest_count,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
