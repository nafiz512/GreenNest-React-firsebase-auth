import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {
        signInUser,
        notifySuccess,
        notifyError,
        googleSignIn,
        updateUserProfile,
        setLoading,
        setEmail,
    } = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        setError("");
        signInUser(email, password)
            .then(() => {
                e.target.reset();
                navigate(location.state || "/");
                notifySuccess("Log in Successful");
            })
            .catch(() => {
                setError("Invalid Username or Password");
                notifyError("Invalid Username or Password");
            });
        setLoading(false);
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                notifySuccess("Log in Successful");
                updateUserProfile(res.user, {
                    photoURL: res.user.photoURL,
                }).catch((error) => {
                    notifyError(error.message);
                });
                setLoading(true);
                navigate(location.state || "/");

                setTimeout(() => {
                    navigate(location.state || "/");
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                notifyError(error.message);
                setError(error.message);
            });
    };
    const handleOnEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    return (
        <div className="w-full">
            {/* Image Banner */}
            <div className=" h-[600px] flex flex-col items-center justify-center bg-[url('/loginbanner.jpeg')] bg-cover bg-no-repeat">
                <h2 className="text-3xl text-green-700 md:text-4xl text-center w-full font-semibold mb-10">
                    Welcome Back to
                    <span className="text-[#000902] mx-2"> GreenNest </span>
                </h2>

                {/* Login Form */}
                <div className="card relative bg-[#dff8d096] shadow-green-900 shadow-2xl w-[350px] sm:min-w-sm">
                    <div className="w-full card-body text-center">
                        <p className="absolute -top-3 -left-5 font-semibold text-2xl">
                            Log-in
                        </p>
                        <form
                            onSubmit={handleLogin}
                            className="flex flex-col gap-2"
                        >
                            {/* Email */}

                            <label className="label text-left">
                                <span className="text-lg  text-gray-600 font-medium">
                                    Email
                                </span>
                            </label>
                            <input
                                onChange={handleOnEmailChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input bg-[#e8fbc8b4] input-bordered placeholder:text-gray-500 w-full rounded-lg focus:outline-none focus:border-[#17cf54]"
                            />
                            {/* Label Password*/}
                            <label className="label">
                                <span className="text-lg text-gray-600 font-medium">
                                    Password
                                </span>
                            </label>
                            <div className="relative w-full">
                                {/* Input */}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input bg-[#e8fbc8b4] input-bordered placeholder:text-gray-500 w-full rounded-lg pr-10 focus:outline-none focus:border-lime-200"
                                />

                                {/* Eye Icon */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-2 top-[50%] -translate-y-1/2 text-gray-500 hover:text-[#17cf54]"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} strokeWidth={1.8} />
                                    ) : (
                                        <Eye size={20} strokeWidth={1.8} />
                                    )}
                                </button>
                            </div>

                            {/* Forgot password */}
                            <div className="text-left">
                                <NavLink
                                    to={"/reset-password"}
                                    className="text-[16px]  text-[#0407d9] hover:underline"
                                >
                                    Forgot Password ?
                                </NavLink>
                            </div>
                            <div>
                                {error && (
                                    <p className="text-red-400">{error}</p>
                                )}
                            </div>
                            {/* Login Button */}
                            <button className="btn bg-[#a2ee89b4] hover:bg-green-200 text-black w-full rounded-lg font-semibold">
                                Login
                            </button>
                        </form>

                        {/* Divider */}
                        <div className=" text-[#171912] text-[16px] text-sm my-1">
                            Or continue with
                        </div>

                        {/* Google */}
                        <button
                            onClick={() => handleGoogleSignIn()}
                            className="btn bg-[#e5e5e5ad] w-full text-black rounded-lg border-[#e5e5e5]"
                        >
                            <FcGoogle size={20}></FcGoogle>
                            <span> Login with Google</span>
                        </button>

                        {/* Sign up link */}
                        <p className=" text-[#0f1111] text-[16px] text-sm my-1">
                            Don’t have an account?
                            <NavLink
                                to={"/signup"}
                                className="text-blue-900 font-semibold ml-1 hover:underline"
                            >
                                Sign up here
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
