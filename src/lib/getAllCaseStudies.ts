
async function getAllCaseStudies() {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || "";
  
    interface FeaturedImage {
      node: {
        sourceUrl: string;
        altText?: string;
      };
    }
  
    interface CaseStudyNode {
      content: string;
      date: string;
      title: string;
      uri: string;
      slug: string;
      featuredImage: FeaturedImage;
    }
  
    interface CaseStudyEdge {
      node: CaseStudyNode;
    }
  
    interface CaseStudiesQueryResult {
      data: {
        caseStudies: {
          edges: CaseStudyEdge[];
        };
      };
      errors?: any;
    }
  
    const query = `
  query allCases {
  caseStudies {
    edges {
      node {
        content
        date
        title
        uri
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
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
   
    const response: CaseStudiesQueryResult = await res.json();
    const finalData = response.data.caseStudies.edges.map(({ node }) => node);
  
    return finalData;
  }
  
  export default getAllCaseStudies;