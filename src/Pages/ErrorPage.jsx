import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)]">
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-5xl font-bold text-green-700 mb-4">404</h1>
                <p className="text-gray-600 mb-6">Oops! Page not found.</p>
                <NavLink
                    to={"/"}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition-all"
                >
                    Go Home
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;
