import React from "react";
import { Link } from "react-router-dom";

export default function Companies() {
    return (
        <div className="flex flex-wrap flex-col">
            <div className="empty-list mb-5">По вашему запросу ничего не нашлось</div>
            <Link to="/personal/company-add"className="text-gray-600 font-medium">Добавьте первую организацию</Link>
        </div>
    );
}
