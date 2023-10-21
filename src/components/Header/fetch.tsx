import { MenuData, MenuEdge } from './types';

export async function fetchMenus(): Promise<MenuData[]> {
    const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT || '';
    const query = `
        query {
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
          }`;

    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error('Error fetching menus');
    }

    const { data } = await response.json();
    const menuData = data.menus.edges.map((edge: MenuEdge) => edge.node);

    return menuData;
}