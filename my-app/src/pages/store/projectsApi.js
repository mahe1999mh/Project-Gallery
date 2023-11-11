// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath:"projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),

  //GET
  endpoints: (build) => ({
    getProjectsApi: build.query({
      query: () => `user/projects`, //endpoints
    }),

    createProject: build.mutation({
      query: (projectData) => ({
        url: '/projects',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `,
        },
        body: projectData,
      }),
    }),

  }),
});

export const { useGetProjectsApiQuery ,createProject } = projectsApi;
