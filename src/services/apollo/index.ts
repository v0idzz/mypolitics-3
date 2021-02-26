import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { BASE_PATH, Headers } from "@constants";
import getConfig from "next/config";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

const { publicRuntimeConfig } = getConfig();

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  const domain =
    publicRuntimeConfig.NODE_ENV === "production"
      ? BASE_PATH
      : "http://localhost:3000";

  const authLink = setContext((_, { headers }) => {
    if (typeof window === "undefined") {
      return { headers };
    }

    const keyExists = (key) => localStorage.getItem(Headers[key]) !== null;
    const toKeyEntry = (key) => [
      Headers[key],
      localStorage.getItem(Headers[key]),
    ];
    const headersEntries = Object.keys(Headers)
      .filter(keyExists)
      .map(toKeyEntry);

    return {
      headers: {
        ...headers,
        ...Object.fromEntries(headersEntries),
      },
    };
  });

  const httpLink = createHttpLink({
    uri: `${domain}/admin/graphql`,
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
  });
}

export const initializeApollo = (
  initialState: NormalizedCacheObject = null
): ApolloClient<NormalizedCacheObject> => {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient =
    apolloClient === undefined ? createApolloClient() : apolloClient;

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> =>
  useMemo(() => initializeApollo(initialState), [initialState]);
