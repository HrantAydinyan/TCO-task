import axios from 'axios';
import { API_CONFIG } from 'configs';

const signup = (data) => axios.post(API_CONFIG.signup, data);
const signin = (data) => axios.post(API_CONFIG.signin, data);
// const getUsers = (data) => axios.get(API_CONFIG.getUsers);

const data = {
    signup,
    signin,
};

export default data;
