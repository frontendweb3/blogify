import { BlogCard } from "@/components/blog_card";
import { GetTags, GetTagsPost } from "@/data";
import type { Post } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tag } from "lucide-react";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Articles Related to ${slug?.trim().replaceAll(" ", "-")}` };
}

export async function generateStaticParams() {
  return GetTags();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = await GetTagsPost(slug);
  if (posts.length === 0) {
    notFound();
  }
  const getTag = slug.replaceAll("-", " ");
  return (
    <div className="container py-24">
      <div className="mb-4 flex flex-col justify-between md:mb-14 lg:mb-16">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex flex-row items-center gap-x-3">
                {" "}
                <Tag size={12} /> {getTag}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
