import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";

import client from "../../api/client";

import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Navbar({ toggleSideBar, setSearchResult }) {
    let { currentUser } = useAuth();

    const getCompanies = event => {
        if (event.target.value.length > 3)
            client("/api/searchCompanies", {
                body: { q: event.target.value }
            }).then(({ companies }) => {
                setSearchResult({ search: true, items: companies });
            });
        else setSearchResult({ search: false, items: [] });
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
                    <div className="relative text-gray-600 w-full">
                        <button
                            type="submit"
                            className="absolute left-0 top-0 mt-3 ml-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                xmlSpace="preserve"
                                width="512px"
                                height="512px"
                                className="h-4 w-4 fill-current"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                            </svg>
                        </button>
                        <input
                            onChange={getCompanies}
                            type="search"
                            name="serch"
                            placeholder="поиск по инн, кпп, огрн или названию организации..."
                            className="bg-transparent h-10 w-full px-5 pl-10 text-sm focus:outline-none"
                        />
                    </div>
                </div>
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
                    <Link to={`/personal/tariff`}>
                        <span className={`text-red-700`}>FREE</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
