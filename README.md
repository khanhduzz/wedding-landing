
# Wedding Website (Next.js + App Router)

Clean, elegant wedding landing page with guestbook, RSVP (in-page), donation/QR section, and a lightweight admin dashboard.

## Tech
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- Auth.js (NextAuth) - Credentials provider for admin login (free-tier friendly)
- Supabase (Postgres) for messages & RSVP
- ISR + lazy-loaded sections for performance
- ESLint (SonarJS), Prettier

## Setup

1. Install deps:
```bash
npm install
```

2. Create `.env.local`:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace_with_strong_secret

# Admin credentials for Auth.js Credentials provider
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key # used only in admin API route for deletes
```

3. Database (Supabase) — run this SQL:
```sql
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  message text not null,
  is_public boolean not null default false,
  created_at timestamp with time zone default now()
);

create table if not exists rsvp (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  attending boolean not null,
  guest_count int not null default 1,
  created_at timestamp with time zone default now()
);
```

4. Dev
```bash
npm run dev
```

## Deployment
- Vercel (free tier). Set env vars in Vercel Project Settings.

## Theming
- Edit `styles/theme.css` to quickly change brand colors.
