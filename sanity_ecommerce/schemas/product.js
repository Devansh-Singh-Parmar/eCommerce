export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "size1",
      title: "Size-1",
      type: "number",
    },
    {
      name: "size2",
      title: "Size-2",
      type: "number",
    },
    {
      name: "size3",
      title: "Size-3",
      type: "number",
    },
    {
      name: "size4",
      title: "Size-4",
      type: "number",
    },
    {
      name: "size5",
      title: "Size-5",
      type: "number",
    },
    {
      name: "size6",
      title: "Size-6",
      type: "number",
    },
    {
      name: "size7",
      title: "Size-7",
      type: "number",
    },
    { name: "details", title: "Details", type: "string" },
  ],
};
