// adminProjectsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getToken = () => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTY5OTg4NTM5NywiZXhwIjoxNjk5ODg4OTk3fQ.FVpFAjNz9BPj_JL0zFGbThJTXzQht9vqmgxBfXkG4hk';
};

export const adminProjectsApi = createApi({
    reducerPath: 'adminProjectsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/admin',
        prepareHeaders: (headers, { getState }) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Custom name for the query hook
        AdminProjects: builder.query({
            query: () => '/projects',
        }),
    }),
});

// Destructure the custom query hook
export const { useAdminProjectsQuery } = adminProjectsApi;
