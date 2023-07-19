import fetchData from "@/utils/sanity/fetchData";
import ProjectList from "@/components/project/ProjectList";

const ProjectsPage = async () => {
  const query = `
  *[_type == "projects" && !(_id in path("drafts.**"))] {
    closedDate,
      startDate,
      renewDate,
      status,
      projectType,
      "company": company -> {
      brandName
      },
      initialStartDate
  }`;

  const data = await fetchData(query);

  return (
    <>
      <ProjectList data={data} />
    </>
  );
};

export default ProjectsPage;
