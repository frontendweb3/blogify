import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

function Header() {
  return (
    <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">

      <div className="container flex flex-col items-center  sm:flex-col md:flex-row  lg:flex-row  xl:flex-row  2xl:flex-row justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between mx-auto py-3 px-0 sm:px-0 md:px-3 lg:px-3 xl:px-3 2xl:px-3 my-4">

        <a href="/" className="text-2xl uppercase text-center">Blogify</a>

        <nav className="gap-10 inline-flex  justify-center sm:justify-center md:justify-right mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0  items-start text-white text-left font-medium">
          <a href="#" className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Design Tools</a>
          <a href="#" className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Daily Updates</a>
          <a href="#" className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Tutorials</a>
          <a href="#" className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Library</a>
        </nav>

        <div className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex flex-row justify-between items-center">
          
          <a href="#" target="_blank"> <FaFacebookF className="mx-3" /> </a>          
          <a href="#" target="_blank"> <FaTwitter className="mx-3" /> </a>        
          <a href="#" target="_blank"> <FaInstagram className="mx-3" /> </a>          
          <a href="#" target="_blank"> <FaLinkedinIn className="mx-3" /> </a>
          <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="container flex flex-col mx-auto my-32 p-10">
        <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-semibold text-white uppercase inline mt-8">
          👋 HELLO
        </p>

        <p className="font-bold text-left text-white inline mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
          Insights about my personal and work life, and the in-betweens
        </p>
      </div>
    </header>
  );
}

export default Header;
