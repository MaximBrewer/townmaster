import React, { useState } from "react";

// components

export default function CardCompany({ company, setCompany }) {
    const [errors, setErrors] = useState({});
    const handleSubmit = () => {
        console.log(company);
    };
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-0">
                <div className="flex-auto py-10 pt-0 w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Тип организации
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Название
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Полное название
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        ИНН
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        КПП
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        ОГРН
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        ОКВЭД
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Телефон
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Факс
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        E-mail
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Адрес
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div class="md-input-box">
                                    <input
                                        type="text"
                                        class="md-input bg-transparent"
                                        placeholder=" "

                                    />
                                    <label for="fullName" class="md-label">
                                        Вид промышленности
                                    </label>
                                    <div class="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="py-6 w-full">
                            <div className="text-center flex justify-start">
                                <button
                                    className="h-10 font-lg px-5 rounded-md text-blue-500 transition-colors duration-150 border-2 border-blue-400 focus:shadow-outline hover:bg-blue-400 hover:text-white"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Сохранить
                                </button>
                                <button
                                    className="h-10 font-lg ml-4 px-5 rounded-md text-blue-500 transition-colors duration-150 border-2 border-blue-400 focus:shadow-outline hover:bg-blue-400 hover:text-white"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Новый поиск
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
