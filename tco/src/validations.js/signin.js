import * as Yup from 'yup';

export const signinSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Too Short!').required('Password is required'),
});
