import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import dotenv from 'dotenv';
dotenv.config();

export interface CurrentPage {
  content: string
  date: string
  databaseId: number
  featuredImageId: number
  pageId: number
  parentId: number
  slug: string
  title: string
  uri: string
}

interface CurrentResponse {
  pageBy: CurrentPage
}

const getCurrentPage = async (uri: string) => {
  const client = new ApolloClient({
      uri: process.env.GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
  });

  const { data } = await client.query<CurrentResponse>({
    query: gql`
    query CurrentPage($uri: String!) {
      pageBy(uri: $uri) {
        content
        date
        databaseId
        featuredImageId
        pageId
        parentId
        slug
        title
        uri
      }
    }
    `,
    variables: {
        uri,
    },
  });

  return data.pageBy;
}

export default getCurrentPage;