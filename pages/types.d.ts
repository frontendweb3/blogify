import type { Post as PostFields } from 'tina/__generated__/types';

export interface PostedDatum<T extends PostFields> {
  post: T;
  filename?: string;
}

export interface PostedData<T extends PostFields> {
  posts: T[];
  filename?: string;
}

export interface PostFieldsWithFileName extends Omit<PostFields, '_sys' | '_values'> {
  filename?: string;
}
