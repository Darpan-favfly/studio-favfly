// projects - required

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      title: "Project Type",
      name: "projectType",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "Website" },
          { title: "SEO", value: "SEO" },
          { title: "SMM", value: "SMM" },
          { title: "Domain", value: "Domain" },
        ],
      },
    },
    {
      title: "Company",
      name: "company",
      type: "reference",
      to: [{ type: "companies" }],
    },
    {
      title: "Initial Start Date",
      name: "initialStartDate",
      type: "date",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      title: "Renew Date",
      name: "renewDate",
      type: "date",
    },
    {
      title: "Closed Date",
      name: "closedDate",
      type: "date",
    },
    // {
    //   title: "Current Cost",
    //   name: "currentCost",
    //   type: "number",
    // },
    // {
    //   title: "Current Plan",
    //   name: "currentPlan",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Surge", value: "Surge" },
    //       { title: "Grow", value: "Grow" },
    //       { title: "Excel", value: "Excel" },
    //     ],
    //   },
    // },
    // {
    //   title: "Recommended Plan",
    //   name: "recommendedPlan",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Surge", value: "Surge" },
    //       { title: "Grow", value: "Grow" },
    //       { title: "Excel", value: "Excel" },
    //     ],
    //   },
    // },
    // {
    //   title: "Recommended Cost",
    //   name: "recommendedCost",
    //   type: "number",
    // },
    // invoice file
    // payment status
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
      },
    },
  ],
  preview: {
    select: {
      projectType: "projectType",
      plan: "currentPlan",
      media: "company.logo",
      companyName: "company.brandName",
    },
    prepare: (data) => {
      const { projectType, plan, media, companyName } = data;

      return {
        title: projectType,
        subtitle: companyName
          ? `- ${companyName} ${plan ? `(${plan})` : ""}`
          : "",
        media: media,
      };
    },
  },
};
