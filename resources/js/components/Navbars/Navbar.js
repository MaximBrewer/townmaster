import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useAuth } from "../../context/auth";

import { Lens as LensIcon, Profile as ProfileIcon } from "../../Icons";
import client from "../../api/client";

import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Navbar({
    toggleSideBar,
    setSearchResult,
    searchResult
}) {
    let match = useRouteMatch("/personal/company-add");

    let { currentUser } = useAuth();

    const getCompanies = event => {
        const eventTarget = event.target;
        setSearchResult(prevState => ({
            ...prevState,
            query: eventTarget.value
        }));
        if (eventTarget.value.length > 3)
            client("/api/searchCompanies", {
                body: { q: eventTarget.value }
            }).then(({ companies }) => {
                setSearchResult(prevState => ({
                    ...prevState,
                    search: true,
                    items: companies
                }));
            });
        else
            setSearchResult(prevState => ({
                ...prevState,
                search: false,
                items: []
            }));
    };

    return (
        <div className="sticky top-0 z-40 shadow-lg">
            <div className="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
                <div className="flex  w-full pr-4">
                    <div className="inline-block lg:hidden flex items-center mr-4">
                        <button
                            className="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
                            onClick={toggleSideBar}
                        >
                            <svg
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                style={{ fill: "black" }}
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    {match ? (
                        <div className="relative text-gray-600 w-full">
                            <button
                                type="submit"
                                className="absolute left-0 top-0 mt-2 ml-2 h-6 w-6 fill-current"
                            >
                                <LensIcon />
                            </button>
                            <input
                                onChange={getCompanies}
                                type="search"
                                name="serch"
                                value={searchResult.query}
                                placeholder="поиск по инн, кпп, огрн или названию организации..."
                                className="bg-transparent h-10 w-full px-5 pl-10 text-sm focus:outline-none"
                            />
                        </div>
                    ) : (
                        <div className="flex">
                            <div className="h-6 w-6 fill-current mr-3">
                                <ProfileIcon />
                            </div>
                            <Link to={`/personal/profile`}>
                                {currentUser.name
                                    ? currentUser.name +
                                      (currentUser.lastname
                                          ? ` ${currentUser.lastname}`
                                          : ``)
                                    : currentUser.email}
                            </Link>
                            &nbsp;/&nbsp;
                            <Link to={`/personal/profile#tariff`}>
                                <span className={`text-red-700`}>FREE</span>
                            </Link>
                        </div>
                    )}
                </div>
                {match ? (
                    <div className="flex items-center relative">
                        <Link to={`/personal/profile`}>
                            {currentUser.name
                                ? currentUser.name +
                                  (currentUser.lastname
                                      ? ` ${currentUser.lastname}`
                                      : ``)
                                : currentUser.email}
                        </Link>
                        &nbsp;/&nbsp;
                        <Link to={`/personal/profile#tariff`}>
                            <span className={`text-red-700`}>FREE</span>
                        </Link>
                    </div>
                ) : (
                    ``
                )}
            </div>
        </div>
    );
}
