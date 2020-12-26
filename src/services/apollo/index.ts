import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  const productionUri =
    typeof window !== "undefined"
      ? "/admin/graphql"
      : "https://admin.mypolitics.pl/graphql";

  return new ApolloClient({
    link: createHttpLink({
      uri:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:1337/graphql"
          : productionUri,
    }),
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
