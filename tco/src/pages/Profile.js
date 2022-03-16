import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUser, clearUser } from 'redux/users/action';
import { Avatar, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Preloader from 'components/shared/preloader';
const Profile = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { singleUser, getSingleUserLoading } = useSelector((state) => state.users);
    const userId = useMemo(() => params?.id, [params]);

    useEffect(() => {
        dispatch(getSingleUser(userId));

        return () => dispatch(clearUser());
    }, [dispatch, userId]);

    if (!singleUser && !getSingleUserLoading) return null;

    return (
        <Box className="profile-content">
            {getSingleUserLoading ? (
                <Preloader style={{ width: '80px' }} />
            ) : (
                <Box className="profile-card">
                    <Box>
                        <Box display="flex" justifyContent="center">
                            <Avatar src={singleUser?.avatar} className="profile-avatar" />
                        </Box>
                        <Typography className="profile-info">
                            <span>ID:</span> {singleUser?.id}
                        </Typography>
                        <Typography className="profile-info">
                            <span>Email:</span> {singleUser?.email}
                        </Typography>
                        <Typography className="profile-info">
                            <span>First Name:</span> {singleUser?.first_name}
                        </Typography>
                        <Typography className="profile-info">
                            <span>Last Name:</span> {singleUser?.last_name}
                        </Typography>
                        <Box className="profile-info" display="flex" justifyContent="end">
                            <Link to="/users">All Users</Link>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Profile;
