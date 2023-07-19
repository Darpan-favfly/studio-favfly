import client from "./sanityClient";

async function fetchData(query) {
  const data = await client.fetch(query);
  return data;
}

export default fetchData;
