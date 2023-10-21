import {PageQueryResult} from "./types";

async function fetchPageData(uri: string) {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
    const postQuery = `
    query CurrentPage($uri: String!) {
        pageBy(uri: $uri) {
          content
          date
          databaseId
          featuredImageId
          pageId
          parentId
          slug
          title
          uri
        }
      }`;
   
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: postQuery,
        variables: { uri },
      }),
    };
    
    const res: Response = await fetch(GRAPHQL_URL, options);
   
    if (!res.ok) {
      throw new Error(`Failed to fetch the data`);
    }
    const data: PageQueryResult = await res.json();
   
    return data.data.pageBy;
   }

   export default fetchPageData;