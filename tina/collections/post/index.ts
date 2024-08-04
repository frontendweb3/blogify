import type { Collection } from "tinacms";

const Post: Collection = {
  // 'pages/types.d.ts' に本Collectionのfieldsの型を定義している
  // 本Collection修正時は上記ファイルのインタフェースを併せて修正が必要

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
      label: "Description",
      name: "description",
      type: "string",
    },
    {
      label: "Author",
      name: "author",
      type: "string",
      required: true,
      options: [
        {
          label: 'Takashi Ando',
          value: 'takashi',
        },
      ],
    },
    {
      label: 'タグ',
      name: 'tags',
      type: 'string',
      list: true,
    },
    {
      label: 'カテゴリ',
      name: 'categories',
      type: 'string',
      list: true,
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
          label: '日常',
          value: 'life',
        },
      ],
    },
    {
      type: "image",
      name: "image",
      label: "アイキャッチ画像",
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
