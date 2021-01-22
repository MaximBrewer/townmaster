import React from "react";
import { Link } from "react-router-dom";

// components
import { useAuth } from "../../context/auth";

export default function CardProfile() {
  let { setCurrentUser, setToken, currentUser } = useAuth();
    return (
        <>
            {currentUser && !currentUser.companies.length ? (
                <div className="text-blue-500 px-6 py-4 border-2 rounded relative mb-4 border-blue-500">
                    <strong>FREE</strong>
                    <p>
                        Сейчас смена тарифа доступна только через отправку
                        заявки. После отправки заявки с Вами свяжется наш
                        специалист. Подробную информация об тарифах Вы можете
                        прочитать на нашем сайте.
                        <Link
                            className="local text-yellow-700"
                            to="/personal/company-add"
                        >
                            "Перейти на страницу"
                        </Link>{" "}
                    </p>
                </div>
            ) : (
                ``
            )}
        </>
    );
}
