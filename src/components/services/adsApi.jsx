import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090",
  }),
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads",
    }),
    getCurrentUser: builder.mutation({
      query: () => 'user'
    })
  }),
});

export const { useGetAllAdsQuery, useGetCurrentUserMutation } = adsApi;
