import React from "react";
import map from "../assets/images/map.jpeg";
const Contact = () => {
    return (
        <div>
            <div>
                <div className="mx-auto w-10/12   ">
                    <div className="layout-content-container flex flex-col mx-auto flex-1">
                        {/* Header/Hero Section */}
                        <div className="text-center mb-5">
                            {/* Subtle plant icon for visual interest */}

                            <h1 className="text-gray-900  tracking-tight text-4xl md:text-5xl font-extrabold leading-tight">
                                Get in Touch
                            </h1>
                            <p className="text-green-600 dark:text-green-400 text-lg mt-2">
                                We're here to help your garden grow.
                            </p>
                        </div>

                        {/* Main Content: Two-Column Layout (Form & Info) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                            {/* Left Column: Contact Form */}
                            <div className="lg:order-1 order-2">
                                <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-2xl border border-green-500/10">
                                    <h2 className="text-2xl font-semibold  mb-6">
                                        Send Us a Message
                                    </h2>
                                    <form className="space-y-4">
                                        {/* Name Input */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-700 dark:text-gray-300">
                                                    Full Name
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Full name"
                                                className="input input-bordered w-full input-md bg-gray-50 dark:bg-neutral-700 border-green-300/50 dark:border-green-600/30"
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-700 dark:text-gray-300">
                                                    Email
                                                </span>
                                            </label>

                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="input input-bordered w-full input-md bg-gray-50 dark:bg-neutral-700 border-green-300/50 dark:border-green-600/30"
                                                required
                                            />
                                        </div>

                                        {/* Subject Dropdown */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-700 dark:text-gray-300">
                                                    Subject
                                                </span>
                                            </label>
                                            <select className="select select-bordered w-full select-md bg-gray-50 dark:bg-neutral-700 border-green-300/50 dark:border-green-600/30">
                                                <option disabled selected>
                                                    Select a subject...
                                                </option>
                                                <option>Order Inquiry</option>
                                                <option>
                                                    Plant Care Question
                                                </option>
                                                <option>
                                                    Expert Consultation Booking
                                                </option>
                                                <option>
                                                    General Feedback
                                                </option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-700 dark:text-gray-300">
                                                    Message
                                                </span>
                                            </label>
                                            <br />
                                            <textarea
                                                className="textarea textarea-bordered h-24 bg-gray-50 dark:bg-neutral-700 border-green-300/50 dark:border-green-600/30"
                                                placeholder="Your detailed message..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button (Green Gradient) */}
                                        <button
                                            type="submit"
                                            className="btn btn-block btn-success bg-green-600 hover:bg-green-700 border-none text-white mt-6 shadow-md shadow-green-500/30 transition-all duration-200"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Right Column: Contact Info & Map */}
                            <div className="lg:order-2 order-1 ">
                                {/* Contact Information */}
                                <div className="p-4 rounded-xl bg-green-50/50 dark:bg-green-900/10 border border-green-500/20 shadow-lg">
                                    <h2 className="text-2xl font-semibold  mb-4">
                                        Our Nest
                                    </h2>
                                    <ul className="space-y-3 ">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined mr-3 text-green-600">
                                                location_on
                                            </span>
                                            <div>
                                                <strong className="block ">
                                                    Address:
                                                </strong>
                                                123 Green Leaf Lane, Botanical
                                                City, 90210
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined mr-3 text-green-600">
                                                email
                                            </span>
                                            <div>
                                                <strong className="block ">
                                                    Email:
                                                </strong>
                                                support@greennest.com
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined mr-3 text-green-600">
                                                phone
                                            </span>
                                            <div>
                                                <strong className="block ">
                                                    Phone:
                                                </strong>
                                                (555) 555-GREEN
                                            </div>
                                        </li>
                                    </ul>

                                    <h3 className="text-xl font-semibold  mt-6 mb-2">
                                        Operating Hours:
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Mon - Fri: 9:00 AM – 6:00 PM
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Sat: 10:00 AM – 4:00 PM
                                    </p>
                                </div>

                                {/* Location Map Placeholder */}
                                <div className=" rounded-xl min-h-[250px] flex items-center justify-center ">
                                    <img
                                        src={map}
                                        alt=""
                                        className="w-full rounded-2xl h-40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
