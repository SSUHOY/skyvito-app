import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./reducers/ads";
import { adsApi } from "../components/services/adsApi";

export const store = configureStore({
    reducer: {
        ads: adsReducer,
        [adsApi.reducerPath]:adsApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => [

        ...getDefaultMiddleWare(),

        adsApi.middleware,
    ]
})