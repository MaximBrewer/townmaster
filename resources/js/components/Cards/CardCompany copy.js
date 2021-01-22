import React, { useEffect, useState } from "react";
import Select from "react-select";
// components

export default function CardCompany({ company, setCompany }) {
    const [errors, setErrors] = useState({});
    const handleSubmit = () => {
        console.log(company);
    };
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ];

    const [state, setState] = useState({
        selectedOption: null
    });

    const handleChange = selectedOption => {
        setState(prevState => {
            console.log(`Option selected:`, selectedOption);
            return {
                selectedOption: selectedOption
            };
        });
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-0">
                <div className="flex-auto py-10 pt-0 w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Тип организации
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                            <Select
                                value={state.selectedOption}
                                onChange={handleChange}
                                options={options}
                            />
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Название
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Полное название
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        ИНН
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        КПП
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        ОГРН
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        ОКВЭД
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Телефон
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Факс
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        E-mail
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Адрес
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full lg:w-12/12 my-5">
                                <div className="md-input-box">
                                    <input
                                        type="text"
                                        className="md-input bg-transparent"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullName"
                                        className="md-label"
                                    >
                                        Вид промышленности
                                    </label>
                                    <div className="md-input-underline" />
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-sm">
                            <h1 className="mb-6 pt-6">
                                {" "}
                                Make the right choice :
                            </h1>

                            <div className="pl-12">
                                <div className="flex items-center mr-4 mb-4">
                                    <input
                                        id="radio1"
                                        type="radio"
                                        name="radio"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="radio1"
                                        className="flex items-center cursor-pointer text-xl"
                                    >
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                                        Best choice
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input
                                        id="radio2"
                                        type="radio"
                                        name="radio"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="radio2"
                                        className="flex items-center cursor-pointer text-xl"
                                    >
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                                        Second choice
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input
                                        id="radio3"
                                        type="radio"
                                        name="radio"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="radio3"
                                        className="flex items-center cursor-pointer text-xl"
                                    >
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                                        Third choice
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input
                                        id="radio4"
                                        type="radio"
                                        name="radio"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="radio4"
                                        className="flex items-center cursor-pointer text-xl"
                                    >
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                                        Fourth choice
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input
                                        id="radio5"
                                        type="radio"
                                        name="radio"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="radio5"
                                        className="flex items-center cursor-pointer text-xl"
                                    >
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                                        Choice Five with a longer title
                                    </label>
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
