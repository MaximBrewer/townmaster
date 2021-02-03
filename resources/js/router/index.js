import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import NotFound from "../pages/404";
import Personal from "../pages/Personal.js";
import AuthRoute from "./auth-route";
import GuestRoute from "./guest-route";
import { useAuth } from "../context/auth";
import FullPageSpinner from "../components/full-page-spinner";
import { useOverlay } from "../context/overlay";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "../components/react-alert-template-basic";

function App() {
    let { initializing } = useAuth();
    let { overlay } = useOverlay();

    // optional configuration
    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        timeout: 30000,
        offset: "1rem",
        // you can also just use 'scale'
        transition: transitions.SCALE
    };

    return (
            <AlertProvider template={AlertTemplate} {...options}>
                {initializing ? (
                    <FullPageSpinner />
                ) : (
                    <Router>
                        <div className="flex flex-col min-h-screen">
                            <Switch>
                                <GuestRoute exact path="/" component={Home} />
                                <GuestRoute
                                    path="/register"
                                    component={Register}
                                />
                                <GuestRoute path="/login" component={Login} />
                                <GuestRoute
                                    path="/forgot-password"
                                    component={ForgotPassword}
                                />
                                <GuestRoute
                                    path="/password/reset/:token"
                                    component={ResetPassword}
                                />
                                <AuthRoute
                                    path="/personal"
                                    component={Personal}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Router>
                )}
                {overlay ? (
                    <div
                        className={`fixed z-50 w-full h-full top-0 left-0 bg-opacity-40 bg-white`}
                    ></div>
                ) : (
                    ``
                )}
            </AlertProvider>
    );
}

export default App;
