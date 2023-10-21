
  import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
  } from "@apollo/client";
  import dotenv from 'dotenv';
  dotenv.config();

  const getMeta = async () => {
  
    const client = new ApolloClient({
        uri: process.env.GRAPHQL_ENDPOINT,
        cache: new InMemoryCache(),
    });
    const response = await client.query({
        query: gql`
        {
            generalSettings {
              dateFormat
              description
              email
              startOfWeek
              title
            }
          }
        `,
    }).then((result) => {
        return result;
    });
    const meta = response?.data?.generalSettings || [];
    console.log('met!!!a');
    return meta;    
  }
  
  export default getMeta;
  