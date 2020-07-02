import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};


export type CreateTodoInput = {
  id?: Maybe<Scalars['ID']>;
  completed: Scalars['Boolean'];
  text: Scalars['String'];
};

export type DeleteTodoInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelTodoConditionInput = {
  completed?: Maybe<ModelBooleanInput>;
  text?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelTodoConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelTodoConditionInput>>>;
  not?: Maybe<ModelTodoConditionInput>;
};

export type ModelTodoConnection = {
  __typename?: 'ModelTodoConnection';
  items?: Maybe<Array<Maybe<Todo>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTodoFilterInput = {
  id?: Maybe<ModelIdInput>;
  completed?: Maybe<ModelBooleanInput>;
  text?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelTodoFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelTodoFilterInput>>>;
  not?: Maybe<ModelTodoFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  listTodos?: Maybe<ModelTodoConnection>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryListTodosArgs = {
  filter?: Maybe<ModelTodoFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onUpdateTodo?: Maybe<Todo>;
  onDeleteTodo?: Maybe<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  completed: Scalars['Boolean'];
  text: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export type UpdateTodoInput = {
  id: Scalars['ID'];
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type ListTodosQueryVariables = Exact<{
  filter?: Maybe<ModelTodoFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListTodosQuery = (
  { __typename?: 'Query' }
  & { listTodos?: Maybe<(
    { __typename?: 'ModelTodoConnection' }
    & Pick<ModelTodoConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'completed' | 'text' | 'createdAt' | 'updatedAt'>
    )>>> }
  )> }
);


export const ListTodosDocument = gql`
    query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      completed
      text
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, baseOptions);
      }
export function useListTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, baseOptions);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = ApolloReactCommon.QueryResult<ListTodosQuery, ListTodosQueryVariables>;