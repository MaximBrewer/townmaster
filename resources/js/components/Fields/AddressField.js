import React, { useEffect, useState, useRef } from "react";
import { ArrowUpIcon } from "../../Icons";
import client from "../../api/client";

export default function AddressField({ address, setAddress }) {
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.addEventListener("click", handleClickOutside);
        };
    }, []);

    const addressEll = useRef(null);

    const handleClickOutside = event => {
        if (addressEll) {
            if (addressEll.current) {
                if (!addressEll.current.contains(event.target)) {
                    setAdresses([]);
                }
            }
        }
    };

    const [open, setOpen] = useState(false);
    const [adresses, setAdresses] = useState([]);

    const handleValueChange = e => {
        let value = e.target.value;
        if (value.length > 3) getAddresses(value);
        setAddress(prevState => ({ ...prevState, value: value }));
    };

    const handleOkatoChange = e => {
        let value = e.target.value;
        setAddress(prevState => ({ ...prevState, okato: value }));
    };

    const handleOktmoChange = e => {
        let value = e.target.value;
        setAddress(prevState => ({ ...prevState, oktmo: value }));
    };

    const handlePostalCodeChange = e => {
        let value = e.target.value;
        setAddress(prevState => ({ ...prevState, postal_code: value }));
    };

    const getAddresses = q => {
        client("/api/addresses/search", {
            body: { q: q }
        }).then(({ addresses }) => {
            setAdresses(addresses);
        });
    };

    return (
        <div
            className={`flex-flex-col ${
                open ? `border-l-2 border-green-500 pl-2` : ``
            }`}
        >
            <div
                className={`border relative rounded-md py-3 px-4 mb-2 ${
                    address.error ? "border-red-500" : ""
                }`}
            >
                <div className="md-input-box relative">
                    <input
                        type="text"
                        className={`md-input bg-transparent`}
                        placeholder=" "
                        onChange={handleValueChange}
                        value={address.value}
                    />
                    <label htmlFor="address" className="md-label bg-white px-1">
                        Адрес
                    </label>
                </div>
                {adresses.length ? (
                    <div className="-mx-px">
                        <div className="-mx-4 relative">
                            <ul
                                ref={addressEll}
                                className={`w-full left-0 ${
                                    open ? `mt-2` : `mt-10`
                                } border-l border-r border-b border-gray-200 rounded-b absolute z-30 shadow-sm bg-white`}
                            >
                                {adresses.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setAddress(item), setAdresses([]);
                                        }}
                                        className="border-b border-gray-200 py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    ``
                )}
                {open ? (
                    ``
                ) : address.okato || address.oktmo || address.postal_code ? (
                    <div className="text-xs sm:text-sm mt-2 text-gray-400 flex">
                        {address.okato ? (
                            <span className="mr-2 mb-2">
                                ОКАТО{" "}
                                <span
                                    className="text border-dotted border-b text-green-600 border-green-500 cursor-pointer"
                                    onClick={() => setOpen(true)}
                                >
                                    {address.okato}
                                </span>
                            </span>
                        ) : (
                            ``
                        )}
                        {address.oktmo ? (
                            <span className="mr-2 mb-2">
                                ОКТМО{" "}
                                <span
                                    className="text border-dotted border-b text-green-600 border-green-500 cursor-pointer"
                                    onClick={() => setOpen(true)}
                                >
                                    {address.oktmo}
                                </span>
                            </span>
                        ) : (
                            ``
                        )}
                        {address.postal_code ? (
                            <span className="mr-2 mb-2">
                                Почтовый индекс{" "}
                                <span
                                    className="text border-dotted border-b text-green-600 border-green-500 cursor-pointer"
                                    onClick={() => setOpen(true)}
                                >
                                    {address.postal_code}
                                </span>
                            </span>
                        ) : (
                            ``
                        )}
                    </div>
                ) : (
                    ``
                )}
            </div>
            {open ? (
                <>
                    <div className="md-input-main w-full my-2">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                    title.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                onChange={handleOkatoChange}
                                value={address.okato}
                            />
                            <label
                                htmlFor="title"
                                className="md-label bg-white left-4 px-1"
                            >
                                ОКАТО
                            </label>
                        </div>
                    </div>
                    <div className="md-input-main w-full my-2">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                    title.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                onChange={handleOktmoChange}
                                value={address.oktmo}
                            />
                            <label
                                htmlFor="title"
                                className="md-label bg-white left-4 px-1"
                            >
                                ОКАТО
                            </label>
                        </div>
                    </div>
                    <div className="mt-2 flex">
                        <div className="md-input-main w-full">
                            <div className={`md-input-box`}>
                                <input
                                    type="text"
                                    className={`md-input bg-transparent py-3 px-4 border rounded-md ${
                                        title.error ? "border-red-500" : ""
                                    }`}
                                    placeholder=" "
                                    onChange={handlePostalCodeChange}
                                    value={address.postal_code}
                                />
                                <label
                                    htmlFor="title"
                                    className="md-label bg-white left-4 px-1"
                                >
                                    ОКАТО
                                </label>
                            </div>
                        </div>
                        <button
                            className="ml-4 bg-transparent py-3 px-4 border rounded-md"
                            type="button"
                            onClick={() => setOpen(false)}
                        >
                            <ArrowUpIcon className="w-6 text-green-600 fill-current" />
                        </button>
                    </div>
                </>
            ) : (
                ``
            )}
        </div>
    );
}
