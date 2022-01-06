import { InMemoryCache, NormalizedCacheObject } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const api = new ApolloClient<NormalizedCacheObject>({
    uri: 'http://localhost:4000/graphql',
});

export default api;