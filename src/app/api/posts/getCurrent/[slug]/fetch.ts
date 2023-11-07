export interface Post {
    content: string;
    date: string;
    title: string;
    uri: string;
    slug: string;
    featuredImage: {
      node: {
        uri: string;
        sourceUrl: string;
        title: string;
        altText: string;
      };
    };
  }
  
  export interface PostData {
    postBy: Post;
  }
  
  export interface PostQueryResult {
    data: {
      postBy: Post;
    };
  }



async function getCurrentPosts(slug: string) {
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
    const response: PostQueryResult = await res.json();
    console.log(response);
   
    return response.data.postBy;
   }

   export default getCurrentPosts;