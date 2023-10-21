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