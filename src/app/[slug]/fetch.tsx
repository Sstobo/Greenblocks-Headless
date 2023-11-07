import { PageQueryResult } from "./types";

async function fetchPageData(slug: string) {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
    const pageQuery = `
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
        query: pageQuery,
        variables: { uri: slug },
      }),
    };
    
    const res: Response = await fetch(GRAPHQL_URL, options);
   
    if (!res.ok) {
      throw new Error(`Failed to fetch the data`);
    }
    const data: PageQueryResult = await res.json();
    console.log(data);
    return data?.data?.pageBy;
   }
   
   export default fetchPageData;