export interface MenuItem {
    id: string;
    databaseId: string;
    title: string;
    url: string;
    cssClasses: string;
    description: string;
    label: string;
    linkRelationship: string;
    target: string;
    parentId: string;
    uri: string;
}

export interface MenuData {
    id: string;
    databaseId: string;
    name: string;
    slug: string;
    menuItems: {
        nodes: MenuItem[];
    };
}

export interface MenuEdge {
    node: MenuData;
}

export interface NavProps {
    menus: MenuData[];
    target: string;
}

export interface PageData {
    uri: string;
    title: string;
}

export interface AllPages {
    pages: PageData[];
}