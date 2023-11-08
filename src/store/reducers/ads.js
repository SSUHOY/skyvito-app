import { CHANGE_PASSWORD, LOG_IN_USER, LOG_OUT_USER, SET_ADS, SET_ADS_FAILURE, SET_USERS_ADS } from "../actions/types/ads";

const initialState = {
  searchedAds: [],
  setUserAds: [],
  setAds: [],
  error: null,
  isLogin: false,
  newPassword: ''
};

export default function adsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADS: {
      return {
        ...state,
        setAds: action.payload,
      };
    }
    case SET_USERS_ADS: {
      return {
        ...state,
        setUserAds: action.payload,
      };
    }
    case SET_ADS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOG_IN_USER: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case LOG_OUT_USER: {
      return {
        ...state,
        isLogin: false,
      };
    }
    case CHANGE_PASSWORD: {
      return {
        ...state,
        newPassword: action.payload
      }
    }
    default:
      return state;
  }
}
