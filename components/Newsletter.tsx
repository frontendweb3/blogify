import React from 'react';

// sm: md: lg: xl: 2xl:

function Newsletter() {

  return (
    <div className='container mx-auto my-10'>

      <div className="p-0 sm:p-0 md:p-0 lg:p-3 xl:p-3 2xl:p-3  flex flex-col justify-center bg-[rgba(35,46,82,1)] rounded-[10px]  lg:mx-24 xl:mx-24 2xl:mx-24" >

        <p className="mt-14 mb-3 text-5xl font-bold text-center text-white">
          Subscribe to my newsletter.
        </p>

        <p className="mt-4 text-2xl font-normal leading-normal text-center text-[rgba(237,252,242,1)]">
          We post new articles every day.
        </p>

        <div className="my-20 mx-auto flex gap-0 items-center justify-center w-6/6 sm:w-5/6 md:w-5/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">

          <div className="w-6/6  sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-4/6 2xl:w-4/6 font-normal bg-white text-[rgba(17,17,24,0.6)]" >

            <input type="text" id="large-input" placeholder='Email address' className="block p-3.5 w-full h-full border-none text-gray-900 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

          </div>

          <div className="p-3.5 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 mt-4 sm:mt-4 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 font-semibold bg-[rgba(140,238,173,1)] text-[rgba(35,46,82,1)]">
            <p className="text-center w-full rounded-r-lg text-xs m-0">
              SUBSCRIBE
            </p>
          </div>

        </div>

      </div>
    </div>
  );

};

export default Newsletter;
