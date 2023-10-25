import { UPLOAD_TOKENS } from "../actions/types/ads"

const initialState = {
    refreshToken: null,
    accessToken: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_TOKENS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            }
            default: 
            return state
    }
}

export default authReducer