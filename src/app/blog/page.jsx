"use client"
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.LOCAL_HOST_API}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BlogPage() {
    const data = await getData();
    console.log("🚀 ~ file: page.jsx:19 ~ BlogPage ~ data:", data)
  return (
    <div>BlogPage {process.env.LOCAL_HOST_API}</div>
  )
}

export default BlogPage