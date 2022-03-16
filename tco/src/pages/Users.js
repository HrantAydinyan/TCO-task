import React, { useEffect, useMemo, useState } from 'react';
import { getUsers } from 'redux/users/action';
import {
    Box,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    IconButton,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { createBrowserHistory } from 'history';
import { getObjectFromLocationSearch } from 'helpers/functions';
import { useNavigate, Link } from 'react-router-dom';
import { Delete, Edit } from '@material-ui/icons';
import CreateUserModal from 'components/shared/modals/CreateUser';
import EditUserModal from 'components/shared/modals/EditUser';
import DeleteModal from 'components/shared/modals/DeleteModal';

const headers = [
    {
        label: 'Index',
        field: 'index',
        // sortable: true,
        width: 3,
    },
    {
        label: 'Avatar',
        field: 'walleavatar',
        sortable: true,
        width: 3,
    },
    {
        label: 'Full Name',
        field: 'full_name',
        sortable: true,
        width: 3,
    },
    {
        label: 'Email',
        field: 'email',
        sortable: true,
        width: 3,
    },
    {
        label: 'Action',
        field: 'action',
        sortable: false,
        width: 3,
    },
];

const Users = () => {
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const navigate = useNavigate();
    const { users, total_pages, page } = useSelector((state) => state.users);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const pageNumber = useMemo(() => {
        const search = getObjectFromLocationSearch(history.location.search);
        return search?.page ?? 1;
    }, [history.location.search]);

    const defaultPageNumber = useMemo(() => {
        return pageNumber;
    }, []);

    useEffect(() => {
        dispatch(getUsers(pageNumber));
    }, [dispatch, pageNumber]);

    const onOpenCreateModal = () => {
        setOpenCreateModal(true);
    };

    const onCloseCreateModal = () => {
        setOpenCreateModal(false);
    };

    const onOpenEditModal = (id) => {
        setOpenEditModal(true);
        setSelectedUserId(id);
    };

    const onCloseEditModal = () => {
        setOpenEditModal(false);
    };

    const onOpenDeleteModal = (id) => {
        setOpenDeleteModal(true);
        setSelectedUserId(id);
    };

    const onCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box style={{ maxWidth: '900px', width: '100%' }}>
                    <Box display={'flex'} justifyContent="end">
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            className="create-user-btn"
                            onClick={onOpenCreateModal}
                        >
                            Create User
                        </Button>
                    </Box>
                    <TableContainer component={Box} position="relative">
                        <Table
                            sx={{ minWidth: 650 }}
                            size="medium"
                            aria-label="simple table"
                            className="asset-table"
                        >
                            <TableHead>
                                <TableRow>
                                    {headers.map((head, idx) => (
                                        <TableCell align="left" key={head.field + idx}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="left"
                                                className="cursor-pointer"
                                            >
                                                {head.label}
                                            </Box>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, i) => (
                                    <TableRow key={user.id}>
                                        <TableCell
                                            style={{
                                                width: '20px',
                                                padding: '0 0 0 1rem',
                                                minWidth: '20px',
                                            }}
                                        >
                                            {(page - 1) * 6 + i + 1}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                width: '20px',
                                                padding: '0 0 0 1rem',
                                                minWidth: '20px',
                                            }}
                                        >
                                            <Link to={`/users/${user?.id}`}>
                                                <Avatar alt={user?.first_name} src={user?.avatar} />
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                to={`/users/${user?.id}`}
                                            >{`${user?.first_name} ${user?.last_name}`}</Link>
                                        </TableCell>
                                        <TableCell>{user?.email}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                onClick={() => onOpenEditModal(user?.id)}
                                                aria-label="Edit user"
                                            >
                                                <Edit style={{ fontSize: 24 }} />
                                            </IconButton>
                                            <IconButton
                                                aria-label="Delete user"
                                                onClick={() => onOpenDeleteModal(user?.id)}
                                            >
                                                <Delete style={{ fontSize: 24 }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box display="flex" justifyContent={'center'} style={{ padding: '20px' }}>
                        <Pagination
                            count={total_pages}
                            color="secondary"
                            defaultPage={Number(defaultPageNumber)}
                            onChange={(event, value) => navigate(`/users?page=${value}`)}
                        />
                    </Box>
                </Box>
            </Box>
            <CreateUserModal open={openCreateModal} onClose={onCloseCreateModal} />
            <EditUserModal
                open={openEditModal}
                onClose={onCloseEditModal}
                selectedUserId={selectedUserId}
            />
            <DeleteModal
                open={openDeleteModal}
                onClose={onCloseDeleteModal}
                selectedUserId={selectedUserId}
            />
        </>
    );
};

export default Users;
