import { useScrollTrigger } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import useInputValue from "../../components/input-value";
import client from "../../api/client";

// components

export default function CardProfile() {
    let { setCurrentUser, setToken, currentUser } = useAuth(); 
    let name = useInputValue("name", currentUser.name ? currentUser.name : "");
    let lastname = useInputValue("lastname", currentUser.lastname ? currentUser.lastname : "");
    let surname = useInputValue("surname", currentUser.surname ? currentUser.surname : "");
    let phone = useInputValue("phone", currentUser.phone ? currentUser.phone : "");

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/profile/update", {
            body: {
                name: name.value,
                lastname: lastname.value,
                surname: surname.value,
                phone: phone.value
            }
        })
            .then(({ data: user }) => {
                setCurrentUser(user);
                setShowAlert(true);
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    [
                        name,
                        lastname,
                        surname,
                        phone
                    ].forEach(({ parseServerError }) =>
                        parseServerError(errors)
                    );
                });
            });
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-0">
                <div className="flex-auto py-10 pt-0 w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            name.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="name"
                                        name="name"
                                        required
                                        {...name.bind}
                                    />
                                    <label
                                        htmlFor="name"
                                        className="md-label bg-gray-100 px-1"
                                    >
                                        Фамилия
                                    </label>
                                </div>
                                {name.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {name.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            lastname.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="lastname"
                                        name="lastname"
                                        required
                                        {...lastname.bind}
                                    />
                                    <label
                                        htmlFor="lastname"
                                        className="md-label bg-gray-100 px-1"
                                    >
                                        Имя
                                    </label>
                                </div>
                                {lastname.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {lastname.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            surname.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="surname"
                                        name="surname"
                                        required
                                        {...surname.bind}
                                    />
                                    <label
                                        htmlFor="surname"
                                        className="md-label bg-gray-100 px-1"
                                    >
                                        Отчество
                                    </label>
                                </div>
                                {surname.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {surname.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            phone.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="phone"
                                        name="phone"
                                        required
                                        {...phone.bind}
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="md-label bg-gray-100 px-1"
                                    >
                                        Телефон
                                    </label>
                                </div>
                                {phone.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {phone.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        {showAlert ? (
                            <div
                                className={
                                    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"
                                }
                            >
                                <span className="inline-block align-middle mr-8">
                                    Данные обновлены!
                                </span>
                                <button
                                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                                    onClick={() => setShowAlert(false)}
                                >
                                    <span>×</span>
                                </button>
                            </div>
                        ) : null}
                        <div className="py-6 w-full">
                            <div className="text-center flex justify-start">
                                <button
                                    className="h-10 font-lg px-5 rounded-md text-green-600 transition-colors duration-150 border-2 border-green-600 focus:shadow-outline hover:bg-green-400 hover:text-white"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
