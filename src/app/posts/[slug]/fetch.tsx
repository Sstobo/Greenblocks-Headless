import { PostQueryResult } from "./types";


async function fetchPostData(slug: string) {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
    const postQuery = `
      query PostBySlug($slug: String!) {
          postBy(slug: $slug) {
            content
            date
            title
            uri
            slug
            featuredImage {
              node {
                uri
                sourceUrl
                title
                altText
              }
            }
          }
        }`;
   
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: postQuery,
        variables: { slug },
      }),
    };
    
    const res: Response = await fetch(GRAPHQL_URL, options);
   
    if (!res.ok) {
      throw new Error(`Failed to fetch the data`);
    }
    const data: PostQueryResult = await res.json();
   
    return data.data.postBy;
   }

   export default fetchPostData;