import { SET_ADS, SET_ADS_FAILURE } from "../types/ads";

export const fetchSetAdsRequest = (adsList) => ({
  type: SET_ADS,
  payload: adsList,
});


export const fetchSetAdsFailure = (error) => ({
    type: SET_ADS_FAILURE,
    payload: error,
  });
  