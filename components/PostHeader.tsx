import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Nav from "./Nav";
import Link from 'next/link';

function Header(props: PostHeaderComponent) {

  return (

    <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">

      <Nav />

      <div className="container flex flex-col  mx-auto my-32 p-10">

        <div className="flex items-center text-center">

          <Link href="/blogify" type="button" className=" text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaAngleLeft />
          </Link>

          <span className="mx-2 font-bold text-left text-white inline text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            {props.tag}
          </span>

          <time className="font-bold text-left text-white inline text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            {props.date}
          </time>
        </div>

        <h1 className="font-bold text-left text-white inline mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
          {props.title}
        </h1>

        <p className="font-bold text-left text-white inline mt-4 text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">Publish By {props.authorName}</p>

      </div>

    </header>
  );
}

interface PostHeaderComponent {
  title?: string;
  description?: string
  date?: string;
  tag?: string;
  authorName?: string;
}

export default Header;
