import React from 'react';
import {
    BrowserRouter as Router,
    Routes as RoutesComponentes,
    Route,
    Navigate
} from "react-router-dom";

// Pages
import Home from './home/Home';
import Transitions from './transitions/Transitions';

function Routes() {
    const component = [
        { path: "/", exact: true, component: <Navigate to="/home" /> },
        { path: "*", exact: true, component: <Navigate to="/home" /> },
        {
            path: "/home",
            exact: true,
            component: <Home />
        },
        {
            path: "/transitions",
            exact: true,
            component: <Transitions />
        },
    ];

    return (
        <Router>
            <RoutesComponentes>
                {component.map((routeScreen, idx) => (
                    <Route
                        path={routeScreen.path}
                        element={routeScreen.component}
                        exact={routeScreen.exact}
                        key={idx}
                    />
                ))}
            </RoutesComponentes>
        </Router>
    )
}

export default Routes;