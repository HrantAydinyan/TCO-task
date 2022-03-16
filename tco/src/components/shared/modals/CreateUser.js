import React from 'react';
import { Typography, Box, Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Field from 'components/shared/fields/Field';
import { FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';
import { createUserSchema } from 'validations.js';
import { createUser } from 'redux/users/action';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../preloader';

const CreateUserModal = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const { createUserLoading } = useSelector((state) => state.users);
    const formik = useFormik({
        initialValues: {
            name: '',
            job: '',
        },
        validationSchema: createUserSchema,
        onSubmit: (values) => {
            dispatch(createUser(values)).then((response) => {
                if (response.status === 201) {
                    alert('You have successfully created a user');
                    onClose();
                    formik.resetForm();
                    return;
                }
                alert('Something went wrong. Please try again');
            });
        },
    });

    return (
        <Dialog
            className="dark-modal"
            open={open}
            onClose={onClose}
            scroll="body"
            aria-labelledby="create-user"
        >
            <DialogTitle id="create-user-title" disableTypography className="create-user-title">
                <Typography variant="h4">Create User</Typography>
            </DialogTitle>

            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <FormikProvider value={formik}>
                        <Field
                            field="input"
                            type="text"
                            label="Name"
                            name="name"
                            className="no-margin"
                            {...formik.getFieldProps('name')}
                        />
                        <Field
                            field="input"
                            type="text"
                            label="Job"
                            name="job"
                            className="no-margin"
                            {...formik.getFieldProps('job')}
                        />
                    </FormikProvider>
                    <Box textAlign="center" my={4}>
                        {createUserLoading ? (
                            <Preloader style={{ width: '37px' }} />
                        ) : (
                            <Button color="primary" variant="contained" type="submit" size="large">
                                Save
                            </Button>
                        )}
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
};

CreateUserModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
};

export default CreateUserModal;
