// projectsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),

  endpoints: (builder) => ({
    getProjectsApi: builder.query({
      query: () => 'user/projects',
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
