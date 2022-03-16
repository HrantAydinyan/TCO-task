import * as TYPES from './types';
import UsersService from './services';

export const clearUser = () => ({ type: TYPES.CLEAR_SINGLE_USER });
export const clearUsers = () => ({ type: TYPES.CLEAR_USERS });

export const getUsers = (search) => (dispatch) => {
    dispatch({ type: TYPES.GET_USERS_REQUEST });
    return UsersService.getUsers(search)
        .then((response) => {
            if (response.status === 200) {
                return dispatch({ type: TYPES.GET_USERS_SUCCESS, payload: response.data });
            }
            dispatch({ type: TYPES.GET_USERS_FAIL });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TYPES.GET_USERS_FAIL });
        });
};

export const createUser = (data) => (dispatch) => {
    dispatch({ type: TYPES.CREATE_USER_REQUEST });
    return UsersService.createUser(data)
        .then((response) => {
            if (response.status === 201) {
                dispatch({ type: TYPES.CREATE_USER_SUCCESS, payload: response.data });
                return response;
            }
            dispatch({ type: TYPES.CREATE_USER_FAIL });
            return null;
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TYPES.CREATE_USER_FAIL });
            return null;
        });
};

export const editUser = (userId, data) => (dispatch) => {
    dispatch({ type: TYPES.EDIT_USER_REQUEST });
    return UsersService.editUser(userId, data)
        .then((response) => {
            if (response.status === 200) {
                dispatch({ type: TYPES.EDIT_USER_SUCCESS, payload: response.data });
                return response;
            }
            dispatch({ type: TYPES.EDIT_USER_FAIL });
            return null;
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TYPES.EDIT_USER_FAIL });
            return null;
        });
};

export const deleteUser = (userId) => (dispatch) => {
    dispatch({ type: TYPES.DELETE_USER_REQUEST });
    return UsersService.deleteUser(userId)
        .then((response) => {
            if (response.status === 204) {
                dispatch({ type: TYPES.DELETE_USER_SUCCESS, payload: { id: userId } });
                return response;
            }
            dispatch({ type: TYPES.DELETE_USER_FAIL });
            return null;
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TYPES.DELETE_USER_FAIL });
            return null;
        });
};

export const getSingleUser = (userId) => (dispatch) => {
    dispatch({ type: TYPES.GET_SINGLE_USER_REQUEST });
    return UsersService.getSingleUser(userId)
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: TYPES.GET_SINGLE_USER_SUCCESS,
                    payload: { data: response?.data?.data },
                });
                return response;
            }
            dispatch({ type: TYPES.GET_SINGLE_USER_FAIL });
            return null;
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TYPES.GET_SINGLE_USER_FAIL });
            return null;
        });
};
