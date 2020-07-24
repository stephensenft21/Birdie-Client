import React from "react";
import { Route } from "react-router-dom";
import Register from "./auth/Register"
import useSimpleAuth from "./auth/useSimpleAuth"

const ApplicationViews = (props) => {
    const { isAuthenticated } = useSimpleAuth();

    return (
        <>
            <Route
                exact
                path="/register"
                render={(props) => {
                    return <Register {...props} />;
                }}
            />
        </>
    );
};
export default ApplicationViews;
