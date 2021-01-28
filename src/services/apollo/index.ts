import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { setContext } from "@apollo/client/link/context";
import { localStorageTokens } from "@constants";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  const productionUri =
    typeof window !== "undefined"
      ? "/admin/graphql"
      : "https://admin.mypolitics.pl/graphql";

  const httpLink = createHttpLink({
    uri:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:5000/graphql"
        : productionUri,
  });

  const authLink = setContext((_, { headers }) => {
    if (typeof window === "undefined") {
      return { headers };
    }

    const respondentToken = localStorage.getItem(localStorageTokens.respondent);

    return {
      headers: {
        ...headers,
        "mypolitics-respondent": respondentToken || "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
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
