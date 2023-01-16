import Header from "../components/Header"
import Post from '../components/Post';
import Newsletter from '../components/Newsletter';
import ReadMore from '../components/ReadMore';
import posts from '../data/post';
import dayjs from "dayjs";

export default function Home() {
  return (
      <>
      <Header />
      <main className='container mx-auto flex flex-col p-3'>

        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
            All posts
        </p>

        {
          posts.map(
            item =>  {

            let GetDate=dayjs(item.date).format("DD-MMM , YYYY")         

            return <Post key={item.id}
            tag={item.tags[0]}
            date={GetDate.toString()}
            title={item.title}
            description={item.description}
            image={item.image}
          />}
          )
        }
        
    

      <ReadMore />
      </main>


      <Newsletter />
    </>
  )
}

{/* https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_960_720.jpg */}