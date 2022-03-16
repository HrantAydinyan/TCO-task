import React from 'react';
import { Typography, Box, Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Field from 'components/shared/fields/Field';
import { FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';
import { editUser } from 'redux/users/action';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from 'components/shared/preloader';

const EditUserModal = ({ open, onClose, selectedUserId }) => {
    const dispatch = useDispatch();

    const { editUserLoading } = useSelector((state) => state.users);

    const formik = useFormik({
        initialValues: {
            name: '',
            job: '',
        },
        onSubmit: (values) => {
            if (!values.name && !values.job) return;
            const data = {};

            if (values.name) data.name = values.name;
            if (values.job) data.job = values.job;

            dispatch(editUser(selectedUserId, data)).then((response) => {
                if (response.status === 200) {
                    alert('You have successfully edited a user.');
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
                <Typography variant="h4">Edit User</Typography>
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
                        {editUserLoading ? (
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

EditUserModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    selectedUserId: PropTypes.number,
};

export default EditUserModal;
