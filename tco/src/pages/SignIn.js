import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, InputAdornment, IconButton, Box } from '@material-ui/core';
import { useFormik, FormikProvider } from 'formik';
import Field from 'components/shared/fields/Field';
import { VisibilityOutlined } from '@material-ui/icons';
import { signin } from 'redux/auth/action';
import { useDispatch } from 'react-redux';
import { signinSchema } from 'validations.js';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signinSchema,
        onSubmit: (values) => {
            dispatch(signin(values)).then(() => {
                navigate('/users');
            });
        },
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                            <h2>Sign In</h2>
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
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            name="password"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password visibility"
                                                            edge="end"
                                                            onClick={handleClickShowPassword}
                                                        >
                                                            <VisibilityOutlined
                                                                style={{ fontSize: 24 }}
                                                                color={
                                                                    showPassword
                                                                        ? 'primary'
                                                                        : 'inherit'
                                                                }
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            className="no-margin"
                                            {...formik.getFieldProps('password')}
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

export default SignIn;
