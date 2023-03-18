import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client =  new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clfef59nz19h701te2ulk4iqh/master',
    cache: new InMemoryCache()
})