import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://anilist.co/graphql',
  cache: new InMemoryCache(),
});
