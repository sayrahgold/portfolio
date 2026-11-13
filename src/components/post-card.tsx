import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-gold"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-gold">{formatDate(post.published_at)}</p>
      <h3 className="mt-2 font-display text-2xl group-hover:text-gold-light">{post.title}</h3>
      {post.excerpt && <p className="mt-2 text-muted">{post.excerpt}</p>}
    </Link>
  );
}
