export const selectAllAdsList = (state) => state.ads.setAds
export const selectCurrentUserAdsList = (state) => state.ads.setUserAds
export const selectItsFailureError = (state) => state.ads.error
export const selectIsLogin = (state) => state.ads.isLogin
export const loginUserSelector = (store) => store.ads.isLogin
export const logoutUserSelector = (store) => store.ads.isLogin