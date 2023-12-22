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
    //Get ALL Project data
    getAllProjectData: builder.query({
      query: () => ({
        url: "admin/projects",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    //Get All userLogin Data
    getAllUserData: builder.query({
      query: () => ({
        url: "admin/getAllUser",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    //DELETE Project
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `admin/projects/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProjectsApiQuery,
  useGetAllProjectDataQuery,
  useAddPostMutation,
  useGetAllUserDataQuery,
  useDeleteProjectMutation,
} = projectsApi;
