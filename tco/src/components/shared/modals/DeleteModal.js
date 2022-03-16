import React from 'react';
import { Button, Box, Dialog, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/users/action';
import Preloader from '../preloader';

const DeleteModal = ({ open, onClose, selectedUserId }) => {
    const dispatch = useDispatch();
    const { deleteUserLoading } = useSelector((state) => state.users);
    const onConfirm = () => {
        dispatch(deleteUser(selectedUserId)).then((response) => {
            if (response.status === 204) {
                alert('You have successfully deleted a user');
                onClose();
                return;
            }
            alert('Something went wrong. Please try again');
        });
    };
    return (
        <Dialog open={open} onClose={onClose} scroll="body" className="cancel-popup">
            <Box className="cancel-popup-content">
                <Typography variant="body1" className="title">
                    Delete User
                </Typography>
                <Typography className="desc">Are you sure you want to delete</Typography>
                <Box display="flex" alignItems="center" mt={5} justifyContent="flex-end">
                    {deleteUserLoading ? (
                        <Preloader style={{ width: '37px' }} />
                    ) : (
                        <>
                            <Box mr={1}>
                                <Button color="secondary" onClick={onClose}>
                                    No
                                </Button>
                            </Box>
                            <Box>
                                <Button color="primary" onClick={onConfirm}>
                                    Yes
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Dialog>
    );
};

DeleteModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    selectedUserId: PropTypes.number,
};

export default DeleteModal;
