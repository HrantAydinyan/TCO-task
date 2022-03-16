import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import userReducer from './users/reducer';

const rootReducer = combineReducers({ auth: authReducer, users: userReducer });

export default rootReducer;
