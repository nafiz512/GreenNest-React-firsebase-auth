import React, { use } from "react";
import { NavLink } from "react-router";
import avater from "../assets/images/avater.png";
import { AuthContext } from "../AuthContext/AuthContext";

import toast, { Toaster } from "react-hot-toast";
import { PiSignOutBold } from "react-icons/pi";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                notifySuccess("Sign-out Successful");
            })
            .catch(() => {
                notifyError("Sign-out Unsuccessful");
            });
    };

    const links = (
        <>
            <li className="text-[#1a251e] font-medium ">
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-[#1a251e] font-medium ">
                <NavLink to={"/plants"}>Plants</NavLink>
            </li>
            <li className="text-[#1a251e] font-medium ">
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="text-[#1a251e] font-medium ">
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            {user && (
                <li className="text-[#1a251e] font-medium ">
                    <NavLink to={"/profile"}>My Profile</NavLink>
                </li>
            )}
        </>
    );
    return (
        <div>
            <div className=" p-0 sm:px-[8.5%] navbar bg-accent shadow ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52  shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink
                        to={"/"}
                        className="text-green-600 font-bold text-xl"
                    >
                        GreenNest
                    </NavLink>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu hidden lg:flex sm:flex-row menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user ? (
                        <div className="space-x-2 flex">
                            <NavLink to={"/login"}>
                                <button className="btn border-gray-600 text-white  rounded-3xl bg-[#4d9e75]">
                                    Log in
                                </button>
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <div className="dropdown dropdown-start">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="flex justify-center gap-3 items-center m-1"
                                >
                                    <img
                                        className="size-12  border-2 border-secondary rounded-full cursor-pointer"
                                        src={user?.photoURL || avater}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = avater;
                                        }}
                                        alt="profile avater"
                                    />
                                    <PiSignOutBold size={24}></PiSignOutBold>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="dropdown-content menu bg-secondary z-50 rounded-box -ml-10 w-34 md:w-40 p-2 shadow-sm"
                                >
                                    <p className="text-lg md:text-xl font-semibold text-white">
                                        {user.displayName}
                                    </p>
                                    <li
                                        onClick={handleSignOut}
                                        className="text-white bg-gray-accent"
                                    >
                                        <a>Sign-Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
