import React, { setState, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

// components

import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footers/Footer.js";

// views

import CompanyAdd from "./personal/CompanyAdd.js";
import Companies from "./personal/Companies.js";
import Profile from "./personal/Profile.js";
import Support from "./personal/Support.js";
import Home from "./personal/company/Home";
import Accounting from "./personal/company/Accounting";
import Primary from "./personal/company/Primary";
import Consumption from "./personal/company/Consumption";
import Disposal from "./personal/company/Disposal";
import Tp from "./personal/company/Tp";
import Nvos from "./personal/company/Nvos";
import Pek from "./personal/company/Pek";

export default function Personal(props) {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    let { setCurrentUser, setToken, currentUser } = useAuth();
    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    };

    const [company, setCompany] = useState(currentUser.company);

    const [searchResult, setSearchResult] = useState({
        search: false,
        items: [],
        query: ""
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
                        `flex  flex-col w-full pl-0 lg:pl-84 min-h-screen` +
                        (sideBarOpen ? ` overlay` : ``)
                    }
                    id="main-content"
                >
                    <Navbar
                        sideBarOpen={sideBarOpen}
                        toggleSideBar={toggleSideBar}
                        setSearchResult={setSearchResult}
                        searchResult={searchResult}
                    />
                    <div className="p-6 mb-20 flex flex-col flex-grow">
                        <Switch>
                            <Route
                                path="/personal/profile"
                                component={Profile}
                            />
                            <Route
                                path="/personal/companies"
                                exact
                                component={Companies}
                            />
                            <Route exact path="/personal/company-add">
                                <CompanyAdd
                                    searchResult={searchResult}
                                    setSearchResult={setSearchResult}
                                    company={company}
                                    setCompany={setCompany}
                                />
                            </Route>
                            <Route exact path="/personal/company">
                                <Home {...props} setCompany={setCompany}/>
                            </Route>
                            <Route exact path="/personal/company/accounting">
                                <Accounting {...props} />
                            </Route>
                            <Route exact path="/personal/company/primary">
                                <Primary {...props} />
                            </Route>
                            <Route exact path="/personal/company/consumption">
                                <Consumption {...props} />
                            </Route>
                            <Route exact path="/personal/company/disposal">
                                <Disposal {...props} />
                            </Route>
                            <Route exact path="/personal/company/tp">
                                <Tp {...props} />
                            </Route>
                            <Route exact path="/personal/company/nvos">
                                <Nvos {...props} />
                            </Route>
                            <Route exact path="/personal/company/pek">
                                <Pek {...props} />
                            </Route>
                            <Route
                                path="/personal/support"
                                exact
                                component={Support}
                            />
                            {!currentUser.company ? (
                                <Redirect
                                    exact
                                    from="/personal"
                                    to="/personal/company-add"
                                />
                            ) : (
                                <Redirect
                                    from="/personal"
                                    exact
                                    to="/personal/company"
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
