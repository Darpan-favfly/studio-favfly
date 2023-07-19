// clients - required

const religion = [
  { title: "Hinduism", value: "hinduism" },
  { title: "Islam", value: "islam" },
  { title: "Christianity", value: "christianity" },
  { title: "Sikhism", value: "sikhism" },
  { title: "Buddhism", value: "buddhism" },
  { title: "Jainism", value: "jainism" },
  { title: "Secular", value: "secular" },
  { title: "Chinese", value: "chinese" },
  { title: "Ethnic", value: "ethnic" },
  { title: "African", value: "african" },
  { title: "Spiritism", value: "spiritism" },
  { title: "Judaism", value: "judaism" },
  { title: "Baháʼí", value: "baháʼí" },
  { title: "Shinto", value: "shinto" },
  { title: "Cao", value: "cao" },
  { title: "Zoroastrianism", value: "zoroastrianism" },
  { title: "Tenrikyo", value: "tenrikyo" },
  { title: "Animism", value: "animism" },
  { title: "Neo", value: "neo" },
  { title: "Unitarian", value: "unitarian" },
  { title: "Rastafari", value: "rastafari" },
];

export default {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      title: "Profile Image",
      name: "profileImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "About",
      name: "about",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    },
    {
      title: "Whatsapp Number",
      name: "whatsappNumber",
      type: "string",
    },
    {
      title: "Companies",
      name: "companies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "companies" }],
        },
      ],
    },
    {
      title: "Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      title: "Last Contacted",
      name: "lastContacted",
      type: "date",
      readOnly: true,
    },
    {
      title: "Current Address",
      name: "currentAddress",
      type: "string",
    },

    {
      title: "Religion",
      name: "religion",
      type: "string",
      options: {
        list: religion,
      },
    },
    {
      title: "Relationship",
      name: "relationship",
      type: "string",
      options: {
        list: [
          { title: "Single", value: "single" },
          { title: "Married", value: "married" },
        ],
      },
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
      title: "Satisfied",
      name: "satisfied",
      type: "string",
      options: {
        list: [
          { title: "5", value: "5" },
          { title: "4", value: "4" },
          { title: "3", value: "3" },
          { title: "2", value: "2" },
          { title: "1", value: "1" },
        ],
      },
    },
    {
      title: "Note",
      name: "note",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "name",
      role: "role",
      media: "profileImage",
    },
    prepare: (data) => {
      const { title, role, media } = data;

      return {
        title: title,
        subtitle: role ? role : "",
        media: media,
      };
    },
  },
};
