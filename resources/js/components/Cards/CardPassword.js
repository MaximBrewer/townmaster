import { useScrollTrigger } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import useInputValue from "../../components/input-value";
import client from "../../api/client";

// components

export default function CardProfile() {
    let { setCurrentUser, setToken, currentUser } = useAuth();
    let oldPassword = useInputValue("oldPassword");
    let password = useInputValue("password");
    let passwordConfirmation = useInputValue("passwordConfirmation");

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/profile/password", {
            body: {
                old_password: oldPassword.value ? oldPassword.value : "",
                password: password.value ? password.value : "",
                password_confirmation: passwordConfirmation.value ? passwordConfirmation.value : ""
            }
        })
            .then(({ data: user }) => {
                setShowAlert(true);
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    [
                        oldPassword,
                        password,
                        passwordConfirmation
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
                                        type="password"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            oldPassword.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="oldPassword"
                                        name="oldPassword"
                                        required
                                        {...oldPassword.bind}
                                    />
                                    <label
                                        htmlFor="oldPassword"
                                        className="md-label bg-white px-1"
                                    >
                                        Текущий пароль
                                    </label>
                                </div>
                                {oldPassword.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {oldPassword.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="password"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            password.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="password"
                                        name="password"
                                        required
                                        {...password.bind}
                                    />
                                    <label
                                        htmlFor="password"
                                        className="md-label bg-white px-1"
                                    >
                                        Новый пароль
                                    </label>
                                </div>
                                {password.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {password.error}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className={`md-input-box`}>
                                    <input
                                        type="password"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            passwordConfirmation.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="password-confirmation"
                                        name="password_confirmation"
                                        required
                                        {...passwordConfirmation.bind}
                                    />
                                    <label
                                        htmlFor="password-confirmation"
                                        className="md-label bg-white px-1"
                                    >
                                        Подтвердите пароль
                                    </label>
                                </div>
                                {passwordConfirmation.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {passwordConfirmation.error}
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
                                    Пароль изменен!
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
