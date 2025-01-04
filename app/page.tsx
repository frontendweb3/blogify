import { Newsletter } from '@/components/Newsletter'
import { Pagination } from '../components/Pagination'
import { BlogCard } from '@/components/Card'
import { Hero } from '@/components/Hero'
import { GetAllPosts } from '@/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | Blogify',
    description:
        'Blogify is an open-source nextjs blog template design with tailwind CSS.'
}

export default function Page() {
    const posts = GetAllPosts()
    return (
        <>
            <Hero />
            <main className="container mx-auto flex flex-col p-3">
                <p className="my-16 ml-0 inline text-left text-4xl font-bold leading-[normal] sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24">
                    All posts
                </p>
                <div className="container mx-auto">
                    {posts?.map(item => {
                        return <BlogCard key={item.id} item={item} />
                    })}
                </div>

                <Pagination />
            </main>

            <Newsletter />
        </>
    )
}
