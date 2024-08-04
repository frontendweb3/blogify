import React, { ReactElement } from 'react';
import dayjs from 'dayjs';

import Post from 'components/Post';
import type { PostFieldsWithFileName } from '../types';

interface OtherPostsProps {
  posts?: PostFieldsWithFileName[];
}

const OtherPosts: React.FC<OtherPostsProps> = (props): ReactElement => (
  <div className='container my-20 flex flex-col justify-center mx-auto'>
    <h2 className='text-3xl font-light  text-gray-500 dark:text-gray-400'>
      Other interesting posts
    </h2>
    {
      props.posts?.map(
        (p) => (
          <Post
            key={p.id}
            filename={p.filename}
            category={p.categories?.[0] ?? ''}
            tags={p.tags ?? []}
            date={dayjs(p.date).format('DD-MMM , YYYY').toString()}
            title={p.title}
            description={p.description ?? ''}
            image={p.image ?? ''}
          />
        ),
      )
    }
  </div>
);

export default OtherPosts;
