import React, { setState, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import Footer from "../components/Footers/Footer.js";

// views

import Dashboard from "./personal/Dashboard.js";
import Maps from "./personal/Maps.js";
import Settings from "./personal/Settings.js";
import Tables from "./personal/Tables.js";

export default function Personal() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    };
    return (
        <div className="leading-normal tracking-normal" id="main-body">
            <div className="flex flex-wrap">
                <Sidebar
                    sideBarOpen={sideBarOpen}
                    toggleSideBar={toggleSideBar}
                />
                <div
                    className={
                        `w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen` +
                        (sideBarOpen ? ` overlay` : ``)
                    }
                    id="main-content"
                >
                    <Navbar
                        sideBarOpen={sideBarOpen}
                        toggleSideBar={toggleSideBar}
                    />
                    <div className="p-6 bg-gray-100 mb-20">
                        <Switch>
                            <Route
                                path="/personal/dashboard"
                                exact
                                component={Dashboard}
                            />
                            <Route
                                path="/personal/maps"
                                exact
                                component={Maps}
                            />
                            <Route
                                path="/personal/settings"
                                exact
                                component={Settings}
                            />
                            <Route
                                path="/personal/tables"
                                exact
                                component={Tables}
                            />
                            <Redirect
                                from="/personal"
                                to="/personal/dashboard"
                            />
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
