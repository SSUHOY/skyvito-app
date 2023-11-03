import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { uploadTokens } from "../../store/actions/creators/ads";

const baseQueryWithReauth = async (argc, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("access_token");
      console.debug("Токен из стора", { token });
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const auth = localStorage.getItem("refresh_token");
  console.log(auth);
  const result = await baseQuery(argc, api, extraOptions);
  console.debug("результат первого запроса", { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация");
    api.dispatch(uploadTokens(null, null));
    window.location.href = "/login";
  };

  console.debug("Данные пользователя в сторе", { auth });

  if (!auth) {
    console.log("no token");
    return forceLogout();
  }
};

export const adsApi = createApi({
  reducerPath: "adsApi",
  tagTypes: ["Ads"],
  baseQuery: baseQueryWithReauth,

  // fetchBaseQuery({
  //   baseUrl: "http://localhost:8090/",
  //   prepareHeaders: (headers) => {
  //     const token = localStorage.getItem("access_token");
  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  // }),

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
      providesTags: ["Ads"],
    }),
    getCurrentUser: builder.mutation({
      query: () => "user",
      providesTags: ["Ads"],
    }),
    getCurrentUserAdvt: builder.query({
      query: () => "ads/me",
      providesTags: ["Ads"],
    }),
    getAllComments: builder.query({
      query: () => "comments",
      providesTags: ["Ads"],
    }),
    addComment: builder.mutation({
      query: ({ id, text }) => ({
        url: `ads/${id}/comments`,
        method: "POST",
        body: { text },
      }),
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
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
      transformResponse: (response) => {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
      },
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
        localStorage.setItem("user_register_avatar", response.avatar);
      },
    }),
    uploadUserImage: builder.mutation({
      query: (formData) => ({
        url: "user/avatar",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
    }),
    addNewAdvText: builder.mutation({
      query: (newAdvData) => ({
        url: "adstext",
        method: "POST",
        body: newAdvData,
      }),
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
    }),
    addNewAdvPic: builder.mutation({
      query: (formData, searchParams) => ({
        url: `ads?${searchParams}`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useGetCurrentUserMutation,
  useGetCurrentUserAdvtQuery,
  useGetCurrentAdvQuery,
  useGetAllCommentsQuery,
  useAddCommentMutation,
  useAddNewAdvTextMutation,
  useAddNewAdvPicMutation,
  useGetAllCurrentUserCommentsQuery,
  useRegisterUserMutation,
  useRefreshTokenMutation,
  useEditUserDataMutation,
  useUploadUserImageMutation,
} = adsApi;
