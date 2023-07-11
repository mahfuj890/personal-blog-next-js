// "use client"
import Link from "next/link";
import Image from "next/image";
import BlogData from "@/components/blog/BlogData";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`${process.env.JSON_API}/posts?_limit=10`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function BlogPage() {
  const data = await getData();

  return (
    <div>
      <BlogData data={data} />
    </div>
  );
}

export default BlogPage;
