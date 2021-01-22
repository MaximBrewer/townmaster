/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { setIntendedUrl } from "../../utils/auth";

import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

import {
    ProfileSidebarIcon,
    CompaniesSidebarIcon,
    CompanyAddSidebarIcon,
    SupportSidebarIcon
} from "../../Icons";

export default function Sidebar({ sideBarOpen }) {
    const location = useLocation();
    let { setCurrentUser, setToken, currentUser } = useAuth();
    let history = useHistory();
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const handleLogout = () => {
        setCurrentUser(null);
        setToken(null);
        history.push("/");
        setIntendedUrl(null);
    };

    return (
        <div
            className={
                `w-1/2 md:w-1/3 lg:w-84 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30` +
                (sideBarOpen ? `` : ` hidden`)
            }
            id="main-nav"
        >
            <div className="w-full h-20 border-b flex px-4 items-center mb-8 shadow-lg">
                <p className="font-semibold text-3xl text-gray-600">
                    Таун&nbsp;Мастер
                </p>
            </div>
            <div className="flex flex-col h-full">
                <div className="mb-4 flex-grow">
                    <div
                        className={`border-b border-t w-full flex items-center cursor-pointer`}
                    >
                        <NavLink
                            to={`/personal/profile`}
                            className={`py-4 block flex hover:bg-gray-200 w-full px-4`}
                            activeClassName="bg-gray-200"
                        >
                            <div className="h-6 w-6 fill-current mr-2">
                                <ProfileSidebarIcon />
                            </div>
                            <span>
                                {currentUser.name
                                    ? currentUser.name +
                                      (currentUser.lastname
                                          ? ` ${currentUser.lastname}`
                                          : ``)
                                    : currentUser.email}
                            </span>
                            <span>&nbsp;/&nbsp;</span>
                            <span className={`text-red-700`}>FREE</span>
                        </NavLink>
                    </div>
                    <div className="border-b w-full flex items-center cursor-pointer">
                        <NavLink
                            to={`/personal/companies`}
                            className={`py-4 block flex hover:bg-gray-200 w-full px-4`}
                            activeClassName="bg-gray-200"
                        >
                            <div className="h-6 w-6 fill-current mr-2">
                                <CompaniesSidebarIcon />
                            </div>
                            <span className={`text-gray-700 truncate"`}>
                                Все организации
                            </span>
                        </NavLink>
                    </div>
                    <div className="border-b w-full flex items-center cursor-pointer">
                        <NavLink
                            to={`/personal/company-add`}
                            className={`py-4 block flex hover:bg-gray-200 w-full px-4`}
                            activeClassName="bg-gray-200"
                        >
                            <div className="h-6 w-6 fill-current mr-2">
                                <CompanyAddSidebarIcon />
                            </div>
                            <span className={`text-gray-700 truncate"`}>
                                Добавить организацию
                            </span>
                        </NavLink>
                    </div>
                    <div className="border-b w-full flex items-center cursor-pointer">
                        <NavLink
                            to={`/personal/support`}
                            className={`py-4 block flex hover:bg-gray-200 w-full px-4`}
                            activeClassName="bg-gray-200"
                        >
                            <div className="h-6 w-6 fill-current mr-2">
                                <SupportSidebarIcon />
                            </div>
                            <span className={`text-gray-700 truncate"`}>
                                Техническая поддержка
                            </span>
                        </NavLink>
                    </div>
                </div>
                <button className="h-12 font-lg px-5 rounded-md text-blue-500 transition-colors duration-150 border-2 border-blue-400 focus:shadow-outline hover:bg-blue-400 hover:text-white">
                    заполнить вручную
                </button>
            </div>
        </div>
    );
}
