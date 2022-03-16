import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import { useCallback, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getUser, loginRefresh, logoutFromLocalStorage } from 'redux/auth/actions';
// import { API_CONFIG } from '../../../configs';

axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Auth = () => {
    const navigate = useNavigate();

    const handleAuth = useCallback(() => {
        const accessToken = localStorage.getItem('access');
        // const refreshToken = localStorage.getItem('refresh');
        if (!accessToken) {
            navigate('/signin');
        }
    }, []);

    useEffect(handleAuth, [handleAuth]);

    return null;
};

export default Auth;
