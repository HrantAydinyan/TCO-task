import * as TYPES from './types';

const initialState = {
    users: [],
    singleUser: null,
    total: 0,
    total_pages: 0,
    page: 0,
    getUsersLoading: false,
    createUserLoading: false,
    deleteUserLoading: false,
    editUserLoading: false,
    getSingleUserLoading: false,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.GET_USERS_REQUEST:
            return {
                ...state,
                getUsersLoading: true,
            };
        case TYPES.GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload.data,
                total: payload.total,
                total_pages: payload.total_pages,
                page: payload.page,
                getUsersLoading: false,
            };
        case TYPES.GET_USERS_FAIL:
            return {
                ...state,
                getUsersLoading: false,
            };
        case TYPES.CREATE_USER_REQUEST:
            return {
                ...state,
                createUserLoading: true,
            };
        case TYPES.CREATE_USER_SUCCESS:
            return {
                ...state,
                createUserLoading: false,
            };
        case TYPES.CREATE_USER_FAIL:
            return {
                ...state,
                createUserLoading: false,
            };
        case TYPES.EDIT_USER_REQUEST:
            return {
                ...state,
                editUserLoading: true,
            };
        case TYPES.EDIT_USER_SUCCESS:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === payload.id
                        ? { ...user, name: payload.name, job: payload.job }
                        : { ...user },
                ),
                editUserLoading: false,
            };
        case TYPES.EDIT_USER_FAIL:
            return {
                ...state,
                editUserLoading: false,
            };
        case TYPES.DELETE_USER_REQUEST:
            return {
                ...state,
                deleteUserLoading: true,
            };
        case TYPES.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload.id),
                deleteUserLoading: false,
            };
        case TYPES.DELETE_USER_FAIL:
            return {
                ...state,
                deleteUserLoading: false,
            };
        case TYPES.GET_SINGLE_USER_REQUEST:
            return {
                ...state,
                getSingleUserLoading: false,
            };
        case TYPES.GET_SINGLE_USER_SUCCESS:
            return {
                ...state,
                singleUser: payload.data,
                getSingleUserLoading: false,
            };
        case TYPES.GET_SINGLE_USER_FAIL:
            return {
                ...state,
                getSingleUserLoading: false,
            };
        case TYPES.CLEAR_SINGLE_USER:
            return {
                ...state,
                singleUser: null,
            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
