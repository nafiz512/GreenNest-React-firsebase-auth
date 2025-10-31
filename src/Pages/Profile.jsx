import React, { use, useState } from "react";
import avater from "../assets/images/avater.png";
import { AuthContext } from "../AuthContext/AuthContext";

const Profile = () => {
    const { user, updateUserProfile, setLoading, notifySuccess, notifyError } =
        use(AuthContext);
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value || user.displayName;
        const photoUrl = e.target.url.value || user.photoURL;
        if (name === user.displayName && photoUrl === user.photoURL) return;

        updateUserProfile(user, { displayName: name, photoURL: photoUrl })
            .then(() => {
                notifySuccess("Profile update uccessfully");
                setLoading(false);
            })
            .catch((er) => {
                notifyError(er.message);
            });
    };

    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)] flex justify-center items-center">
            <div className="card my-20 bg-white shadow-green-900 shadow-2xl w-[350px] sm:min-w-sm">
                <div className="w-full flex items-center card-body text-center py-10">
                    <img
                        src={user?.photoURL || avater}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = avater;
                        }}
                        alt="Profile avatar"
                        className="w-34 h-34 border-2 border-secondary p-0.5 rounded-full object-cover mb-4"
                    />

                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {user.displayName || "Name not found"}
                    </h2>

                    <p className="text-green-600 text-sm sm:text-base mt-1">
                        {user.email || "Email not found"}
                    </p>
                    {!isUpdate && (
                        <button
                            onClick={() => setIsUpdate(!isUpdate)}
                            className="btn bg-green-300 hover:bg-gray-200 text-gray-700 mt-5 rounded-lg px-6 py-2 border border-gray-200"
                        >
                            Update Profile
                        </button>
                    )}
                    {isUpdate && (
                        <div className="w-80">
                            <form
                                onSubmit={handleUpdate}
                                className="flex flex-col gap-2"
                            >
                                <label className="label text-left">
                                    <span className="text-sm font-medium">
                                        Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your Full name"
                                    className="input  input-bordered w-full rounded-lg focus:outline-none focus:border-[#17cf54]"
                                />
                                <label className="label text-left">
                                    <span className="text-sm font-medium">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    name="url"
                                    type="text"
                                    placeholder="Enter your Photo URL"
                                    className="input  input-bordered w-full rounded-lg focus:outline-none focus:border-[#17cf54]"
                                />
                                <button className="btn bg-green-300 hover:bg-gray-200 text-gray-700 mt-5 rounded-lg px-6 py-2 border border-gray-200">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
