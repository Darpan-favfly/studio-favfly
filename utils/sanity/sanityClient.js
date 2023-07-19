const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN_ID;

import { createClient } from "next-sanity";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  ignoreBrowserTokenWarning: true,
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

export default client;
