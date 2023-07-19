// Team Members - required

const religion = [
  { title: "Christianity", value: "Christianity" },
  { title: "Islam", value: "Islam" },
  { title: "Secular", value: "Secular" },
  { title: "Hinduism", value: "Hinduism" },
  { title: "Buddhism", value: "Buddhism" },
  { title: "Chinese", value: "Chinese" },
  { title: "Ethnic", value: "Ethnic" },
  { title: "African", value: "African" },
  { title: "Sikhism", value: "Sikhism" },
  { title: "Spiritism", value: "Spiritism" },
  { title: "Judaism", value: "Judaism" },
  { title: "Baháʼí", value: "Baháʼí" },
  { title: "Jainism", value: "Jainism" },
  { title: "Shinto", value: "Shinto" },
  { title: "Cao", value: "Cao" },
  { title: "Zoroastrianism", value: "Zoroastrianism" },
  { title: "Tenrikyo", value: "Tenrikyo" },
  { title: "Animism", value: "Animism" },
  { title: "Neo", value: "Neo" },
  { title: "Unitarian", value: "Unitarian" },
  { title: "Rastafari", value: "Rastafari" },
];

const role = [
  { title: "Digital Marketing Manager", value: "Digital Marketing Manager" },
  { title: "SEO Manager", value: "SEO Manager" },
  { title: "PPC (Pay-Per-Click) Specialist", value: "PPC Specialist" },
  { title: "Social Media Manager", value: "Social Media Manager" },
  { title: "Content Marketing Manager", value: "Content Marketing Manager" },
  { title: "Email Marketing Specialist", value: "Email Marketing Specialist" },
  { title: "Analytics Manager", value: "Analytics Manager" },
  { title: "Conversion Rate Optimization Specialist", value: "CRO Specialist" },
  {
    title: "Digital Advertising Manager",
    value: "Digital Advertising Manager",
  },
  { title: "Copywriter", value: "Copywriter" },
  { title: "Graphic Designer", value: "Graphic Designer" },
  { title: "Web Developer", value: "Web Developer" },
  { title: "Front-end Developer", value: "Front-end Developer" },
  { title: "UX/UI Designer", value: "UX/UI Designer" },
  {
    title: "Digital Marketing Coordinator",
    value: "Digital Marketing Coordinator",
  },
];

export default {
  name: "members",
  title: "Team Members",
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
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      title: "Address",
      name: "address",
      type: "string",
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
      title: "Role",
      name: "role",
      type: "string",
      options: {
        list: role,
      },
    },
    {
      title: "Joined Date",
      name: "joinedDate",
      type: "date",
    },
    {
      title: "Resigned Date",
      name: "resignedDate",
      type: "date",
    },
    {
      title: "Aadhar Card",
      name: "aadharCard",
      type: "file",
    },
    {
      title: "Bank Passbook",
      name: "bankPassbook",
      type: "file",
    },
    {
      title: "HS Certificate",
      name: "hsCertificate",
      type: "file",
    },
    {
      title: "Offer Letter",
      name: "offerLetter",
      type: "file",
    },
    {
      title: "Joining Letter",
      name: "joiningLetter",
      type: "file",
    },
    {
      title: "Resign Letter",
      name: "resignLetter",
      type: "file",
    },
    {
      title: "Portfolio Link",
      name: "portfolioLink",
      type: "url",
    },
    {
      title: "Social Media Handles",
      name: "socialMediaHandles",
      type: "object",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
        modal: { type: "popover" }, //Makes the modal type a popover
      },
      fields: [
        {
          title: "Facebook",
          name: "facebook",
          type: "url",
        },
        {
          title: "Instagram",
          name: "instagram",
          type: "url",
        },
        {
          title: "Linkedin",
          name: "linkedin",
          type: "url",
        },
        {
          title: "Twitter",
          name: "twitter",
          type: "url",
        },
      ],
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
      name: "Relationship",
      type: "string",
      options: {
        list: [
          { title: "Single", value: "Single" },
          { title: "Married", value: "Married" },
        ],
      },
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
