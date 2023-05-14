import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    prepareHeaders: {
      "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e",
    },
    credentials: "include",
    endpoints: (build) => ({
      getUsers: build.query({
        query: (currentPage, pageSize) =>
          `users?page=${currentPage}&count=${pageSize}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = appApi;
