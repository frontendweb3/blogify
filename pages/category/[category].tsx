import React, { ReactElement } from 'react';
import dayjs from 'dayjs';

import Header from 'components/Header';
import Post from 'components/Post';
import Newsletter from 'components/Newsletter';
import client from 'tina/__generated__/client';

import { PostFieldsWithFileName } from '../types';

interface CategoryProps {
  category: string;
  posts?: PostFieldsWithFileName[];
}

const Category: React.FC<CategoryProps> = ({ category, posts = [] }): ReactElement => (
  <>
    <Header title='hidden' category={`${category}`} />
    <main className='container mx-auto flex flex-col p-3'>
      {
        posts?.map(
          (p) => (
            <Post
              key={p.id}
              filename={p.filename}
              category={category}
              tags={p.tags ?? []}
              date={dayjs(p.date).format('DD MMMM , YYYY')}
              title={p.title}
              description={p.description ?? ''}
              image={p.image ?? ''}
            />
          ),
        )
      }
    </main>
    <Newsletter />
  </>
);

export const getStaticPaths = async () => {
  const postsList = await client.queries.postConnection();
  const categories: (string | null)[] = [];
  postsList.data.postConnection.edges?.map((p) => categories.push(...(p?.node?.categories ?? [])));
  const uniqueCategories = Array.from(new Set(categories.filter((c) => c !== null && c !== undefined)));

  return {
    paths: uniqueCategories.map((c) => ({ params: { category: c } })),
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { category: string; }; }) => {
  const { params: { category } } = context;
  const postsList = await client.queries.postConnection();
  const posts = postsList.data.postConnection.edges?.filter((p) => p?.node?.categories?.includes(category));
  return {
    props: {
      category,
      posts: posts?.map((p) => ({
        date: p?.node?.date ?? '',
        title: p?.node?.title ?? '',
        description: p?.node?.description ?? '',
        image: p?.node?.image ?? '',
        tags: p?.node?.tags ?? [],
        author: '',
        categories: p?.node?.categories ?? [],
        id: p?.node?.id ?? '',
        filename: p?.node?._sys.filename ?? '',
      })) ?? [],
    },
  };
};

export default Category;
