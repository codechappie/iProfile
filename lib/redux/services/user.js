// https://jsonplaceholder.typicode.com/posts/1
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL || "http://localhost:3000/api/",
    }),
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: ({ id }) => `user/${id}`,
        })
    })
});

export const { useGetUserByIdQuery } = userApi;