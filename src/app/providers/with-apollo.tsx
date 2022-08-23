import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export const withApollo = (component: () => React.ReactNode) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>;
