
async function getAllPosts() {
  const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";

  interface PageQueryResult {
    data: {
      posts: {
        edges: {
          node: {
            content: string;
            date: string;
            featuredImage: {
              node: {
                uri: string;
              };
            };
            title: string;
            uri: string;
            slug: string;
          };
        }[];
      };
    };
    errors?: any;
  }

  const query = `
  query allPosts {
      posts {
        edges {
          node {
            content
            date
            featuredImage {
              node {
                uri
              }
            }
            title
            uri
            slug
          }
        }
      }
    }`;
 
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query
    }),
  };
  
  const res: Response = await fetch(GRAPHQL_URL, options);
 
  if (!res.ok) {
    throw new Error(`Failed to fetch the data`);
  }
 
  const response: PageQueryResult = await res.json();
  const finalData = response.data.posts.edges.map(({ node }) => node);

  return finalData;
 }
 
export default getAllPosts;