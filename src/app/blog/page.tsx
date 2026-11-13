import type { Metadata } from "next";
import { Suspense } from "react";
import { getPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = { title: "Blog" };

async function PostList() {
  const posts = await getPosts();
  if (posts.length === 0) {
    return <p className="text-muted">No posts yet — check back soon.</p>;
  }
  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Blog</p>
      <h1 className="mt-4 font-display text-5xl">Notes on operations</h1>
      <p className="mt-4 text-lg text-muted">
        SOPs, systems and lessons from running short-term rental operations.
      </p>
      <div className="mt-12">
        <Suspense fallback={<p className="text-muted">Loading posts…</p>}>
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}
