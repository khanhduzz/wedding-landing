export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center text-sm text-ink/60">
      <div>Thank you for celebrating with us.</div>
      <div className="mt-1">© {new Date().getFullYear()} A & B</div>
      <div className="mt-1">
        <a className="underline" href="/admin/login">
          Admin
        </a>
      </div>
    </footer>
  );
}
