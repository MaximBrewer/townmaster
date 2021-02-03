import { useScrollTrigger } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/auth";
import useInputValue from "../../components/input-value";
import client from "../../api/client";

import Select from "react-select";
import AddressField from "../Fields/AddressField";

// components

export default function CardCompany({ company, setCompany }) {

    let { setCurrentUser, setToken, currentUser } = useAuth();

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: "transition"
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "transition",
            outline: "none !important"
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: "transition"
        }),
        menuList: (provided, state) => ({
            ...provided
        }),
        menuPortal: (provided, state) => ({
            ...provided
        }),
        singleValue: (provided, state) => {
            let rest = {
                marginLeft: 0,
                marginRight: 0
            };
            return { ...provided, rest };
        },
        input: (provided, state) => ({
            ...provided,
            margin: 0,
            padding: 0
        }),
        control: (provided, state) => {
            let rest = {
                borderRadius: "0.375rem",
                backgroundColor: "rgba(5, 150, 105, var(--tw-text-opacity))",
                borderColor: "#e5e7eb",
                "&:hover": {
                    borderColor: "#e5e7eb"
                }
            };
            return { ...provided, ...rest };
        },
        dropdownIndicator: (provided, state) => ({
            ...provided
            // color: "#ffffff",
            // "&:hover": {
            //     color: "#ffffff"
            // }
        }),
        placeholder: (provided, state) => ({
            ...provided
            // color: "#ffffff"
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided
            // width: 0
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided
        })
    };

    let title = useInputValue("title", company ? company.title : "");
    let fulltitle = useInputValue(
        "fulltitle",
        company ? company.fulltitle : ""
    );
    let inn = useInputValue("inn", company && company.inn ? company.inn : "");
    let kpp = useInputValue("kpp", company && company.kpp ? company.kpp : "");
    let ogrn = useInputValue(
        "ogrn",
        company && company.ogrn ? company.ogrn : ""
    );
    let guiv = useInputValue(
        "guiv",
        company && company.guiv ? company.guiv : ""
    );
    let okved = useInputValue(
        "okved",
        company && company.okved ? company.okved : ""
    );
    let phone = useInputValue(
        "phone",
        company && company.phone ? company.phone : ""
    );
    let fax = useInputValue("fax", company && company.fax ? company.fax : "");
    let email = useInputValue(
        "email",
        company && company.email ? company.email : ""
    );

    const [address, setAddress] = useState(
        company && company.address
            ? {
                  value: company.address ? company.address : "",
                  okato: company.okato ? company.okato : "",
                  oktmo: company.oktmo ? company.oktmo : "",
                  postal_code: company.postal_code ? company.postal_code : ""
              }
            : {
                  value: "",
                  okato: "",
                  oktmo: "",
                  postal_code: ""
              }
    );

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        client(`/api/companies${company.id ? `/${company.id}` : ``}`, {
            method: company.id ? "PATCH" : "POST",
            body: {
                type_id: type.value,
                title: title.value,
                fulltitle: fulltitle.value,
                inn: inn.value,
                kpp: kpp.value,
                ogrn: ogrn.value,
                okved: okved.value,
                phone: phone.value,
                fax: fax.value,
                email: email.value,
                address: address,
                industry: industry.value.value,
                activity: activity.value,
                waste: waste.value,
                registration: registration.value,
                licensies: company.licensies
            }
        })
            .then(({ company }) => {
                setCurrentUser(prevState => {
                    let companies = [company];
                    for (let c of prevState.companies)
                        if (c.id != company.id)
                            prevState.companies.push(company);
                    return {
                        ...prevState,
                        companies: companies,
                        company: company
                    };
                });
                setShowAlert(true);
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    [
                        type_id,
                        title,
                        fulltitle,
                        inn,
                        kpp,
                        ogrn,
                        okved,
                        phone,
                        fax,
                        email,
                        address,
                        industry,
                        activity,
                        waste,
                        registration
                    ].forEach(({ parseServerError }) =>
                        parseServerError(errors)
                    );
                });
            });
    };

    const typeOptions = [
        { value: 1, label: "Юридическое лицо" },
        { value: 2, label: "Физическое лицо" },
        { value: 3, label: "Индивидуальный предприниматель" },
        { value: 4, label: "Глава крестьянского (фермерского) хозяйства" }
    ];

    const industryOptions = [
        { value: "other", label: "Прочие" },
        { value: "processing", label: "Перерабатывающая промышленность" },
        { value: "mining", label: "Добывающая промышленность" }
    ];

    const [type, setType] = useState({
        value: company ? company.type_id : 1,
        error: ""
    });

    const [industry, setIndustry] = useState({
        value: company ? company.industry : "other",
        error: ""
    });

    const [registration, setRegistration] = useState({
        value: company ? company.registration * 1 : 0,
        error: ""
    });

    const [activity, setActivity] = useState({
        value: company ? company.activity * 1 : 0,
        error: ""
    });

    const [waste, setWaste] = useState({
        value: company ? company.waste * 1 : 0,
        error: ""
    });

    const handleIndusrtyChange = value => {
        setIndustry({
            value: value,
            error: ""
        });
    };

    const handleTypeChange = value => {
        setType({
            value: value,
            error: ""
        });
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-0">
                <div className="flex-auto py-10 pt-0 w-full lg:w-4/5 xl:w-2/3">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap flex-col">
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <Select
                                        styles={customStyles}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        onChange={handleTypeChange}
                                        options={typeOptions}
                                        defaultValue={typeOptions[0]}
                                    />
                                    <label
                                        htmlFor="title"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        Тип
                                    </label>
                                </div>
                                {type.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {type.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            title.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="title"
                                        name="title"
                                        required
                                        {...title.bind}
                                    />
                                    <label
                                        htmlFor="title"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        Название организации
                                    </label>
                                </div>
                                {title.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {title.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            fulltitle.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        placeholder=" "
                                        id="fulltitle"
                                        name="fulltitle"
                                        required
                                        {...fulltitle.bind}
                                    />
                                    <label
                                        htmlFor="fulltitle"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        Полное название
                                    </label>
                                </div>
                                {fulltitle.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {fulltitle.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            inn.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="inn"
                                        name="inn"
                                        required
                                        {...inn.bind}
                                    />
                                    <label
                                        htmlFor="inn"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        ИНН
                                    </label>
                                </div>
                                {inn.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {inn.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            kpp.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="kpp"
                                        name="kpp"
                                        required
                                        {...kpp.bind}
                                    />
                                    <label
                                        htmlFor="kpp"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        КПП
                                    </label>
                                </div>
                                {kpp.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {kpp.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            ogrn.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="ogrn"
                                        name="ogrn"
                                        required
                                        {...ogrn.bind}
                                    />
                                    <label
                                        htmlFor="ogrn"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        ОГРН
                                    </label>
                                </div>
                                {ogrn.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {ogrn.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            guiv.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="ogrn"
                                        name="ogrn"
                                        required
                                        {...guiv.bind}
                                    />
                                    <label
                                        htmlFor="guiv"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        ГУИВ
                                    </label>
                                </div>
                                {guiv.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {guiv.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            okved.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="okved"
                                        name="okved"
                                        required
                                        {...okved.bind}
                                    />
                                    <label
                                        htmlFor="okved"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        ОКВЭД
                                    </label>
                                </div>
                                {okved.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {okved.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
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
                                        className="md-label bg-white left-4 px-1"
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
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="text"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            fax.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="fax"
                                        name="fax"
                                        required
                                        {...fax.bind}
                                    />
                                    <label
                                        htmlFor="fax"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        Факс
                                    </label>
                                </div>
                                {fax.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {fax.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <input
                                        type="email"
                                        className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                            email.error ? "border-red-500" : ""
                                        }`}
                                        placeholder=" "
                                        id="email"
                                        name="email"
                                        required
                                        {...email.bind}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        E-mail
                                    </label>
                                </div>
                                {email.error && (
                                    <p className="text-red-500 text-xs pt-2">
                                        {email.error}
                                    </p>
                                )}
                            </div>
                            <div className="md-input-main w-full my-2">
                                <AddressField
                                    address={address}
                                    setAddress={setAddress}
                                />
                            </div>
                            <div className="md-input-main w-full my-2">
                                <div className={`md-input-box`}>
                                    <Select
                                        styles={customStyles}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        onChange={handleIndusrtyChange}
                                        options={industryOptions}
                                        defaultValue={industryOptions[0]}
                                    />
                                    <label
                                        htmlFor="title"
                                        className="md-label bg-white left-4 px-1"
                                    >
                                        Вид промышленности
                                    </label>
                                </div>
                            </div>
                            <div className="md-input-main w-full my-2">
                                <input
                                    id="activity"
                                    type="checkbox"
                                    name="activity"
                                    className="hidden"
                                    onChange={e => {
                                        setActivity({
                                            value: e.target.checked * 1,
                                            error: ""
                                        });
                                    }}
                                />
                                <label
                                    htmlFor="activity"
                                    className="flex items-center cursor-pointer color"
                                >
                                    <span className="w-6 h-6 inline-block mr-2 rounded-md border border-grey flex-no-shrink"></span>
                                    Осуществляющими деятельность c твердыми
                                    коммунальными отходами
                                </label>
                            </div>
                            <div className="md-input-main w-full my-2">
                                <input
                                    id="waste"
                                    type="checkbox"
                                    name="waste"
                                    className="hidden"
                                    onChange={e => {
                                        setWaste({
                                            value: e.target.checked * 1,
                                            error: ""
                                        });
                                    }}
                                />
                                <label
                                    htmlFor="waste"
                                    className="flex items-center cursor-pointer color"
                                >
                                    <span className="w-6 h-6 inline-block mr-2 rounded-md border border-grey flex-no-shrink"></span>
                                    Осуществляет деятельность по хранению и
                                    захоронению отходов на своем объекте
                                    размещения
                                </label>
                            </div>
                            <div className="md-input-main w-full my-2">
                                <input
                                    id="registration"
                                    type="checkbox"
                                    name="registration"
                                    className="hidden"
                                    onChange={e => {
                                        setRegistration({
                                            value: e.target.checked * 1,
                                            error: ""
                                        });
                                    }}
                                />
                                <label
                                    htmlFor="registration"
                                    className="flex items-center cursor-pointer color"
                                >
                                    <span className="w-6 h-6 inline-block mr-2 rounded-md border border-grey flex-no-shrink"></span>
                                    Вести учет данных отходов без учета
                                    контрагентов
                                </label>
                            </div>
                        </div>
                        {showAlert ? (
                            <div
                                className={
                                    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"
                                }
                            >
                                <span className="inline-block align-middle mr-8">
                                    Организация обновлена!
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
