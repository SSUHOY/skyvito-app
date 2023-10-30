import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  tagTypes: ["Ads", "comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("accessToken"));
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
    getComments: builder.query({
      query: () => "comments",
      providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: "comments", id })),
            { type: "comments", id: "LIST" },
          ]
        : [{ type: "comments", id: "LIST" }],
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
  useGetCommentsQuery,
} = adsApi;
