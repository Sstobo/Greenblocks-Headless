

import {
    ApolloClient,
    InMemoryCache,
    gql,
} from "@apollo/client";
import dotenv from 'dotenv';
dotenv.config();
import { allPages } from '@/types/navigation';

interface PageResponse {
    allPages: allPages
}

const getAllPages = async () => {
    const client = new ApolloClient({
        uri: process.env.GRAPHQL_ENDPOINT,
        cache: new InMemoryCache(),
    });

    const { data } = await client.query<PageResponse>({
        query: gql`
            query AllPages {
                pages {
                    nodes {
                        uri
                        title
                    }
                }
            }
        `,
    });

    if (data) {
        console.log(data.pages);
        return data.pages;

    } else {
        throw new Error("No data received from the query");
    }
}

export default getAllPages;