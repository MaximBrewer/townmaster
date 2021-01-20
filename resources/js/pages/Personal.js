import React, { setState, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

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
import CompanyAdd from "./personal/CompanyAdd.js";
import Companies from "./personal/Companies.js";
import Tariff from "./personal/Tariff.js";
import Profile from "./personal/Profile.js";
import Support from "./personal/Support.js";

export default function Personal() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    let { setCurrentUser, setToken, currentUser } = useAuth();
    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    };
    const [searchResult, setSearchResult] = useState({
        search: false,
        items: []
    });
    return (
        <div className="leading-normal tracking-normal" id="main-body">
            <div className="flex flex-wrap">
                <Sidebar
                    sideBarOpen={sideBarOpen}
                    toggleSideBar={toggleSideBar}
                />
                <div
                    className={
                        `flex  flex-col w-full bg-gray-100 pl-0 lg:pl-84 min-h-screen` +
                        (sideBarOpen ? ` overlay` : ``)
                    }
                    id="main-content"
                >
                    <Navbar
                        sideBarOpen={sideBarOpen}
                        toggleSideBar={toggleSideBar}
                        setSearchResult={setSearchResult}
                    />
                    <div className="p-6 bg-gray-100 mb-20 flex flex-grow">
                        <Switch>
                            <Route
                                path="/personal/profile"
                                exact
                                component={Profile}
                            />
                            <Route
                                path="/personal/tariff"
                                exact
                                component={Tariff}
                            />
                            <Route
                                path="/personal/companies"
                                exact
                                component={Companies}
                            />
                            <Route path="/personal/company-add" exact>
                                <CompanyAdd searchResult={searchResult} setSearchResult={setSearchResult}/>
                            </Route>
                            <Route
                                path="/personal/support"
                                exact
                                component={Support}
                            />
                            {currentUser ? (
                                <Redirect
                                    from="/personal"
                                    to="/personal/company-add"
                                />
                            ) : (
                                <Redirect
                                    from="/personal"
                                    to="/personal/companies"
                                />
                            )}
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
