import {
  CreateTodoMutation,
  CreateTodoMutationVariables,
  ListTodosDocument,
  ListTodosQuery,
} from '../generated/graphql-hooks'
import { MutationFunctionOptions } from '@apollo/react-common'

export const createTodoMutationOptions = (
  variables: CreateTodoMutationVariables
): MutationFunctionOptions<CreateTodoMutation, CreateTodoMutationVariables> => {
  return {
    variables,
    optimisticResponse: {
      __typename: 'Mutation',
      createTodo: {
        __typename: 'Todo',
        id: 'temp',
        text: variables.input.text,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    update: (cache, { data: { createTodo } }: any) => {
      try {
        const data = cache.readQuery<ListTodosQuery>({
          query: ListTodosDocument,
        })
        if (data) {
          data.listTodos?.items?.push(createTodo)
          cache.writeQuery<ListTodosQuery>({
            query: ListTodosDocument,
            data,
          })
        }
      } catch {}
    },
  }
}
