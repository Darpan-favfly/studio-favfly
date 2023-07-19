// portfolios - required

export default {
  name: "portfolios",
  title: "Portfolios",
  type: "document",
  fields: [
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "SEO", value: "seo" },
          { title: "Logo", value: "logo" },
          { title: "Video", value: "video" },
          { title: "Graphics", value: "graphics" },
        ],
      },
    },
    {
      title: "Portfolios",
      name: "portfolios",
      type: "array",
      of: [
        {
          title: "Portfolio Item",
          name: "portfolioItem",
          type: "object",
          fields: [
            {
              title: "Company Name",
              name: "companyName",
              type: "string",
            },
            {
              title: "Website Link",
              name: "websiteLink",
              type: "url",
            },
            {
              title: "Business Category",
              name: "businessCategory",
              type: "string",
              options: {
                list: [
                  { title: "Photography", value: "photography" },
                  { title: "Gym", value: "gym" },
                  { title: "Interior", value: "interior" },
                  { title: "Cake", value: "cake" },
                  { title: "Makeup", value: "makeup" },
                  { title: "Video Production", value: "video_production" },
                  { title: "Hotel", value: "hotel" },
                  { title: "Health", value: "health" },
                  { title: "Education", value: "education" },
                  { title: "Aquaculture", value: "aquaculture" },
                  { title: "Event Planning", value: "event_planning" },
                  { title: "Game", value: "game" },
                  { title: "Online Auction", value: "online_auction" },
                  { title: "Online Store", value: "online_store" },
                  { title: "Electric Vehicle", value: "electric_vehicle" },
                  { title: "Marketing", value: "marketing" },
                  { title: "Insurance", value: "insurance" },
                  { title: "Wedding Planner", value: "wedding_planner" },
                  { title: "Advocate", value: "advocate" },
                  { title: "Sports", value: "sports" },
                ],
              },
            },
            {
              title: "Image",
              name: "image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  title: "Alt",
                  name: "alt",
                  type: "string",
                },
              ],
            },
            {
              title: "Video Link",
              name: "videoLink",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: "category",
    },
    prepare: (data) => {
      const { heading } = data;

      return {
        title: heading,
      };
    },
  },
};
