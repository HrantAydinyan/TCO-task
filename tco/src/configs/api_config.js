// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;

export const API_CONFIG = {
    signup: `${apiUrl}/api/register`,
    signin: `${apiUrl}/api/login`,
    users: `${apiUrl}/api/users`,
};
