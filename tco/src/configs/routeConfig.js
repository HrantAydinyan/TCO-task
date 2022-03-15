import * as ROUTES from './routes.js';
import { SignIn, SignUp } from 'pages';

export const PROTECTED_ROUTE_CONFIG = [
    // {
    //     title: 'Profile Settings',
    //     path: ROUTES.SETTINGS,
    //     exact: true,
    //     isPublic: false,
    //     hasSearch: false,
    //     component: ProfileSettings,
    // },
    // {
    //     title: 'Profile Activity',
    //     path: ROUTES.ACTIVITY,
    //     exact: true,
    //     isPublic: false,
    //     hasSearch: false,
    //     component: ProfileActivity,
    // },
    // {
    //     title: 'Upload Asset',
    //     path: ROUTES.UPLOADASSET,
    //     exact: true,
    //     isPublic: true,
    //     hasSearch: false,
    //     component: UploadAsset,
    // },
    // {
    //     title: 'Edit Asset',
    //     path: ROUTES.EDIT_ASSET,
    //     exact: true,
    //     isPublic: false,
    //     hasSearch: false,
    //     component: AssetEdit,
    // },
    // {
    //     title: 'Make an offer',
    //     path: ROUTES.MAKE_AN_OFFER,
    //     exact: true,
    //     isPublic: false,
    //     hasSearch: false,
    //     component: MakeAnOffer,
    // },
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
