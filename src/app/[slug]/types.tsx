export interface CurrentPage {
  content: string;
  date: string;
  databaseId: number;
  featuredImageId: number;
  pageId: number;
  parentId: number;
  slug: string;
  title: string;
  uri: string;
}

export interface PageInfo {
  pageBy: CurrentPage;
}

export interface PageProps {
  params: {
    slug: string;
  };
}



 export interface PageQueryResult {
    data: PageInfo;
  }