import Header from "../components/Header"
import Post from '../components/Post';
import Newsletter from '../components/Newsletter';
import Pagination from '../components/Pagination';
import {posts as data} from '../data/post';
import dayjs from "dayjs";

// sm: md: lg: xl: 2xl:
/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }

*/

export default function Home({ posts }: homePageProps) {

  

  return (
    <>
      <Header />

      <main className='container mx-auto flex flex-col p-3'>

        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
          All posts
        </p>

        {
          posts?.map(
            (item: itemProps) => {
              let GetDate = dayjs(item.date).format("DD-MMM , YYYY")

              return <Post key={item.id}
                tag={item.tags[0]}
                date={GetDate.toString()}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            }
          )
        }

        <Pagination />


      </main>


      <Newsletter />
    </>
  )
}

export async function getStaticProps() {

  return {
    props: { posts:data },
  }

}

interface homePageProps {
  posts: {
    map: any;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  }
}

interface itemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;

}