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
      query: ({ currentPage, pageSize, term, friends=false}) =>
        `users?page=${currentPage}&count=${pageSize}${term ? `&term=${term}`:''}${friends ? `&friend=true`:""}`,
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
      invalidatesTags: ["Me"],
    }),

    logout: build.mutation({
      query: () => ({
        url: `auth/login`,
        method: "DELETE",
      }),
      invalidatesTags: ["Me"],
    }),

    getCaptchaUrl: build.query({
      query: () => `security/get-captcha-url`,
      keepUnusedDataFor: 0,
    }),
    // A query endpoint with an argument
    getProfile: build.query({
      query: (userId) => `profile/${userId}`,
      keepUnusedDataFor: 0,
      providesTags: ["Profile"],
    }),
    getStatus: build.query({
      query: (userId) => `profile/status/` + userId,
      providesTags: ["Status"],
      keepUnusedDataFor: 0,
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

export const messageApi = createApi({
  reducerPath: "messageApi",
  tagTypes: ["Dialogs", "Messages"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e" },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // A query endpoint without argument
    getAllDialogs: build.query({
      query: () => `dialogs`, 
        
    }),
    getNewMessages: build.query({
      query: () => `dialogs/messages/new/count`, 
         
    }),
     // A query endpoint with an argument
    getFriendDialog: build.query({
      query: (userId, page, count) => `dialogs/${userId}/messages?${page ? `&page=${page}`:''}${count ? `&count=${count}`:''}`, 
        
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

export const { useGetAllDialogsQuery, useGetNewMessagesQuery,  useGetFriendDialogQuery,  useSendMessageMutation, useStartChatingRefreshMutation } =
messageApi;



