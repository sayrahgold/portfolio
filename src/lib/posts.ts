"use cache";

import { cacheLife, cacheTag } from "next/cache";
import { createPublicClient } from "@/lib/supabase/public";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  published_at: string;
};

export async function getPosts(): Promise<Post[]> {
  cacheLife("minutes");
  cacheTag("posts");
  const supabase = createPublicClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, content, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) {
    console.error("getPosts:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getPost(slug: string): Promise<Post | null> {
  cacheLife("minutes");
  cacheTag("posts", `post:${slug}`);
  const supabase = createPublicClient();
  if (!supabase) return null;
  const { data } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, content, published_at")
    .eq("published", true)
    .eq("slug", slug)
    .maybeSingle();
  return data;
}
