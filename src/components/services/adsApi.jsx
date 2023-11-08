import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { uploadTokens } from "../../store/actions/creators/ads";
import { useAuthContext } from "../context/AuthContext";

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

  const result = await baseQuery(argc, api, extraOptions);
  console.debug("результат первого запроса", { result });

  const forceLogout = () => {
    console.debug("Принудительная авторизация");
    api.dispatch(uploadTokens(null, null));
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
  };

  const refresh_token = localStorage.getItem("refresh_token");
  console.log(refresh_token)

  if (result?.error?.status === 401) {
    console.log('лог аут')
    forceLogout();
  }
  if (result?.error?.status !== 401) {
    return result;
  }  
};

export const adsApi = createApi({
  reducerPath: "adsApi",
  tagTypes: ["Ads"],
  baseQuery: baseQueryWithReauth,

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
    changePassword: builder.mutation({
      query: (newPassData) => ({
        url: "user/password",
        method: "PUT",
        body: newPassData,
      }),
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
      query: (data) => {
        const searchParams = new URLSearchParams();
        searchParams.append("title", data.get("title"));
        searchParams.append("description", data.get("description"));
        searchParams.append("price", data.get("price"));

        const formData = new FormData();

        const arrData = [...data];
        const length = arrData.length;

        for (let i = 1; i < length - 2; i++) {
          formData.append(`files`, data.get(`image${i}`));
        }
        return {
          url: `ads?${searchParams.toString()}`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Ads"],
    }),
    deleteAdv: builder.mutation({
      query: (id) => {
        return {
          url: `ads/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
    }),
    editAdv: builder.mutation({
      query: ({ id, title, description, price }) => ({
        url: `ads/${id}`,
        method: "PATCH",
        body: { title, description, price },
      }),
      invalidatesTags: ["Ads"],
    }),
    deleteAdvImages: builder.mutation({
      query: ({ data, id }) => {
        console.log(data);

        return {
          url: `ads/${id}/image?file_url=${new_url}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Ads"],
    }),
    uploadAdvImage: builder.mutation({
      query: ({ id, formData }) => ({
        url: `ads/${id}/image`,
        method: "POST",
        body: { formData },
      }),
      invalidatesTags: [{ type: "Ads", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useGetCurrentUserMutation,
  useGetCurrentUserAdvtQuery,
  useChangePasswordMutation,
  useGetCurrentAdvQuery,
  useGetAllCommentsQuery,
  useAddCommentMutation,
  useAddNewAdvTextMutation,
  useAddNewAdvPicMutation,
  useGetAllCurrentUserCommentsQuery,
  useRegisterUserMutation,
  useRefreshTokenMutation,
  useEditUserDataMutation,
  useEditAdvMutation,
  useUploadAdvImageMutation,
  useDeleteAdvImagesMutation,
  useUploadUserImageMutation,
  useDeleteAdvMutation,
} = adsApi;
