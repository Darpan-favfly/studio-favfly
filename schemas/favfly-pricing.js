// favfly-pricing - required

export default {
  name: "favfly-pricing",
  title: "Pricing",
  type: "document",
  fields: [
    {
      title: "Sub Heading",
      name: "subHeading",
      type: "string",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Pricing Table",
      name: "pricingTable",
      type: "array",
      of: [
        {
          title: "Table Item",
          name: "tableItem",
          type: "object",
          fields: [
            {
              title: "Tag",
              name: "tag",
              type: "string",
              options: {
                list: [{ title: "Most Popular", value: "most-popular" }],
              },
            },
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Details",
              name: "details",
              type: "string",
            },
            {
              title: "Price",
              name: "price",
              type: "number",
            },
            {
              title: "Button Text",
              name: "buttonText",
              type: "string",
            },
            {
              title: "Button Link",
              name: "buttonLink",
              type: "url",
            },
            {
              name: "list",
              title: "List",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare: (data) => {
      const { heading } = data;

      return {
        title: heading,
      };
    },
  },
};
