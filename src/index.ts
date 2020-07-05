import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

interface Options {
  uri: string
  apiKey: string
}

export const apolloClient = ({ uri, apiKey }: Options) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
      headers: {
        'x-api-key': apiKey,
      },
    }),
  })
}

export * from './generated/graphql-hooks'
export * from './options/createTodoMutationOptions'
