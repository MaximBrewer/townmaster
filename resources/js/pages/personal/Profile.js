import React from "react";
import { Link } from "react-router-dom";

// components
import { useAuth } from "../../context/auth";

import CardProfile from "../../components/Cards/CardProfile.js";
import CardTariff from "../../components/Cards/CardTariff.js";
import CardPassword from "../../components/Cards/CardPassword.js";

export default function Profile() {
    let { setCurrentUser, setToken, currentUser } = useAuth();
    const [openTab, setOpenTab] = React.useState(() => {
        switch (location.hash) {
            case "#tariff":
                return 2;
            case "#change":
                return 3;
            default:
                location.hash = "info";
                return 1;
        }
    });
    React.useEffect(() => {
        switch (location.hash) {
            case "#tariff":
                setOpenTab(2);
                break;
            case "#change":
                setOpenTab(3);
                break;
            default:
                location.hash = "info";
                setOpenTab(1);
                break;
        }
    }, [location.hash]);
    const color = "green";

    return (
        <>
            <div className="w-full">
                <ul
                    className="lg:w-4/5 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    <li className="-mb-px sm:w-1/3 last:mr-0 flex-auto text-center">
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
                            Настройка профиля
                        </a>
                    </li>
                    <li className="-mb-px sm:w-1/3 last:mr-0 flex-auto text-center">
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
                            Тариф
                        </a>
                    </li>
                    <li className="-mb-px sm:w-1/3 last:mr-0 flex-auto text-center">
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
                                location.hash = "change";
                            }}
                            data-toggle="tab"
                            href="#change"
                            role="tablist"
                        >
                            Изменение пароля
                        </a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div
                                className={openTab === 1 ? "block" : "hidden"}
                                id="link1"
                            >
                                <CardProfile />
                            </div>
                            <div
                                className={openTab === 2 ? "block" : "hidden"}
                                id="link2"
                            >
                                <CardTariff />
                            </div>
                            <div
                                className={openTab === 3 ? "block" : "hidden"}
                                id="link3"
                            >
                                <CardPassword />
                            </div>
                        </div>

                        {currentUser && !currentUser.companies.length ? (
                            <div className="text-green-500 px-6 py-4 border-2 rounded relative mb-4 border-green-500">
                                Чтобы начать вести учет отходов, нажмите кнопку
                                в левом меню{" "}
                                <Link
                                    className="local text-yellow-700"
                                    to="/personal/company-add"
                                >
                                    "Добавить свою организацию"
                                </Link>{" "}
                                и начните вести учет.
                            </div>
                        ) : (
                            ``
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
