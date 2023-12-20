/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getAll: Array<Array<TimeScheduleModel2>>;
  getBookingSpots: Array<Array<TimeScheduleModel>>;
};

export type TimeScheduleModel = {
  __typename?: 'TimeScheduleModel';
  exist: Scalars['Boolean']['output'];
  isAvailable: Scalars['Boolean']['output'];
  time: Scalars['String']['output'];
};

export type TimeScheduleModel2 = {
  __typename?: 'TimeScheduleModel2';
  day: Scalars['Float']['output'];
  spots: Array<TimeScheduleModel>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'Query', getAll: Array<Array<{ __typename?: 'TimeScheduleModel2', day: number, spots: Array<{ __typename?: 'TimeScheduleModel', time: string, isAvailable: boolean, exist: boolean }> }>> };



export const GetAllDocument = gql`
    query getAll {
  getAll {
    day
    spots {
      time
      isAvailable
      exist
    }
  }
}
    `;

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
}
export function useGetAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
}
export function useGetAllSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
}
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllSuspenseQueryHookResult = ReturnType<typeof useGetAllSuspenseQuery>;
export type GetAllQueryResult = Apollo.QueryResult<GetAllQuery, GetAllQueryVariables>;