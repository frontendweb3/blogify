import React from 'react';
import Link from 'next/link';

function Pagination() {


  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center w-5/6 sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 justify-evenly mx-auto">

      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
      </span>

      <div className="inline-flex justify-evenly w-5/6 sm:w-5/6 md:w-3/6 lg:w-3/6 xl:w-4/6 2xl:w-2/6">

        <Link href={"/"} className="h-10 mx-auto  w-[100px] my-14 gap-2.5 inline-flex flex-col justify-center items-center rounded-lg text-center font-medium bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
          Prev
        </Link>

        <Link href={"/"} className="h-10 mx-auto  w-[100px] my-14 gap-2.5 inline-flex flex-col justify-center items-center rounded-lg text-center font-medium bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
          Next
        </Link>
      </div>
    </div>

  );
}

export default Pagination;
