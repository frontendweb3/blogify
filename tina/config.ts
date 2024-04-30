import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
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
                label: 'DIY',
                value: 'diy',
              },
              {
                label: '電子工作',
                value: 'electronics',
              },
              {
                label: 'ガジェット',
                value: 'gadget',
              },
            ],
          },
          {
            label: "作成日",
            name: "createdAt",
            type: "datetime",
          },
          {
            label: "アイキャッチ画像",
            name: "imageEyeCatch",
            type: "image",
          },
          {
            label: "Body",
            name: "body",
            type: "rich-text",
            required: true,
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
