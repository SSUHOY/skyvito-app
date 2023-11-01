import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  tagTypes: ["Ads", "comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("access_token"));
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Ads", id })),
              { type: "Ads", id: "LIST" },
            ]
          : [{ type: "Ads", id: "LIST" }],
    }),
    getCurrentAdv: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: ["ads"],
    }),
    getCurrentUser: builder.mutation({
      query: () => "user",
      providesTags: ["ads"],
    }),
    getCurrentUserAdvt: builder.query({
      query: () => "ads/me",
      providesTags: ["ads"],
    }),
    getAllComments: builder.query({
      query: () => "comments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "comments", id })),
              { type: "comments", id: "LIST" },
            ]
          : [{ type: "comments", id: "LIST" }],
    }),
    getAllCurrentUserComments: builder.query({
      query: (id) => `ads/${id}/comments`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Ads", id })),
              { type: "Ads", id: "LIST" },
            ]
          : [{ type: "Ads", id: "LIST" }],
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response) => {
        localStorage.setItem("user_register_id", response.id);
        localStorage.setItem("user_register_email", response.email);
        localStorage.setItem("user_register_city", response.city);
        localStorage.setItem("user_register_name", response.name);
        localStorage.setItem("user_register_surname", response.surname);
        localStorage.setItem("user_register_phone", response.phone);
      },
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/login",
        method: "PUT",
        body: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
        },
      }),
    }),
    editUserData: builder.mutation({
      query: (userData) => ({
        url: "user",
        method: "PATCH",
        body: userData,
      }),
      transformResponse: (response) => {
        localStorage.setItem("user_register_id", response.id);
        localStorage.setItem("user_register_email", response.email);
        localStorage.setItem("user_register_city", response.city);
        localStorage.setItem("user_register_name", response.name);
        localStorage.setItem("user_register_surname", response.surname);
        localStorage.setItem("user_register_phone", response.phone);
      },
    }),
    addNewAd: builder.mutation({
      query: (body) => ({
        url: "goods",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useGetCurrentUserMutation,
  useGetCurrentUserAdvtQuery,
  useGetCurrentAdvQuery,
  useGetAllCommentsQuery,
  useGetAllCurrentUserCommentsQuery,
  useRegisterUserMutation,
  useRefreshTokenMutation,
  useEditUserDataMutation,
} = adsApi;
