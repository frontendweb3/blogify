import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import POST from '../components/Post';
import Subtract from "../components/Subtract";
import Header from "../components/Header"
import Post from '../components/Post';
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })

// Graphik


// sm: md: lg: xl: 2xl:

/*


Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/ 

// max-sm: , max-md:, max-lg:, max-xl:, max-2xl:

export default function Home() {
  return (
    <>
      <Header />

      <main className='container mx-auto flex flex-col p-3'>

        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
          Design Tools
        </p>
        
        <Post
          text="Tutorials"
          text1="AUGust 13, 2021"
          text2="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
          text3="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
          image="https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_960_720.jpg"
        />

         <Post
          text="Tutorials"
          text1="AUGust 13, 2021"
          text2="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
          text3="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
          image="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/bd9f13ebb322ac0fa8c3d6174afbcd517a7da2c5.webp"
        />

      </main>
      <Footer/>
    </>
  )
}

{/* https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_960_720.jpg */}