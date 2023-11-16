// projectsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { selectToken } from './authApi';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),

  endpoints: (builder) => ({
    getProjectsApi: builder.query({
      query: () => 'user/projects',
    }),

    getProjectsAdmin: builder.query({
      query: () => 'admin/projects',
      transformHeaders: (headers, { getState }) => {
        const token = selectToken(getState()); // Ensure selectToken returns an object with a 'token' property

        console.log('Transforming Headers. Token:', token);

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
          headers.set('Content-Type', 'application/json');
        }

        return headers;
      },
    }),

    createProjectUser: builder.mutation({
      // Define mutation configuration here
    }),
  }),
});

export const {
  useGetProjectsApiQuery,
  useGetProjectsAdminQuery,
  createProjectUser,
} = projectsApi;
