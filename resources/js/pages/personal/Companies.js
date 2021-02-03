import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";

import { AddCircle as AddCircleIcon, EditCard as EditCardIcon } from "../../Icons";

export default function Companies() {
    let history = useHistory();
    let { setCurrentUser, setToken, currentUser } = useAuth();

    const [show, setShow] = useState(
        currentUser.companies.map((item, index) => false)
    );

    return currentUser.companies.length ? (
        <div className="overflow-x-auto max-w-screen">
            <table className="min-w-full whitespace-nowrap">
                <thead>
                    <tr>
                        <th className="text-left px-4 py-2 text-gray-700 w-12"></th>
                        <th className="text-left w-2/3 px-4 py-2 text-gray-700">
                            Название
                        </th>
                        <th className="text-left px-4 py-2 text-gray-700">
                            ИНН
                        </th>
                        <th className="text-left px-4 py-2 text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {currentUser.companies.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr
                                className={`cursor-pointer hover:bg-gray-100 ${
                                    show[index] ? `bg-gray-200` : ``
                                }`}
                                onClick={e => {
                                    setShow(
                                        currentUser.companies.map(
                                            (item, ix) => ix == index
                                        )
                                    );
                                }}
                            >
                                <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700"></td>
                                <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                    <div className="text-sm">{item.title}</div>
                                </td>
                                <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                    {item.inn}
                                </td>
                                <td className="border-t border-b border-light-gray-500 py-2   text-gray-700">
                                    <a
                                        className="py-2 px-4 rounded hover:bg-gray-200 px-4 my-2 inline-block"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setCurrentUser(prevState => ({
                                                ...prevState,
                                                company: item
                                            }));
                                            history.push("/personal/company#main")
                                        }}
                                        href="#"
                                    >
                                        Выбрать
                                    </a>
                                </td>
                            </tr>
                            <tr
                                className={`accounting ${
                                    show[index] ? `` : `hidden`
                                }`}
                            >
                                <td colSpan="4">
                                    <table className="w-full mb-4 text-center text-gray-700">
                                        <tbody>
                                            <tr>
                                                <td rowSpan="3" className="border px-2 py-2"></td>
                                                <td colSpan="12" className="border px-2 py-2">
                                                    <b>Данные учета</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" className="border px-2 py-2">1 квартал</td>
                                                <td colSpan="3" className="border px-2 py-2">2 квартал</td>
                                                <td colSpan="3" className="border px-2 py-2">3 квартал</td>
                                                <td colSpan="3" className="border px-2 py-2">4 квартал</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-2 py-2">Янв</td>
                                                <td className="border px-2 py-2">Фев</td>
                                                <td className="border px-2 py-2">Мар</td>
                                                <td className="border px-2 py-2">Апр</td>
                                                <td className="border px-2 py-2">Май</td>
                                                <td className="border px-2 py-2">Июн</td>
                                                <td className="border px-2 py-2">Июл</td>
                                                <td className="border px-2 py-2">Авг</td>
                                                <td className="border px-2 py-2">Сен</td>
                                                <td className="border px-2 py-2">Окт</td>
                                                <td className="border px-2 py-2">Ноя</td>
                                                <td className="border px-2 py-2">Дек</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/4 text-left border px-2 py-2">
                                                    <b>{item.title}</b>
                                                </td>
                                                <td className="border px-2 py-2">
                                                    <a className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020">
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        target="_blank"
                                                        data-bind="attr: {href: $parent.link}, tippy:true"
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                        data-tippy=""
                                                        data-original-title="Отчетный период не заполнен<br/>(нажмите для редактирования)"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>

                                                <td className="border px-2 py-2">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6 fill-current" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <div className="flex flex-wrap flex-col">
            <div className="empty-list mb-5">
                По вашему запросу ничего не нашлось
            </div>
            <Link
                to="/personal/company-add"
                className="text-gray-600 font-medium"
            >
                Добавьте первую организацию
            </Link>
        </div>
    );
}
