import * as TYPES from './types';
import AuthService from './services';

export const signup = (data) => (dispatch) => {
    return AuthService.signup(data).then((res) => {
        console.log(res);
    });
};

export const signin = (data) => (dispatch) => {
    return AuthService.signin(data).then(
        (response) => {
            if (response?.status === 200) {
                localStorage.setItem('access', response.data.access);
                // localStorage.setItem('refresh', response.data.refresh);
                dispatch({
                    type: TYPES.LOGIN_SUCCESS,
                    payload: response.data,
                });

                return response.data;
            }
            console.log(response);
        },
        (error) => {
            dispatch({
                type: TYPES.LOGIN_FAIL,
            });

            return Promise.reject(error);
        },
    );
};

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('access');
    return dispatch({ type: TYPES.LOGOUT_SUCCESS });
};
