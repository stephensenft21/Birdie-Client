import React from "react";
import { Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./home/Home";
import useSimpleAuth from "./auth/useSimpleAuth";

const ApplicationViews = (props) => {
    
    const { isAuthenticated } = useSimpleAuth();

    return (
        <>
            <Route
                exact 
                path="/"
                render={(props) => {
                        return <Home {...props} />;
                }}
            />
            <Route
                exact
                path="/register"
                render={(props) => {
                    return <Register {...props} />;
                }}
            />
            <Route
                exact
                path="/login"
                render={(props) => {
                    return <Login {...props} />;
                }}
            />
        </>
    );
};
export default ApplicationViews;
