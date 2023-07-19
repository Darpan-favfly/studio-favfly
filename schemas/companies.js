// companies - required

const role = [
  { title: "CEO", value: "ceo" },
  { title: "CFO", value: "cfo" },
  { title: "COO", value: "coo" },
  { title: "HR Manager", value: "hr-manager" },
  { title: "Marketing Manager", value: "marketing-manager" },
  { title: "Sales Representative", value: "sales-representative" },
  { title: "Operations Manager", value: "operations-manager" },
  { title: "IT Manager", value: "it-manager" },
  { title: "Project Manager", value: "project-manager" },
  {
    title: "Customer Service Representative",
    value: "customer-service-representative",
  },
];

export default {
  name: "companies",
  title: "Companies",
  type: "document",
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Brand Name",
      name: "brandName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.email(),
    },
    {
      title: "About",
      name: "about",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Office Location",
      name: "officeLocation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Established Date",
      name: "establishedDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Joined Date",
      name: "joinedDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
      },
    },
    {
      title: "Projects",
      name: "projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
    },
    {
      title: "Contacted Person",
      name: "contactedPerson",
      type: "object",
      fields: [
        {
          title: "Client",
          name: "client",
          type: "reference",
          to: [{ type: "clients" }],
        },
        {
          title: "Role",
          name: "role",
          type: "string",
          options: {
            list: role,
          },
        },
      ],
    },
    {
      title: "Team Members",
      name: "teamMembers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Client",
              name: "client",
              type: "reference",
              to: [{ type: "clients" }],
            },
            {
              title: "Role",
              name: "role",
              type: "string",
              options: {
                list: role,
              },
            },
          ],
          preview: {
            select: {
              client: "client.name",
              logo: "client.profileImage",
              role: "role",
            },
            prepare: (data) => {
              const { client, logo, role } = data;

              return {
                title: client,
                subtitle: `- ${role}`,
                media: logo,
              };
            },
          },
        },
      ],
    },
    {
      title: "Website",
      name: "website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      title: "Social Media Handles",
      name: "socialMediaHandles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Platform",
              name: "platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" },
                ],
              },
            },
            {
              title: "Link",
              name: "link",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https"],
                }),
            },
          ],
        },
      ],
    },
    {
      title: "Future Status",
      name: "futureStatus",
      type: "string",
      options: {
        list: [
          { title: "Growing", value: "Growing" },
          { title: "Saturated", value: "Saturated" },
          { title: "Loosing", value: "Loosing" },
        ],
      },
    },
    {
      title: "GST No. (optional)",
      name: "gstNo",
      type: "string",
    },
    {
      title: "Monthly Income",
      name: "monthlyIncome",
      type: "number",
    },
    {
      title: "Yearly Turnover",
      name: "yearlyTurnover",
      type: "number",
    },
    {
      title: "Lifetime Value",
      name: "lifetimeValue",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "brandName",
      media: "logo",
      // member: "clients.0.name", // <- clients.0 is a reference to author, and the preview component will automatically resolve the reference and return the name
      member: "",
    },
    prepare: (data) => {
      const { title, member, media } = data;

      return {
        title: title,
        subtitle: member ? `- ${member}` : "",
        media: media,
      };
    },
  },
};
