// authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/admin' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        body: loginData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export const selectToken = (state) => {
  return state.authApi.endpoints.login.selectors.mutationResultSelector({}).data?.token;
};
