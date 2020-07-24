import React, { useState } from "react";
import useSimpleAuth from "./useSimpleAuth";

const Register = (props) => {
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        address: "",
    });
    const { register } = useSimpleAuth();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            first_name: credentials.firstName,
            last_name: credentials.lastName,
            username: credentials.username,
            password: credentials.password,
            address: credentials.address,
          };

          register(newUser).then(() => props.history.push("/"));
    };

    return (
        <div className="content">
      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          Welcome to Birdie! Register to get started!
        </h1>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="firstName"
            placeholder="First Name"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name </label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="lastName"
            placeholder="Last Name"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="username"> Username </label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            placeholder="Username"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password"> Password </label>
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="address"> Address </label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="address"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </div>
    )
}

export default Register