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
    SupportSidebarIcon,
    CompanySidebarIcon
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
                `flex-col w-1/2 md:w-1/3 lg:w-84 fixed md:top-0 md:left-0 h-screen lg:flex bg-gray-100 border-r z-30` +
                (sideBarOpen ? `` : ` hidden`)
            }
            id="main-nav"
        >
            <div className="w-full mb-8">
                <p className="font-semibold text-3xl text-gray-600 h-20 flex items-center border-b px-4 shadow-lg">
                    Таун&nbsp;Мастер
                </p>
            </div>
            <div className="flex flex-col overflow-y-auto flex-grow">
                <div className="mb-4 flex-grow">
                    {currentUser.company ? (
                        <div className="border-b w-full items-center cursor-pointer">
                            <NavLink
                                to={`/personal/company`}
                                className={`py-4 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    <strong>{currentUser.company.title}</strong>
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/accounting`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Данные учета отходов
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/primary`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Первичный учет выбросов
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/consumption`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Учет водопотребления
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/disposal`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Учет водоотведения
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/tp`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    2-ТП (отходы)
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/nvos`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Декларация за НВОС
                                </span>
                            </NavLink>
                            <NavLink
                                to={`/personal/company/pek`}
                                className={`py-2 block flex hover:bg-gray-200 w-full px-4`}
                                activeClassName="bg-gray-200"
                            >
                                <div className="h-6 w-6 fill-current mr-2">
                                    <CompanySidebarIcon />
                                </div>
                                <span className={`text-gray-700 truncate"`}>
                                    Отчет ПЭК, ПЭК
                                </span>
                            </NavLink>
                        </div>
                    ) : (
                        ``
                    )}
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
            </div>
            <div className="w-full mb-2 px-4 border-t">
                <button className="w-full mt-4 h-12 font-lg px-5 rounded-md text-red-500 transition-colors duration-150 border-2 border-red-400 focus:shadow-outline hover:bg-red-400 hover:text-white" onClick={handleLogout}>
                    Выйти
                </button>
            </div>
        </div>
    );
}
