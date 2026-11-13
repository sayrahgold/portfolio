import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPost } from "@/lib/posts";
import { formatDate } from "@/lib/format";

async function Article({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // Simple formatting: blank line = new paragraph, "## " = subheading.
  const blocks = post.content.split(/\n\s*\n/);

  return (
    <article>
      <p className="text-xs uppercase tracking-[0.2em] text-gold">{formatDate(post.published_at)}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{post.title}</h1>
      <div className="prose-post mt-10 text-lg">
        {blocks.map((block, i) =>
          block.startsWith("## ") ? <h2 key={i}>{block.slice(3)}</h2> : <p key={i}>{block}</p>,
        )}
      </div>
    </article>
  );
}

export default function PostPage(props: PageProps<"/blog/[slug]">) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="text-sm uppercase tracking-[0.18em] text-gold hover:text-gold-light">
        ← All posts
      </Link>
      <div className="mt-8">
        <Suspense fallback={<p className="text-muted">Loading…</p>}>
          <Article params={props.params} />
        </Suspense>
      </div>
    </div>
  );
}
