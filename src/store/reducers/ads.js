import { SET_ADS, SET_ADS_FAILURE } from "../actions/types/ads";

const initialState = {
  // Получение постов в массив
  setAds: [],
  error: null,
};

export default function adsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADS: {
      return {
        ...state,
        setAds: action.payload,
      };
    }
    case SET_ADS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
