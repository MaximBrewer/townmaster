import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#app");

// components
import { useAuth } from "../../../context/auth";

import CardCompany from "../../../components/Cards/CardCompany";

import { PlusIcon, BinIcon, CloseIcon } from "../../../Icons";

export default function Home({ setCompany }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        },
        overlay: { zIndex: 40 }
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

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
            case "#places":
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
                <div className=" flex flex-col sm:flex-row">
                    <ul
                        className="lg:w-2/3 flex flex-col sm:flex-row mb-0 list-none flex-wrap mt-3 mb-4 flex-row sm:border-r-2"
                        role="tablist"
                    >
                        <li className="-mb-px flex-auto text-center">
                            <a
                                className={`text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block ${
                                    openTab === 1 ? `border-${color}-600 text-${color}-600` : ``
                                }`}
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
                        <li className="-mb-px flex-auto text-center">
                            <a
                                className={`text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block ${
                                    openTab === 2 ? `border-${color}-600 text-${color}-600` : ``
                                }`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    location.hash = "places";
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="places"
                            >
                                Площадки
                            </a>
                        </li>
                        <li className="-mb-px flex-auto text-center">
                            <a
                                className={`text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block ${
                                    openTab === 3 ? `border-${color}-600 text-${color}-600` : ``
                                }`}
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
                        <li className="-mb-px flex-auto text-center">
                            <a
                                className={`text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block ${
                                    openTab === 4 ? `border-${color}-600 text-${color}-600` : ``
                                }`}
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
                        <li className="-mb-px flex-auto text-center">
                            <a
                                className={`text-xs mr-2 font-bold border-b-4 uppercase px-2 py-3 block ${
                                    openTab === 5 ? `border-${color}-600 text-${color}-600` : ``
                                }`}
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
                    <div className="flex-auto text-center pt-3 pb-4 text-center">
                        <a
                            className={
                                "flex text-xs ml-2 font-bold uppercase px-2 py-3 block"
                            }
                            onClick={e => {
                                e.preventDefault();
                                openModal("");
                            }}
                            data-toggle="tab"
                            href="#permissions"
                            role="tablist"
                        >
                            <BinIcon className="w-4 mr-2" />
                            Удалить огранизацию
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="py-5 flex-auto">
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
                            ></div>
                            <div
                                className={openTab === 3 ? "block" : "hidden"}
                                id="link3"
                            ></div>
                            <div
                                className={openTab === 4 ? "block" : "hidden"}
                                id="link3"
                            ></div>
                            <div
                                className={openTab === 5 ? "block" : "hidden"}
                                id="link3"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Simple Modal!</p>
                    <div
                        className="modal-close cursor-pointer z-50"
                        onClick={closeModal}
                    >
                        <CloseIcon className="fill-current text-black" />
                    </div>
                </div>

                <p>Modal content can go here</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>

                <div className="flex justify-end pt-2">
                    <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                        Action
                    </button>
                    <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">
                        Close
                    </button>
                </div>
            </Modal>
        </>
    );
}
