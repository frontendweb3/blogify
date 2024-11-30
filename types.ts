export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string[];
  image: string;
  author: string;
}

export interface ReadingPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  category: string;
  image: string;
  author: string;
}
