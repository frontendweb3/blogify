import { Newsletter } from "@/components/Newsletter";
// import { Pagination } from "../components/Pagination";
import { Hero } from "@/components/Hero";
import { GetAllPosts } from "@/data";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog_card";

export const metadata: Metadata = {
  title: "Home | Blogify",
  description:
    "Blogify is an open-source nextjs blog template design with tailwind CSS.",
};

export default function Page() {
  const posts = GetAllPosts();
  return (
    <div className="container overflow-x-hidden py-24">
      <div className="mb-4 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
        <div>
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            All posts
          </h2>
          <p className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <BlogCard posts={posts} />
      <Newsletter />
    </div>
  );
}
