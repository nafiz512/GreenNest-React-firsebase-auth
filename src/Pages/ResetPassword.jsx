import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { NavLink } from "react-router";

const ResetPassword = () => {
    const { isEmail, resetPassword, notifySuccess, notifyError, setLoading } =
        useContext(AuthContext);
    const [email, setEmail] = useState(isEmail || "");
    const [isSend, setSend] = useState("");

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        setSend("");
        resetPassword(email)
            .then(() => {
                e.target.reset();
                let msge = `A password reset link is send to ${email}`;
                notifySuccess(msge);
                setSend(msge);
                setEmail("");
            })
            .catch((error) => {
                notifyError(error.message);
            });
        setLoading(true);
    };
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)] sm:px-10 md:px-20 lg:px-32 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-lg md:max-w-[960px] py-5 flex-1">
                <h2 className="text-[#18b3a8] tracking-light text-[28px] font-bold leading-tight px-4 text-center  pt-5">
                    Reset Your Password
                </h2>
                <div className="w-[350px] sm:min-w-sm">
                    <form
                        onSubmit={handleResetPassword}
                        className="flex w-full flex-wrap items-end py-3 mx-auto"
                    >
                        <label className="flex flex-col min-w-40 flex-1">
                            Email
                        </label>
                        <input
                            onChange={handleEmailChange}
                            type="email"
                            name="email"
                            required
                            value={email}
                            placeholder="Email"
                            className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111813] 
              focus:outline-none border border-[#dce5df] bg-white h-10   mb-3 mt-1
              placeholder:text-[#63886f] p-[15px] text-base font-normal leading-normal"
                        />

                        <div className="grid justify-end w-full">
                            <button className="btn btn-soft bg-[#059458] font-semibold text-[#f8f7f7] rounded-2xl">
                                <span className="truncate ">
                                    Send Reset Link
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                {isSend && <p className="w-full text-green-600">{isSend}</p>}

                <button className=" btn-success rounded-xl font-semibold btn w-fit mt-15 text-sm text-black cursor-pointer">
                    <NavLink to={-1}>Back to Login</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
