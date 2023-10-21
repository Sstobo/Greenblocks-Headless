import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
  } from "@apollo/client";
  import dotenv from 'dotenv';
  dotenv.config();
  import { Menu } from "@/types/navigation";

  interface MenuEdge {
    node: Menu;
  }

  
  const getMenu = async () => {
  
    const client = new ApolloClient({
        // uri: process.env.GRAPHQL_ENDPOINT,
        uri: "https://seanstobo.com/graphql",
        cache: new InMemoryCache(),
    });
    
    const response = await client.query({
        query: gql`
        query AllMenus {
            menus {
              edges {
                node {
                  id
                  databaseId
                  name
                  slug
                  menuItems {
                    nodes {
                      id
                      databaseId
                      title
                      url
                      cssClasses
                      description
                      label
                      linkRelationship
                      target
                      parentId
                      uri
                    }
                  }
                }
              }
            }
          }
        `,
    }).then((result) => {
        return result;
    });
    const menus = response?.data?.menus?.edges?.map(({ node }: MenuEdge) => node) || [];
    console.log('menu', response);
    return menus;
  }
  
  export default getMenu;
  