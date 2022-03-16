import axios from 'axios';
import { API_CONFIG } from 'configs';

const getUsers = (search) => axios.get(`${API_CONFIG.users}?page=${search ?? 1}`);
const createUser = (data) => axios.post(API_CONFIG.users, data);
const editUser = (userId, data) => axios.patch(`${API_CONFIG.users}/${userId}`, data);

const deleteUser = (userId) => axios.delete(`${API_CONFIG.users}/${userId}`);

const getSingleUser = (userId) => axios.get(`${API_CONFIG.users}/${userId}`);

const data = {
    getUsers,
    createUser,
    editUser,
    deleteUser,
    getSingleUser,
};

export default data;
