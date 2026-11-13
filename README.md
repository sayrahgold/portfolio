# Sarah Abu — Portfolio

Personal site with a CV and a blog. Built with **Next.js 16**, **Tailwind CSS 4** and **Supabase**, hosted on **Vercel**. Brand colours: gold (`#D4AF37`) and black.

## What's where

| File | What to edit |
| --- | --- |
| `src/lib/site.ts` | Name, tagline, email, social links, headline stats |
| `src/lib/cv.ts` | Experience and skills on the CV page |
| `src/app/globals.css` | Brand colours (the `--gold…` variables) |
| `supabase/migrations/0001_posts.sql` | Database table for blog posts |

## 1. Set up Supabase (blog)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste `supabase/migrations/0001_posts.sql`, click **Run**. This creates the `posts` table and a sample post.
3. Go to **Project Settings → API** and copy the **Project URL** and the **anon public** key.

To publish a post later: **Table Editor → posts → Insert row**, set `published` to `true`. In the content, a blank line starts a new paragraph and a line starting with `## ` is a subheading. New posts show on the site within a few minutes.

## 2. Run locally (optional)

```bash
cp .env.example .env.local   # then paste your Supabase URL and key
npm install
npm run dev                  # http://localhost:3000
```

The site still works without Supabase — the blog just shows "No posts yet".

## 3. Push to GitHub

Create an empty repository on GitHub (e.g. `portfolio`), then from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

(Or use GitHub Desktop: **File → Add local repository**, then **Publish repository**.)

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Under **Environment Variables**, add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Click **Deploy**. Every push to `main` redeploys automatically.
