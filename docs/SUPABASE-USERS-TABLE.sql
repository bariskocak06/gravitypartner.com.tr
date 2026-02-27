-- Supabase SQL Editor'da çalıştırın.
-- Üye ol / giriş yap için site kullanıcıları tablosu.

create table if not exists public.site_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  created_at timestamptz default now()
);

-- Sadece sunucu (service_role) bu tabloya erişsin; RLS ile anon erişimini kapatın.
alter table public.site_users enable row level security;

create policy "Service role only"
  on public.site_users
  for all
  using (auth.role() = 'service_role');
