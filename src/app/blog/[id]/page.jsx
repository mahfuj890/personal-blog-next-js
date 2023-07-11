import BlogDetailsSection from "@/components/blog/BlogDetailsSection";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.JSON_API}/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function BlogDetailsPage({ params }) {
  const data = await getData(params?.id);

  return (
    <div>
      <BlogDetailsSection data={data} />
    </div>
  );
}

export default BlogDetailsPage;
