import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  concat,
  from,
} from "@apollo/client";
import config from "../../config/graphqlConfig";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const httpLink = new HttpLink({ uri: config.graphQlUrl });
export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      nextFetchPolicy: "cache-and-network",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});


export const refetchQueries = () =>
  apolloClient.refetchQueries({
    include: 'active',
  });