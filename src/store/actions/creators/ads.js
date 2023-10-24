import { LOG_IN_USER, LOG_OUT_USER, SET_ADS, SET_ADS_FAILURE } from "../types/ads";

export const fetchSetAdsRequest = (adsList) => ({
  type: SET_ADS,
  payload: adsList,
});


export const fetchSetAdsFailure = (error) => ({
    type: SET_ADS_FAILURE,
    payload: error,
  });
  

export const loginUser = () => ({
  type: LOG_IN_USER,
})

export const logoutUser = () => ({
  type: LOG_OUT_USER,
})