import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  tagTypes: ["Ads", "comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const { access_token } = JSON.parse(localStorage.getItem("tokenData"));
      console.log(access_token)
      if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
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
    getCurrentUser: builder.mutation({
      query: () => "user",
      providesTags: ["ads"],
    }),
    getCurrentUserAdvt: builder.query({
      query: () => "ads/me",
      providesTags: ["ads"],
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
} = adsApi;
