import { NextResponse } from "next/server";
import { getSupabaseAnon } from "@/lib/supabaseServer";
import { messageSchema } from "@/lib/validators";

export async function GET() {
  const supabase = getSupabaseAnon();
  const { data, error } = await supabase.from("messages").select("*").eq("is_public", true).order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ messages: data });
}

export async function POST(req: Request) {
  const body = await req.json();
  const parse = messageSchema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: parse.error.flatten() }, { status: 400 });

  const supabase = getSupabaseAnon();
  const { data, error } = await supabase.from("messages").insert({
    name: parse.data.name,
    email: parse.data.email || null,
    message: parse.data.message,
    is_public: true,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: data }, { status: 201 });
}
