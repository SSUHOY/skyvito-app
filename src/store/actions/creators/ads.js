import {
  CHANGE_PASSWORD,
  LOG_IN_USER,
  LOG_OUT_USER,
  SEARCH_TEXT,
  SEARCH_VALUE,
  SET_ADS,
  SET_ADS_FAILURE,
  SET_USERS_ADS,
  UPLOAD_TOKENS,
} from "../types/ads";

export const fetchSetAdsRequest = (adsList) => ({
  type: SET_ADS,
  payload: adsList,
});

export const fetchSetAdsFailure = (error) => ({
  type: SET_ADS_FAILURE,
  payload: error,
});

export const fetchSetCurrentUserAdsRequest = (setUserAds) => ({
  type: SET_USERS_ADS,
  payload: setUserAds,
});

export const loginUser = () => ({
  type: LOG_IN_USER,
});

export const logoutUser = () => ({
  type: LOG_OUT_USER,
});

export const uploadTokens = (accessToken, refreshToken) => ({
  type: UPLOAD_TOKENS,
  payload: { accessToken, refreshToken },
});

export const setSearchParameters = (searchedAds) => ({
type: SEARCH_VALUE,
payload: searchedAds,
})

export const changePassword = (newPassword) => ({
  type: CHANGE_PASSWORD,
  payload: newPassword
})