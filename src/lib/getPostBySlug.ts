import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { PostNode } from "@/types/posts"; // replace this with your actual import line

interface PostEdge {
  node: PostNode;
}

const getAllPosts = async () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
    query GetPostBySlug {
        postBy(slug: "") {
          content
          date
          featuredImageId
          id
          title
        }
      }
    `,
  });

  const posts = response?.data?.posts?.edges?.map(({ node }: PostEdge) => node) || [];
  return posts;
}

export default getAllPosts;