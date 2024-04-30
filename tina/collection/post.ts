import type { Collection } from "tinacms";

const Post: Collection = {
  label: "ブログ記事",
  name: "post",
  path: "content/posts",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: 'Tags',
      name: 'tags',
      type: 'string',
      list: true,
    },
    {
      label: 'カテゴリ',
      name: 'categories',
      type: 'string',
      list: false,
      options: [
        {
          label: 'プログラミング',
          value: 'programming',
        },
        {
          label: '電子工作',
          value: 'electronics',
        },
        {
          label: 'DIY',
          value: 'diy',
        },
        {
          label: 'ガジェット',
          value: 'gadget',
        },
      ],
    },
    {
      type: "image",
      name: "heroImg",
      label: "Hero Image",
    },
    {
      label: "作成日",
      type: "datetime",
      name: "date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
      type: "rich-text",
      label: "Body",
      name: "_body",
      templates: [
      ],
      isBody: true,
    },
  ],
};

export default Post;
