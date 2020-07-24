import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import useSimpleAuth from "../auth/useSimpleAuth";

const NavBar = (props) => {

    const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <>
      <div id="navDiv">
        <nav>

          <Link to="/">Home</Link>
          {isAuthenticated() ? (
            <div>
              <>
              <Link
                onClick={() => {
                    logout();
                }}
                to="/"
                >
                Log Out
              </Link>{" "}
            </>
              </div>
          ) : (
              <>
              <div>
              <Link to="/login">Log In</Link>
              </div>
              <div>
              <Link to="/register">Register</Link>
              </div>
            </>
          )}
        </nav>
          </div>
        </>
  );
};

export default withRouter(NavBar);
