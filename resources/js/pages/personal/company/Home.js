import React from "react";
import { Link } from "react-router-dom";

// components
import { useAuth } from "../../../context/auth";

import CardCompany from "../../../components/Cards/CardCompany";
import CardTariff from "../../../components/Cards/CardTariff.js";
import CardPassword from "../../../components/Cards/CardPassword.js";

export default function Home({ setCompany }) {
    let { setCurrentUser, setToken, currentUser } = useAuth();
    const [openTab, setOpenTab] = React.useState(() => {
        switch (location.hash) {
            case "#places":
                return 2;
            case "#persons":
                return 3;
            case "#contractors":
                return 4;
            case "#permissions":
                return 5;
            default:
                location.hash = "main";
                return 1;
        }
    });
    React.useEffect(() => {
        switch (location.hash) {
            case "#tariff":
                setOpenTab(2);
                break;
            case "#persons":
                setOpenTab(3);
                break;
            case "#contractors":
                setOpenTab(4);
                break;
            case "#permissions":
                setOpenTab(5);
                break;
            default:
                location.hash = "main";
                setOpenTab(1);
                break;
        }
    }, [location.hash]);
    const color = "green";

    return (
        <>
            <div className="w-full">
                <div className="flex">
                    <ul
                        className="lg:w-2/3 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-pxlast:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block leading-normal text-" +
                                    color +
                                    "-600 " +
                                    (openTab === 1
                                        ? "border-" + color + "-600"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    location.hash = "info";
                                }}
                                data-toggle="tab"
                                href="#info"
                                role="tablist"
                            >
                                Основная информация
                            </a>
                        </li>
                        <li className="-mb-pxlast:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block leading-normal text-" +
                                    color +
                                    "-600 " +
                                    (openTab === 2
                                        ? "border-" + color + "-600"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    location.hash = "tariff";
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tariff"
                            >
                                Площадки
                            </a>
                        </li>
                        <li className="-mb-pxlast:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block leading-normal text-" +
                                    color +
                                    "-600 " +
                                    (openTab === 3
                                        ? "border-" + color + "-600"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                    location.hash = "persons";
                                }}
                                data-toggle="tab"
                                href="#persons"
                                role="tablist"
                            >
                                Сотрудники
                            </a>
                        </li>
                        <li className="-mb-pxlast:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block leading-normal text-" +
                                    color +
                                    "-600 " +
                                    (openTab === 4
                                        ? "border-" + color + "-600"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                    location.hash = "contractors";
                                }}
                                data-toggle="tab"
                                href="#contractors"
                                role="tablist"
                            >
                                Контрагенты
                            </a>
                        </li>
                        <li className="-mb-pxlast:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block leading-normal text-" +
                                    color +
                                    "-600 " +
                                    (openTab === 5
                                        ? "border-" + color + "-600"
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                    location.hash = "permissions";
                                }}
                                data-toggle="tab"
                                href="#permissions"
                                role="tablist"
                            >
                                Разрешающие документы
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div
                                className={openTab === 1 ? "block" : "hidden"}
                                id="link1"
                            >
                                <CardCompany
                                    company={currentUser.company}
                                    setCompany={setCompany}
                                />
                            </div>
                            <div
                                className={openTab === 2 ? "block" : "hidden"}
                                id="link2"
                            >
                            </div>
                            <div
                                className={openTab === 3 ? "block" : "hidden"}
                                id="link3"
                            >
                            </div>
                            <div
                                className={openTab === 4 ? "block" : "hidden"}
                                id="link3"
                            >
                            </div>
                            <div
                                className={openTab === 5 ? "block" : "hidden"}
                                id="link3"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
