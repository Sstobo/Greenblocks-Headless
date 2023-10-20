export interface CurrentPage {
    content: string,
    date: string,
    databaseId: string,
    featuredImageId: string,
    pageId: string,
    parentId: string,
    slug: string,
    title: string,
    uri: string,
}

export interface CurrentPageProps {
    currentPage: CurrentPage,
}