import React from 'react';
import { withRouter, type NextRouter } from 'next/router';

import Header from '../../components/Header';

const Pages: React.FC<{ router: NextRouter }> = (props) => {
  const { router } = props;
  const { query } = router;
  console.debug(query.slug);

  return (
    <>
      <Header category='hidden' title='About me' />
      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <p className='mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>
          生息地は昭島市。
          <br />
          二児の父です。
        </p>
      </div>
      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <p className='mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>
          職業はプログラマーっぽいことしてます。
          <br />
          スキルは高くないですが好奇心旺盛です。
        </p>
      </div>
      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <p className='mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>
          趣味はDIYで発電したり、電子工作したり、
          <br />
          色々自動化したり。
        </p>
      </div>
      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <p className='mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>
          日常生活に役立てているIT活用事例を主に綴ります。
          <br />
        </p>
      </div>
    </>
  );
};

export default withRouter(Pages);
