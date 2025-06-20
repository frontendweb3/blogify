import { Newsletter } from "@/components/Newsletter";
import { Hero } from "@/components/Hero";
import { GetAllPosts } from "@/data";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog_card";
import { Mail, Rss, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home | Blogify",
  description:
    "Blogify is an open-source nextjs blog template design with tailwind CSS.",
};

export default function Page() {
  const posts = GetAllPosts();
  return (
    <div className="container py-24">
      <div className="mb-16 flex flex-col items-start justify-between border-b border-border py-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold text-foreground">Blog</h1>
          <p className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="mt-4 flex items-start gap-2 md:mt-0 md:items-center">
          <span className="hidden text-sm text-muted-foreground lg:block">
            Subscribe via
          </span>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Rss className="h-4 w-4" />
          </Button>
          <span className="hidden text-sm text-muted-foreground lg:block">
            Follow on
          </span>
          <Button variant="ghost" size="icon" className="rounded-full">
            <IconX />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}

function IconX() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}
