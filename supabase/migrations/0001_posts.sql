-- Run this once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text not null,
  published boolean not null default false,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

-- Anyone can read published posts; only you (via the dashboard) can write.
create policy "Public can read published posts"
  on public.posts for select
  using (published = true);

insert into public.posts (slug, title, excerpt, content, published)
values (
  'why-every-str-needs-sops',
  'Why every short-term rental business needs SOPs',
  'The fastest way to scale a rental portfolio is to stop relying on memory.',
  'When a portfolio grows past a handful of properties, the things that live in one person''s head start to break.

## Start with the turnover

Write down exactly what a clean looks like, who confirms it, and what happens when something is missing.

## Then document the exceptions

Late checkouts, maintenance surprises and guest complaints are where most of the chaos lives. Give each one a clear owner and a next step.',
  true
)
on conflict (slug) do nothing;
