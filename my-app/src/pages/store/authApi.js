
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
          username: loginData.username,
          password: loginData.password,
        },
      }),
    }),
    signup: builder.mutation({
      query: (signupData) => ({
        url: '/signup',
        method: 'POST',
        body: signupData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;

