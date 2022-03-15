import React from 'react';
import { Route } from 'react-router-dom';
// import { Header } from 'components/elements';

function MainRoute(route) {
    const { path, exact } = route;

    return (
        <>
            {/* <Header hasSearch={hasSearch} /> */}
            <Route exact={exact} path={path} element={(props) => <route.component {...props} />} />
        </>
    );
}

export default MainRoute;
