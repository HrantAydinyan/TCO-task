import React from 'react';
import { logoutAction } from 'redux/auth/action';
import { AppBar, Toolbar, Container, Box, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutAction());
        navigate('/signin');
    };
    return (
        <Box>
            <AppBar position="fixed" className="header">
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="header-toolbar">
                        <ul className="menu">
                            <li className="menu-btn menu-btn-marketplace">
                                <Button
                                    onClick={logout}
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                >
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
