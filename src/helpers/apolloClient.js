import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://summary-killdeer-37.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "35i2ThqmiYNP3w8enfZILrv0tkhHbbkRzIUNlEa3qZwYbpsdYgp7ScHDST6psnfD",
  },
});
