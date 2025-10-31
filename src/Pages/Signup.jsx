import React, { use, useState } from "react";
import { IoHandLeft } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const {
        signUpUser,
        updateUserProfile,
        notifySuccess,
        notifyError,
        setLoading,
        googleSignIn,
    } = use(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const isUpperCase = /[A-Z]/;
        const isLowerCase = /[a-z]/;
        const isLength = /^.{6,}$/;

        const name = e.target.name.value;
        const photoUrl = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError(null);
        if (!isUpperCase.test(password)) {
            setError("Must have an Uppercase letter in the password");
            notifyError("Must have an Uppercase letter in the password");
            return;
        } else if (!isLowerCase.test(password)) {
            setError("Must have a Lowercase letter in the password");
            notifyError("Must have a Lowercase letter in the password");
            return;
        } else if (!isLength.test(password)) {
            setError("Length must be at least 6 character ");
            notifyError("Length must be at least 6 character ");
            return;
        }
        signUpUser(email, password)
            .then((res) => {
                updateUserProfile(res.user, {
                    displayName: name,
                    photoURL: photoUrl,
                }).catch((error) => {
                    notifyError(error.message);
                });
                e.target.reset();
                navigate("/");
                notifySuccess("Sign-up successful");
            })
            .catch((error) => {
                notifyError(error.messagae || "Email already exist");
                setError(error.messagae || "Email already exist");
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
                navigate("/");
                setLoading(false);
            })
            .catch((error) => {
                notifyError(error.message);
                setError(error.message);
            });
    };
    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)] pb-15 pt-5 ">
            <div className=" flex flex-col mx-auto  items-center  mt-4">
                <h2 className="text-4xl text-center w-full font-semibold mb-8">
                    Create Your
                    <span className="text-green-600"> GreenNest</span> Account
                </h2>
                {/* signup Form */}
                <div className="card bg-white shadow-green-900 shadow-2xl w-[350px] sm:min-w-sm">
                    <div className="w-full card-body text-center">
                        <form
                            onSubmit={handleSignUp}
                            className="flex flex-col gap-1"
                        >
                            <label className="label text-left">
                                <span className="text-sm font-medium">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your Full name"
                                className="input  input-bordered placeholder:text-gray-500 w-full rounded-lg focus:outline-none focus:border-[#17cf54]"
                            />

                            <label className="label text-left">
                                <span className="text-sm font-medium">
                                    Photo URL
                                </span>
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                placeholder="Enter your Photo URL"
                                className="input  input-bordered w-full placeholder:text-gray-500 rounded-lg focus:outline-none focus:border-[#17cf54]"
                            />

                            <label className="label text-left">
                                <span className="text-sm font-medium">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="input placeholder:text-gray-500 input-bordered w-full rounded-lg focus:outline-none focus:border-[#17cf54]"
                            />

                            <label className="label  mt-1">
                                <span className="text-sm text-left font-medium">
                                    Password
                                </span>
                            </label>
                            <div className="relative w-full">
                                {/* Input */}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full placeholder:text-gray-500 rounded-lg pr-10 focus:outline-none focus:border-[#17cf54]"
                                />

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

                            <button className="btn mt-2 bg-green-500 hover:bg-green-600 text-white w-full rounded-lg font-semibold">
                                Register
                            </button>
                        </form>
                        <div>
                            {error && <p className="text-red-400">{error}</p>}
                        </div>

                        <div className=" text-gray-500 text-sm my-1">
                            Or continue with
                        </div>

                        <button
                            onClick={handleGoogleSignIn}
                            className="btn bg-white w-full text-black rounded-lg border-[#e5e5e5]"
                        >
                            <svg
                                aria-label="Google logo"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path
                                        fill="#34a853"
                                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                    ></path>
                                    <path
                                        fill="#4285f4"
                                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                    ></path>
                                    <path
                                        fill="#fbbc02"
                                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                    ></path>
                                    <path
                                        fill="#ea4335"
                                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                    ></path>
                                </g>
                            </svg>
                            Login with Google
                        </button>

                        <p className="text-sm text-gray-500 my-2">
                            Already have an account?
                            <NavLink
                                to={"/login"}
                                className="text-green-600 hover:underline"
                            >
                                Log in here
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
