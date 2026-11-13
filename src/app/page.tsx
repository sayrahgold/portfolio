import Link from "next/link";
import { Suspense } from "react";
import { site } from "@/lib/site";
import { getPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

async function LatestPosts() {
  const posts = (await getPosts()).slice(0, 2);
  if (posts.length === 0) {
    return <p className="text-muted">First posts coming soon.</p>;
  }
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{site.role}</p>
          <h1 className="mt-5 font-display text-5xl leading-tight md:text-7xl">
            Hi, I&apos;m <span className="text-gold-gradient">{site.name}</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/cv"
              className="rounded-full bg-gold px-7 py-3 font-medium text-black transition-colors hover:bg-gold-light"
            >
              View my CV
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-gold px-7 py-3 font-medium text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-3">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl">Latest writing</h2>
          <Link href="/blog" className="text-sm uppercase tracking-[0.18em] text-gold hover:text-gold-light">
            All posts →
          </Link>
        </div>
        <Suspense fallback={<p className="text-muted">Loading posts…</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
