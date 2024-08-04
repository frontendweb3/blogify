import React, { ReactElement } from 'react';
import dayjs from 'dayjs';

import Header from 'components/Header';
import Post from 'components/Post';
import Newsletter from 'components/Newsletter';
import Pagination from 'components/Pagination';
import client from 'tina/__generated__/client';
import { PostFieldsWithFileName } from './types';

interface HomePageProps {
  posts: PostFieldsWithFileName[];
}

// sm: md: lg: xl: 2xl:
/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/

const Home: React.FC<HomePageProps> = ({ posts }): ReactElement => (
  <>
    <Header />
    <main className='container mx-auto flex flex-col p-3'>
      {
        posts?.map(
          (p) => {
            const GetDate = dayjs(p.date).format('DD-MMM , YYYY');
            return (
              <Post
                filename={p.filename}
                key={p.id}
                category={p.categories?.[0] ?? ''}
                tags={p.tags ?? []}
                date={GetDate.toString()}
                title={p.title}
                description={p.description ?? ''}
                image={p.image ?? ''}
              />
            );
          },
        )
      }
      <Pagination />
    </main>
    <Newsletter />
  </>
);

export const getStaticProps = async (): Promise<{ props: HomePageProps }> => {
  const postsList = await client.queries.postConnection();
  return {
    props: {
      posts: postsList.data.postConnection.edges?.map((p) => ({
        filename: p?.node?._sys.filename ?? '',
        date: p?.node?.date ?? '',
        title: p?.node?.title ?? '',
        description: p?.node?.description ?? '',
        image: p?.node?.image ?? '',
        tags: [],
        author: '',
        categories: (p?.node?.categories ?? []),
        id: p?.node?.id ?? '',
      })) ?? [],
    },
  };
};

export default Home;
