import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e" },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // A query endpoint with an argument
    getUsers: build.query({
      query: ({ currentPage, pageSize }) =>
        `users?page=${currentPage}&count=${pageSize}`,
      providesTags: ["Users"],
    }),
    // A mutation endpoint
    follow: build.mutation({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
    //
    unfollow: build.mutation({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const profileApi = createApi({
  reducerPath: "profileApi",
  tagTypes: ["Profile", "Status", "Me"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e" },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // A query endpoint without argument
    me: build.query({
      query: () => `auth/me`, 
      providesTags: ["Me"],     
    }),
    //A mutation endpoint
    login: build.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body
      }),
      invalidatesTags: ["Me", "Profile"],
    }),

    logout: build.mutation({
      query: () => ({
        url: `auth/login`,
        method: "DELETE",
      }),
      invalidatesTags: ["Me", "Profile"],
    }),

    getCaptchaUrl: build.query({
      query: () => `security/get-captcha-url`,
    }),
    // A query endpoint with an argument
    getProfile: build.query({
      query: (userId) => `profile/${userId}`,
      providesTags: ["Profile"],
    }),
    getStatus: build.query({
      query: (userId) => `profile/status/` + userId,
      providesTags: ["Status"],
    }),
    // A mutation endpoint
    updateStatus: build.mutation({
      query: (body) => ({
        url: `profile/status`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Status"],
    }),
    savePhoto: build.mutation({
      query: (photoFile) => {
        let body = new FormData();
        body.append("image", photoFile);
        return {
          url: `profile/photo`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Profile"],
    }),

    saveProfile: build.mutation({
      query: (body) => ({
        url: `profile`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e" },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // A query endpoint without argument
    me: build.query({
      query: () => `auth/me`,
    }),
    //A mutation endpoint
    login: build.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body
      }),
    }),

    logout: build.mutation({
      query: () => ({
        url: `auth/login`,
        method: "DELETE",
      }),
    }),
  }),
});

export const securityApi = createApi({
  reducerPath: "securityApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e" },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // A query endpoint without argument
    getCaptchaUrl: build.query({
      query: () => `security/get-captcha-url`,
    }),
  }),
});

export const { useGetUsersQuery, useFollowMutation, useUnfollowMutation } =
  usersApi;

export const {
  useGetProfileQuery,
  useGetStatusQuery,
  useUpdateStatusMutation,
  useSavePhotoMutation,
  useSaveProfileMutation,
  useMeQuery,
  useLoginMutation, 
  useLogoutMutation,
  useGetCaptchaUrlQuery 
} = profileApi;

// export const { useMeQuery, useLoginMutation, useLogoutMutation } = authApi;

//export const { useGetCaptchaUrlQuery } = securityApi;
