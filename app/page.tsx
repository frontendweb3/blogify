import { Newsletter } from '@/components/Newsletter';
import { Pagination } from '../components/Pagination';
import { BlogCard } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { GetAllPosts } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Blogify",
  description: "Blogify is an open-source nextjs blog template design with tailwind CSS.",
};


export default function Page() {
  const posts = GetAllPosts()
  return (
    <>
      <Hero />
      <main className='container mx-auto flex flex-col p-3'>

        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal]">
          All posts
        </p>
        <div className="mx-auto container">
          {
            posts?.map(
              (item) => {
                return <BlogCard key={item.id} item={item} />
              }
            )
          }
        </div>

        <Pagination />

      </main>

      <Newsletter />
    </>
  )
}
