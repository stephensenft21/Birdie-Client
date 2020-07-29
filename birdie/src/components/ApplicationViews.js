import React from "react";
import { Route, Redirect } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./home/Home";
import useSimpleAuth from "./auth/useSimpleAuth";
import BagList from "../components/bag/BagList"
import BagDetail from "../components/bag/BagDetails"
import deleteBag from "../components/bag/BagList"
import BagEditForm from "../components/bag/BagEditForm"
const ApplicationViews = (props) => {

    // const { isAuthenticated } = useSimpleAuth();

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

            {/* Routes For Bag List, Bag Details, Bag Edit Form */}

            <Route exact path="/bags/:bagId(\d+)" render={props => {
                return <BagDetail deleteBag={deleteBag} bagId={parseInt(props.match.params.bagId)} {...props} />
                // if (isAuthenticated()) {
                // } else {
                //     return <Redirect to="/login" />
                // }
            }} />
            <Route exact path="/bags" render={(props) => {
                return <BagList />
            }} />
            <Route path="/bags/:bagId(\d+)/edit" render={props => {
                return <BagEditForm bagId={parseInt(props.match.params.bagId)} {...props} />
                // if (isAuthenticated()) {
                // } else {
                //     return <Redirect to="/login" />
                // }
            }} />
        </>
    );
};
export default ApplicationViews;
