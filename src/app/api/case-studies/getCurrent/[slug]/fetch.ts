export interface FeaturedImage {
    node: {
      altText: string;
      sourceUrl: string;
    };
  }
  
  export interface CaseStudyContent {
    imageOne: {
      altText: string;
      sourceUrl: string;
    };
    imageThree: {
      altText: string;
      sourceUrl: string;
    };
    imageTwo: {
      altText: string;
      sourceUrl: string;
    };
    primaryContent: string;
    secondaryContent: string;
    externalLink: string;
  }
  
  export interface CaseStudy {
    CaseStudyCPT: CaseStudyContent;
    date: string;
    content: string; // Assuming format is set to RENDERED in your query
    featuredImage: FeaturedImage;
    title: string;
    uri: string;
    slug: string;
  }
  
  export interface CaseStudyBySlugData {
    caseStudyBy: CaseStudy;
  }
  
  export interface CaseStudyQueryResult {
    data: CaseStudyBySlugData;
  }
  
  async function getCurrentCaseStudy(slug: string) {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
    const postQuery = `
    query CaseByUri($slug: String!) {
        caseStudyBy(slug: $slug) {
          CaseStudyCPT {
            imageOne {
              altText
              sourceUrl
            }
            imageThree {
              altText
              sourceUrl
            }
            imageTwo {
              altText
              sourceUrl
            }
            primaryContent
            secondaryContent
            externalLink
          }
          date
          content(format: RENDERED)
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          title
          uri
          slug
        }
      }
          `;
  
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
    const response: CaseStudyQueryResult = await res.json();
    console.log(response);
  
    return response.data.caseStudyBy;
  }
  
  export default getCurrentCaseStudy;


// export interface Post {
//   content: string;
//   date: string;
//   title: string;
//   uri: string;
//   slug: string;
//   featuredImage: {
//     node: {
//       uri: string;
//       sourceUrl: string;
//       title: string;
//       altText: string;
//     };
//   };
// }

// export interface PostData {
//   postBy: Post;
// }

// export interface PostQueryResult {
//   data: {
//     postBy: Post;
//   };
// }



// async function getCurrentPosts(slug: string) {
//   const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
//   const postQuery = `
//     query PostBySlug($slug: String!) {
//         postBy(slug: $slug) {
//           content
//           date
//           title
//           uri
//           slug
//           featuredImage {
//             node {
//               uri
//               sourceUrl
//               title
//               altText
//             }
//           }
//         }
//       }`;
 
//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: postQuery,
//       variables: { slug },
//     }),
//   };
  
//   const res: Response = await fetch(GRAPHQL_URL, options);
 
//   if (!res.ok) {
//     throw new Error(`Failed to fetch the data`);
//   }
//   const response: PostQueryResult = await res.json();
//   console.log(response);
 
//   return response.data.postBy;
//  }

//  export default getCurrentPosts;