import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl4skki4726oy01wg7ntpaikv/master",
  cache: new InMemoryCache(),
});
