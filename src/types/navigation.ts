export interface Menu {
    id: string,
    databaseId: string,
    name: string,
    slug: string,
    menuItems: {
        nodes: {
            id: string,
            databaseId: string,
            title: string,
            url: string,
            cssClasses: string,
            description: string,
            label: string,
            linkRelationship: string,
            target: string,
            parentId: string,
            uri: string,
        }[]
    }
  }
    export interface NavProps {
      menu: Menu[],
      target: string,
    }

    

    export interface allPages {
      pages: {
        uri: string,
        title: string
      }[]
}
