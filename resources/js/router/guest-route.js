import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../context/auth";

function GuestRoute({ component: Component, title, ...rest }) {
    let { authenticated } = useAuth();

    if (authenticated)
        switch (Component.name) {
            case "Login":
            case "Register":
            case "ForgotPassword":
            case "ResetPassword":
                return (
                    <Redirect
                        to={{
                            pathname: "/personal"
                        }}
                    />
                );
            default:
                return (
                    <Route
                        {...rest}
                        render={props => <Component {...props} />}
                    />
                );
        }
    else return <Route {...rest} render={props => <Component {...props} />} />;
}

GuestRoute.displayName = "Guest Route";

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object,
    title: PropTypes.string
};

export default GuestRoute;
