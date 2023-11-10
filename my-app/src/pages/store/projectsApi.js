// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath:"projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    // Define your endpoints here
    getProjectsApi: build.query({
      query: () => `user/projects`,
    }),
    // createUser: build.mutation({
    //   query: (newUser) => ({
    //     url: 'user',
    //     method: 'POST',
    //     body: newUser,
    //   }),
    // }),
  }),
});

export const { useGetProjectsApiQuery } = projectsApi;
