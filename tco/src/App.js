import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { THEME_CONFIG, PUBLIC_ROUTE_CONFIG } from 'configs';
import { ThemeProvider } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';
// import MainRoute from 'components/MainRoute';

function App() {
    return (
        <ThemeProvider theme={THEME_CONFIG}>
            <CssBaseline />
            <main className="main">
                {/* <Auth /> */}
                <Routes>
                    {/* {isLoggedIn &&
                  PROTECTED_ROUTE_CONFIG.map((route, i) => <MainRoute key={i} {...route} />)} */}
                    {PUBLIC_ROUTE_CONFIG.map((route, i) => (
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={<route.component />}
                            key={i}
                        />
                    ))}
                    <Route path="*" element={<div>404 NOT FOUND</div>} />
                </Routes>
            </main>
        </ThemeProvider>
    );
}

export default App;
