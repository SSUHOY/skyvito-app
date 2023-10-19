import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({

    reducerPath: fetchBaseQuery({
        baseUrl: "http://localhost:8090/"
    }),
    endpoints: (builder) => ({
        getAllAds: builder.query({
            query: () => 'ads'
        })
    })
})

export const { useGetAllAdsQuery } = adsApi