export interface PostImageNode {
    uri: string
  }
  
  export interface PostImage {
    node: PostImageNode
  }
  
  export interface PostNode {
    content: string
    date: string
    featuredImage: PostImage
    title: string
    uri: string
    slug: string
  }
  
  export interface PostEdge {
    node: PostNode
  }
  
  export interface Posts {
    edges: PostEdge[]
  }
  
  export interface AllPosts {
    posts: Posts
  }