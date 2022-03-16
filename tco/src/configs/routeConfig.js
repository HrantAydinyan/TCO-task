import * as ROUTES from './routes.js';
import { SignIn, SignUp, Users, Profile } from 'pages';

export const PROTECTED_ROUTE_CONFIG = [
    {
        title: 'Single Users',
        path: ROUTES.SINGLE_USER,
        exact: true,
        component: Profile,
    },
    {
        title: 'Users',
        path: ROUTES.USERS,
        exact: true,
        component: Users,
    },
    {
        title: 'Home',
        path: ROUTES.HOME,
        exact: true,
        component: Users,
    },
];
export const PUBLIC_ROUTE_CONFIG = [
    {
        title: 'Sign in',
        path: ROUTES.SIGN_IN,
        exact: true,
        isPublic: true,
        component: SignIn,
    },
    {
        title: 'Sign up',
        path: ROUTES.SIGN_UP,
        exact: true,
        isPublic: true,
        component: SignUp,
    },
];
