// favfly-details-pricing - required

export default {
  title: "Detailed Pricing",
  name: "favfly-detailed-pricing",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Table Heading",
      name: "tableHeading",
      type: "array",
      of: [
        {
          title: "Heading Item",
          name: "headingItem",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
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
          ],
        },
      ],
    },
    {
      title: "Table Body",
      name: "tableBody",
      type: "array",
      of: [
        {
          Title: "Table Row",
          name: "tableRow",
          type: "tableRow",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (data) => {
      const { title } = data;

      return {
        title: title,
      };
    },
  },
};
