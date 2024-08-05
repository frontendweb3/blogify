import React, { ReactElement } from 'react';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useTina } from 'tinacms/dist/react';

import PostHeader from 'components/PostHeader';
import client from 'tina/__generated__/client';
import type { Author as AuthorFields } from 'tina/__generated__/types';

interface ReadingPageProps {
  relativePath: string;
  data: AuthorFields;
  query: string;
}

const ReadingPage: React.FC<ReadingPageProps> = (props): ReactElement => {
  const { data } = useTina<AuthorFields>({
    query: props.query,
    variables: { relativePath: props.relativePath },
    data: props.data,
  });

  return (
    <>
      <PostHeader
        title={data.name}
        tag=''
        date={dayjs(data.date).format('DD MMMM , YYYY')}
        authorName={data.name}
      />

      <div className='my-10 mx-auto'>
        <Image
          height='250'
          width='500'
          src={data.image ?? ''}
          alt={data.name}
          className='mx-auto h-[72%] w-[1424px]'
        />
      </div>

      <div className='my-12 prose prose-stone lg:prose-lg mx-auto'>
        <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          {data.name}
        </h1>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const authorsList = await client.queries.authorConnection();
  return {
    paths: authorsList.data.authorConnection.edges?.map((author) => ({
      params: { filename: author?.node?._sys.filename },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext): Promise<{props: ReadingPageProps | null}> => {
  try {
    const res = await client.queries.author({ relativePath: `${params?.filename}.mdx` });
    return {
      props: {
        relativePath: res.variables.relativePath,
        data: res.data.author as AuthorFields,
        query: res.query,
      },
    };
  } catch {
    // swallow errors related to document creation
  }

  return { props: null };
};

export default ReadingPage;
