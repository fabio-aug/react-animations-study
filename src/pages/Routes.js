import React from 'react';
import {
    BrowserRouter as Router,
    Routes as RoutesComponentes,
    Route,
    Navigate
} from "react-router-dom";

// Pages
import Home from './home/Home';
import Spring from './reactSpring/Spring';
import Transitions from './transitions/Transitions';
import Transform from './transform/Transform';
import IdeasCss from './ideasCss/IdeasCss';
import FramerMotion from './framerMotion/FramerMotion';
import ReactParallax from './reactParallax/ReactParallax';
import ReactScrollParallax from './reactScrollParallax/ReactScrollParallax';
import ReactSpringParallax from './reactSpringParallax/ReactSpringParallax';
import ReactSpringParallaxHorizontal from './reactSpringParallax/horizontalParallax/Horizontal';

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
        {
            path: "/spring",
            exact: true,
            component: <Spring />
        },
        {
            path: "/transforms",
            exact: true,
            component: <Transform />
        },
        {
            path: "/ideas-css",
            exact: true,
            component: <IdeasCss />
        },
        {
            path: "/framer-motion",
            exact: true,
            component: <FramerMotion />
        },
        {
            path: '/react-parallax',
            exact: true,
            component: <ReactParallax />
        },
        {
            path: '/react-scroll-parallax',
            exact: true,
            component: <ReactScrollParallax />
        },
        {
            path: "/react-spring-parallax",
            exact: true,
            component: <ReactSpringParallax />
        },
        {
            path: "/react-spring-parallax-horizontal",
            exact: true,
            component: <ReactSpringParallaxHorizontal />
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