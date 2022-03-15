import React from 'react';
// import Styles from "./styles.module.css";
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Field from 'components/shared/fields/Field';

const SignUp = () => {
    const signinSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signinSchema,
        onSubmit: () => {
            // props.add_user(e);
            formik.resetForm();
        },
    });

    return (
        <Box className="container">
            <Box
                className={'signin-container'}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box className="signin-content">
                    <Box className="signin-nav" display={'flex'}>
                        <NavLink
                            className={({ isActive }) => 'btns' + (isActive ? ' active-btn' : '')}
                            to="/signin"
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => 'btns' + (isActive ? ' active-btn' : '')}
                            to="/signup"
                        >
                            Sign Up
                        </NavLink>
                    </Box>
                    <Box>
                        <Box
                            className="signin-header"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h2>Sign Up</h2>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box className="signin-form">
                                <form onSubmit={formik.handleSubmit}>
                                    <FormikProvider value={formik}>
                                        <Field
                                            field="input"
                                            type="email"
                                            label="Email"
                                            name="email"
                                            className="no-margin"
                                            {...formik.getFieldProps('email')}
                                        />
                                        <Field
                                            field="input"
                                            type="password"
                                            label="Password"
                                            name="password"
                                            className="no-margin"
                                            {...formik.getFieldProps('password')}
                                        />
                                        <Field
                                            field="input"
                                            type="confirmPassword"
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            className="no-margin"
                                            {...formik.getFieldProps('confirmPassword')}
                                        />
                                    </FormikProvider>
                                    <Box textAlign="center" my={4}>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                            size="large"
                                        >
                                            Send
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUp;
