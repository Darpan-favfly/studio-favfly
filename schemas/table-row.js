export default {
  title: "Table Row",
  name: "tableRow",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Info",
      name: "info",
      type: "text",
    },
    {
      name: "items",
      type: "array",
      of: [
        {
          title: "Details",
          name: "details",
          type: "string",
        },
      ],
    },
  ],
};
