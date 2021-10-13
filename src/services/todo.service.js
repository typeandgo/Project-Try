import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['TODO'],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => 'posts',
      providesTags: ['TODO']
    }),
    getTodo: builder.query({
      query: id => `posts/${id}`
    }),
    addTodo: builder.mutation({
      query: data => ({
        url: 'posts',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['TODO']
    }),
  })
});

export const { useGetTodosQuery, useGetTodoQuery, useAddTodoMutation } = todoApi;

// https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics
// sepereate files
// add header
// interceptor