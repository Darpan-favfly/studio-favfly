import fetchData from "@/utils/sanity/fetchData";
import CompanyList from "@/components/company/CompanyList";

const CompaniesPage = async () => {
  const query = `
  *[_type == "companies" && !(_id in path("drafts.**"))] {
    "logo": logo.asset -> url,
    brandName,
    joinedDate,
    status,
    "members": teamMembers[] -> {
        name,
        "image": profileImage.asset -> url,
      },
    "projects": projects[] -> {
      projectType
    },
    website,
    lifetimeValue,
    monthlyIncome,
}`;

  const data = await fetchData(query);

  return (
    <>
      <CompanyList data={data} />
    </>
  );
};

export const revalidate = 60; // revalidate this page every 60 seconds
export default CompaniesPage;
