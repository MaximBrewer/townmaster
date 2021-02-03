import React, { useState } from "react";
import CardCompany from "../../components/Cards/CardCompany";

import { ArrowUp as ArrowUpIcon } from "../../Icons";

export default function CompanyAdd({
    searchResult,
    setSearchResult,
    company,
    setCompany
}) {

    const [showFrom, setShowForm] = useState(false);

    const openClearForm = () => {
        setSearchResult({
            query: "",
            search: false,
            items: []
        });
        setCompany(null);
        setShowForm(true);
    };

    return (
        <div className="flex flex-wrap flex-col mt-4 w-full">
            {searchResult.search ? (
                <React.Fragment>
                    {searchResult.items.length ? (
                        <div className="overflow-hidden">
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th className="text-left w-1/2 px-4 py-2 text-gray-700">
                                            Название
                                        </th>
                                        <th className="text-left px-4 py-2 text-gray-700">
                                            ИНН
                                        </th>
                                        <th className="text-left px-4 py-2 text-gray-700">
                                            КПП
                                        </th>
                                        <th className="text-left px-4 py-2 text-gray-700">
                                            Адрес
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResult.items.map((item, index) => (
                                        <tr
                                            onClick={() => {
                                                setSearchResult({
                                                    query: "",
                                                    search: false,
                                                    items: []
                                                });
                                                setCompany(item);
                                                setShowForm(true);
                                            }}
                                            key={index}
                                            className="cursor-pointer hover:bg-gray-100"
                                        >
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                <div className="text-sm">
                                                    {item.fulltitle}
                                                </div>
                                                <div className="text-xl font-medium text-gray">
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {item.inn}
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {item.kpp}
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {item.address}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="py-8 text-lg">
                            По вашему запросу ничего не нашлось.
                        </div>
                    )}
                    <hr />
                    <div className="py-6">
                        <div className="text-gray-700 mb-4">
                            <strong>Не нашли что искали?</strong>
                            <br />
                            Вы можете внесите данные вручную.
                        </div>
                        <button
                            className="h-12 font-lg px-5 rounded-md text-blue-500 transition-colors duration-150 border-2 border-blue-400 focus:shadow-outline hover:bg-blue-400 hover:text-white"
                            onClick={openClearForm}
                        >
                            заполнить вручную
                        </button>
                    </div>
                </React.Fragment>
            ) : showFrom ? (
                <CardCompany
                    company={company}
                    company={company}
                    setCompany={setCompany}
                />
            ) : (
                <div className="flex">
                    <div className="mr-4 w-16">
                        <ArrowUpIcon />
                    </div>
                    <h2 className="uppercase pt-2 max-w-4xl">
                        Чтобы начать вести учет отходов и работать в сервисе,
                        начните вводить название организации, инн, кпп или огрн,
                        мы попробуем найти ее в нашем каталоге.
                    </h2>
                </div>
            )}
        </div>
    );
}
