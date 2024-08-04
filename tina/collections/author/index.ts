import type { Collection } from "tinacms";

const Author: Collection = {
  label: "著者",
  name: "author",
  path: "content/authors",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/authors/${document._sys.filename}`;
    },
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "自画像",
    },
    {
      label: "Description",
      name: "description",
      type: "string",
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
  ],
};

export default Author;
