import DashboardPostSection from "@/section/dashboard/DashboardPostSection"
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

async function DashboardPage() {
    const data = await getData();
  return (
    <div>
        <DashboardPostSection  data={data}/>
    </div>
  )
}

export default DashboardPage