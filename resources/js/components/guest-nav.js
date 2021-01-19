import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../context/auth";
import useDocumentTitle from "../components/document-title";

function GuestNav() {
    let { authenticated, currentUser } = useAuth();

    return (
        <div className="w-full px-6 mx-auto flex items-center justify-between">
            <ul className="list-reset flex pt-4">
                <li className="px-2">
                    <Link
                        to="/"
                        className="no-underline text-gray-700 uppercase font-thin"
                    >
                        Town Master
                    </Link>
                </li>
            </ul>

            {authenticated ? (
                <Link
                    to="/personal"
                    className="no-underline text-gray-700 uppercase font-thin"
                >
                    {currentUser.email}
                </Link>
            ) : (
                <ul className="list-reset flex pt-4">
                    <li className="px-4 py-2">
                        <Link
                            to="/login"
                            className="no-underline font-medium text-grey-darker"
                        >
                            Логин
                        </Link>
                    </li>

                    <li className="px-4 py-2 border bg-indigo-500">
                        <Link
                            to="/register"
                            className="no-underline text-white font-semi-bold"
                        >
                            Регистрация
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default GuestNav;
