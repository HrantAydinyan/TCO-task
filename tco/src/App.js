import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { THEME_CONFIG, PUBLIC_ROUTE_CONFIG, PROTECTED_ROUTE_CONFIG } from 'configs';
import { ThemeProvider } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';
import Auth from 'components/elements/Auth';
import { useSelector } from 'react-redux';
import Header from 'components/elements/Header';
import NotFound from 'pages/NotFound';

function App() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
        <ThemeProvider theme={THEME_CONFIG}>
            <CssBaseline />
            <main className="main">
                <Auth />
                <Routes>
                    {isLoggedIn
                        ? PROTECTED_ROUTE_CONFIG.map((route, i) => (
                              <Route
                                  exact={route.exact}
                                  path={route.path}
                                  element={
                                      <>
                                          <Header />
                                          <route.component />
                                      </>
                                  }
                                  key={i}
                              />
                          ))
                        : PUBLIC_ROUTE_CONFIG.map((route, i) => (
                              <Route
                                  exact={route.exact}
                                  path={route.path}
                                  element={<route.component />}
                                  key={i}
                              />
                          ))}
                    <Route
                        path="*"
                        element={
                            <>
                                <Header />
                                <NotFound />
                            </>
                        }
                    />
                </Routes>
            </main>
        </ThemeProvider>
    );
}

export default App;
