import { BlogCard } from '@/components/Card';
import { GetTags, GetTagsPost } from "@/data";
import type { Post } from "@/types";
import type { Metadata } from 'next'
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return { title: `Articles Related to ${slug?.trim().replaceAll(" ", "-")}` }
}

export async function generateStaticParams() {
  return GetTags()
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const posts = await GetTagsPost(slug)
  if (posts.length === 0) {
    notFound()
  }
  return (
    <>
      <div className="container my-24 px-4 mx-auto">

        <h2 className="my-8 text-3xl font-bold capitalize">
          Articles Related to {slug.replaceAll("-", " ")}
        </h2>
      </div>

      <div className="mt-8 mx-auto container">
        {
          posts.map((item: Post) => <BlogCard item={item} key={item.id} />)
        }

      </div>

    </>

  )
}
