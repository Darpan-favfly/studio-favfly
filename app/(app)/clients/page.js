import fetchData from "@/utils/sanity/fetchData";
import UserList from "@/components/user/UserList";

const ClientsPage = async () => {
  const query = `
  *[_type == "companies" && defined(contactedPerson) && !(_id in path("drafts.**"))]{
    brandName,
      contactedPerson {
        role,
        "client": client -> {
          _id,
          "image": profileImage.asset -> url,
          name,
          email,
          phoneNumber,
          whatsappNumber,
          lastContacted,
          dob,
          socialMediaHandles,
        },
    }
  }`;

  const data = await fetchData(query);

  return (
    <>
      <UserList data={data} />
    </>
  );
};

export const revalidate = 60; // revalidate this page every 60 seconds
export default ClientsPage;
