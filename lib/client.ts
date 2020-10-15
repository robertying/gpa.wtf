import { useMemo } from "react";
import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { getUserSession } from "./cognito";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/v1/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const { session } = await getUserSession();
  const token = session?.getIdToken().getJwtToken();
  return {
    headers: {
      ...headers,
      ...(token
        ? {
            Authorization: "Bearer " + token,
          }
        : undefined),
    },
  };
});

const clientLink = authLink.concat(httpLink);
const serverLink = new HttpLink({
  uri: `${process.env.API_URL}/v1/graphql`,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  },
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: typeof window === "undefined" ? serverLink : clientLink,
    cache: new InMemoryCache({
      typePolicies: {
        course_review: {
          keyFields: ["course_id", "user_id"],
        },
        course_grade: {
          keyFields: ["course_id", "user_id"],
        },
      },
    }),
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
