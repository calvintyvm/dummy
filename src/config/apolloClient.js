import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjil82mla6ehw0106yerzafau"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
