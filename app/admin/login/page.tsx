"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false, callbackUrl: "/admin/dashboard" });
    if (res?.error) setError("Invalid credentials");
    if (res?.ok) window.location.href = "/admin/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white/70 backdrop-blur rounded-2xl shadow p-6 space-y-4">
        <h1 className="text-2xl font-heading">Admin Login</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full rounded-xl bg-primary py-2 font-medium">Sign In</button>
        <Link className="text-sm text-ink/60" href="/">← Back to site</Link>
      </form>
    </div>
  );
}
