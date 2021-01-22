import React, { useState } from "react";
import CardCompany from "../../components/Cards/CardCompany";

import { ArrowUp as ArrowUpIcon } from "../../Icons";

// {
//     "value": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//     "unrestricted_value": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//     "data": {
//       "kpp": "550701001",
//       "capital": null,
//       "management": {
//         "name": "Карпов Василий Пантелимонович",
//         "post": "И.О. ГЕНЕРАЛЬНОГО ДИРЕКТОРА",
//         "disqualified": null
//       },
//       "founders": null,
//       "managers": null,
//       "predecessors": null,
//       "successors": null,
//       "branch_type": "MAIN",
//       "branch_count": 0,
//       "source": null,
//       "qc": null,
//       "hid": "4cf67f67fb71dacdb2d0d9a4e75d7f089250c882aa29c531cbfffeda9fb62fff",
//       "type": "LEGAL",
//       "state": {
//         "status": "ACTIVE",
//         "code": null,
//         "actuality_date": 1609459200000,
//         "registration_date": 724896000000,
//         "liquidation_date": null
//       },
//       "opf": {
//         "type": "2014",
//         "code": "12247",
//         "full": "Публичное акционерное общество",
//         "short": "ПАО"
//       },
//       "name": {
//         "full_with_opf": "ОТКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО \"ОМСКХЛЕБОПРОДУКТ\"",
//         "short_with_opf": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//         "latin": null,
//         "full": "ОМСКХЛЕБОПРОДУКТ",
//         "short": "ОМСКХЛЕБОПРОДУКТ"
//       },
//       "inn": "5505010874",
//       "ogrn": "1025501166426",
//       "okpo": "00950670",
//       "okato": "52401364000",
//       "oktmo": "52701000001",
//       "okogu": "4210008",
//       "okfs": "16",
//       "okved": "52.10.3",
//       "okveds": null,
//       "authorities": null,
//       "documents": null,
//       "licenses": null,
//       "finance": {
//         "tax_system": null,
//         "income": null,
//         "expense": null,
//         "debt": null,
//         "penalty": null
//       },
//       "address": {
//         "value": "г Омск, ул Бетховена, д 1",
//         "unrestricted_value": "644082, Омская обл, г Омск, Кировский округ, ул Бетховена, д 1",
//         "data": {
//           "postal_code": "644082",
//           "country": "Россия",
//           "country_iso_code": "RU",
//           "federal_district": "Сибирский",
//           "region_fias_id": "05426864-466d-41a3-82c4-11e61cdc98ce",
//           "region_kladr_id": "5500000000000",
//           "region_iso_code": "RU-OMS",
//           "region_with_type": "Омская обл",
//           "region_type": "обл",
//           "region_type_full": "область",
//           "region": "Омская",
//           "area_fias_id": null,
//           "area_kladr_id": null,
//           "area_with_type": null,
//           "area_type": null,
//           "area_type_full": null,
//           "area": null,
//           "city_fias_id": "140e31da-27bf-4519-9ea0-6185d681d44e",
//           "city_kladr_id": "5500000100000",
//           "city_with_type": "г Омск",
//           "city_type": "г",
//           "city_type_full": "город",
//           "city": "Омск",
//           "city_area": null,
//           "city_district_fias_id": null,
//           "city_district_kladr_id": null,
//           "city_district_with_type": "Кировский округ",
//           "city_district_type": "округ",
//           "city_district_type_full": "округ",
//           "city_district": "Кировский",
//           "settlement_fias_id": null,
//           "settlement_kladr_id": null,
//           "settlement_with_type": null,
//           "settlement_type": null,
//           "settlement_type_full": null,
//           "settlement": null,
//           "street_fias_id": "1369709a-05ea-4a8e-b2a6-9d55aa084be9",
//           "street_kladr_id": "55000001000011700",
//           "street_with_type": "ул Бетховена",
//           "street_type": "ул",
//           "street_type_full": "улица",
//           "street": "Бетховена",
//           "house_fias_id": "631c0466-21a5-4548-8be3-ee66ab709f15",
//           "house_kladr_id": "5500000100001170015",
//           "house_type": "д",
//           "house_type_full": "дом",
//           "house": "1",
//           "block_type": null,
//           "block_type_full": null,
//           "block": null,
//           "flat_fias_id": null,
//           "flat_type": null,
//           "flat_type_full": null,
//           "flat": null,
//           "flat_area": null,
//           "square_meter_price": null,
//           "flat_price": null,
//           "postal_box": null,
//           "fias_id": "631c0466-21a5-4548-8be3-ee66ab709f15",
//           "fias_code": "55000001000000001170015",
//           "fias_level": "8",
//           "fias_actuality_state": "0",
//           "kladr_id": "5500000100001170015",
//           "geoname_id": "1496153",
//           "capital_marker": "2",
//           "okato": "52401364000",
//           "oktmo": "52701000001",
//           "tax_office": "5507",
//           "tax_office_legal": "5507",
//           "timezone": "UTC+6",
//           "geo_lat": "54.9296369",
//           "geo_lon": "73.3363751",
//           "beltway_hit": null,
//           "beltway_distance": null,
//           "metro": null,
//           "qc_geo": "0",
//           "qc_complete": null,
//           "qc_house": null,
//           "history_values": null,
//           "unparsed_parts": null,
//           "source": "644082, ОБЛАСТЬ ОМСКАЯ, ГОРОД ОМСК, УЛИЦА БЕТХОВЕНА, 1",
//           "qc": "0"
//         }
//       },
//       "phones": null,
//       "emails": null,
//       "ogrn_date": 1029715200000,
//       "okved_type": "2014",
//       "employee_count": null
//     }
//   }
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
                                                console.log(item.data)
                                                setCompany(item.data);
                                                setShowForm(true);
                                            }}
                                            key={index}
                                            className="cursor-pointer hover:bg-gray-300"
                                        >
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                <div className="text-sm">
                                                    {
                                                        item.data.name
                                                            .full_with_opf
                                                    }
                                                </div>
                                                <div className="text-xl font-medium text-gray">
                                                    {
                                                        item.data.name
                                                            .short_with_opf
                                                    }
                                                </div>
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {item.data.inn}
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {item.data.kpp}
                                            </td>
                                            <td className="border-t border-b border-light-gray-500 px-4 py-2 text-gray-700">
                                                {
                                                    item.data.address
                                                        .unrestricted_value
                                                }
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
                <CardCompany company={company} company={company} setCompany={setCompany}/>
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
