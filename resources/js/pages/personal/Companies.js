import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

import { AddCircle as AddCircleIcon, EditCard as EditCardIcon } from "../../Icons";

export default function Companies() {
    let { setCurrentUser, setToken, currentUser } = useAuth();

    const [show, setShow] = useState(
        currentUser.companies.map((item, index) => false)
    );

    return currentUser.companies.length ? (
        <div className="overflow-hidden">
            <table className="table-fixed w-full">
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
                                className={`cursor-pointer hover:bg-gray-200 ${
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
                                <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                    <a
                                        onClick={e => {
                                            e.stopPropagation();
                                            setShow(
                                                currentUser.companies.map(
                                                    (item, ix) => false
                                                )
                                            );
                                            setCurrentUser(prevState => ({
                                                ...prevState,
                                                company: item
                                            }));
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
                                    <table className="w-full mb-4 text-center">
                                        <tbody>
                                            <tr>
                                                <td rowSpan="3" className="border"></td>
                                                <td colSpan="12" className="border">
                                                    <b>Данные учета</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" className="border">1 квартал</td>
                                                <td colSpan="3" className="border">2 квартал</td>
                                                <td colSpan="3" className="border">3 квартал</td>
                                                <td colSpan="3" className="border">4 квартал</td>
                                            </tr>
                                            <tr>
                                                <td className="border">Янв</td>
                                                <td className="border">Фев</td>
                                                <td className="border">Мар</td>
                                                <td className="border">Апр</td>
                                                <td className="border">Май</td>
                                                <td className="border">Июн</td>
                                                <td className="border">Июл</td>
                                                <td className="border">Авг</td>
                                                <td className="border">Сен</td>
                                                <td className="border">Окт</td>
                                                <td className="border">Ноя</td>
                                                <td className="border">Дек</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/4 text-left border">
                                                    <b>{item.title}</b>
                                                </td>
                                                <td className="border">
                                                    <a className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020">
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        target="_blank"
                                                        data-bind="attr: {href: $parent.link}, tippy:true"
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                        data-tippy=""
                                                        data-original-title="Отчетный период не заполнен<br/>(нажмите для редактирования)"
                                                    >
                                                        <EditCardIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <AddCircleIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6" />
                                                    </a>
                                                </td>

                                                <td className="border">
                                                    <a
                                                        className="flex justify-center" href="/waste-org/9a0e22f4-35cf-4b2b-a51f-729ca9359ba1/accounting?placeId=d1ac0c89-bcfe-4252-b73c-7e0cc68ac088&amp;selectedYear=2020"
                                                    >
                                                        <EditCardIcon className="w-6" />
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
