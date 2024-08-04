import React, { ReactElement } from 'react';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useTina } from 'tinacms/dist/react';

import PostHeader from 'components/PostHeader';
import client from 'tina/__generated__/client';
import type { Post as PostFields } from 'tina/__generated__/types';

import type { PostFieldsWithFileName } from '../types';
import ContentSection from './_content';
import AnotherPosts from './_anotherPosts';

interface ReadingPageProps {
  relativePath: string;
  posts: PostFieldsWithFileName[];
  data: PostFields;
  query: string;
}

const ReadingPage: React.FC<ReadingPageProps> = (props): ReactElement => {
  const { data, isClient } = useTina<PostFields>({
    query: props.query,
    variables: { relativePath: props.relativePath },
    data: props.data,
  });

  console.info(`client: ${isClient}`);

  return (
    <>
      <PostHeader
        title={data.title}
        tag={data.tags?.[0] ?? ''}
        date={dayjs(data.date).format('DD MMMM , YYYY')}
        authorName={data.author}
      />

      <div className='my-10 mx-auto'>
        <Image
          height='250'
          width='500'
          src={data.image ?? ''}
          alt={data.title}
          className='mx-auto h-[72%] w-[1424px]'
        />
      </div>

      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          {data.title}
        </h1>
        <ContentSection content={data._body} />
      </div>
      <AnotherPosts posts={props.posts} />
    </>
  );
};

export const getStaticPaths = async () => {
  const postsList = await client.queries.postConnection();
  return {
    paths: postsList.data.postConnection.edges?.map((post) => ({
      params: { filename: post?.node?._sys.filename },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext): Promise<{props: ReadingPageProps | null}> => {
  try {
    const res = await client.queries.post({ relativePath: `${params?.filename}.mdx` });
    return {
      props: {
        relativePath: res.variables.relativePath,
        data: res.data.post as PostFields,
        query: res.query,
        posts: [],
      },
    };
  } catch {
    // swallow errors related to document creation
  }

  return { props: null };
};

export default ReadingPage;
