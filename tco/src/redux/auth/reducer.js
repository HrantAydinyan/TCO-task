import * as TYPES from './types';

const initialState = {
    user: {},
    isLoggedIn: localStorage.getItem('access') ? true : false,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                access: payload.access,
            };
        case TYPES.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case TYPES.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export default authReducer;
