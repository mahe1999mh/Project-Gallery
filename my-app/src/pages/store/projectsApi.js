// projectsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),

  endpoints: (builder) => ({
    getProjectsApi: builder.query({
      query: () => "user/projects",
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: `/admin/projects`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getAllUserData: builder.query({
      query: () => ({
        url: "admin/getAllUser",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
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
  useAddPostMutation,
  useGetAllUserDataQuery,
} = projectsApi;
