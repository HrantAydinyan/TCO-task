import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Auth = () => {
    const navigate = useNavigate();

    const handleAuth = useCallback(() => {
        const accessToken = localStorage.getItem('access');
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // const refreshToken = localStorage.getItem('refresh');
        if (!accessToken) {
            navigate('/signin');
        }
    }, []);

    useEffect(handleAuth, [handleAuth]);

    return null;
};

export default Auth;
