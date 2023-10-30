import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if(token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    }
  }),


  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads",
      providesTags: ['advt']
    }),
    getCurrentUser: builder.mutation({
      query: () => 'user'
    })
  }),
});

export const { useGetAllAdsQuery, useGetCurrentUserMutation } = adsApi;
