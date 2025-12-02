import React from "react";
// Assuming ourGreen points to the correct local image path (e.g., /src/assets/images/images.jpeg)
import ourGreen from "../assets/images/images.jpeg";
import { NavLink } from "react-router"; // Corrected import: NavLink should come from react-router-dom

const About = () => {
    // Placeholder image URL for the indoor jungle
    const MISSION_IMAGE_URL = "https://picsum.photos/id/152/600/800";

    return (
        <div className=" w-10/12 mx-auto">
            {/* This div is typically the main container/layout wrapper */}
            <div className="  ">
                <div className="layout-content-container flex flex-col  mx-auto flex-1">
                    {/* Header/Hero Section */}
                    <div className="w-full">
                        <div
                            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white/50 dark:bg-neutral-800/50 rounded-xl min-h-[220px] md:min-h-[280px] p-6 md:p-8 shadow-md"
                            // FIX 1: Use `url()` function with the imported image variable
                            style={{
                                backgroundImage: `url(${ourGreen})`,
                            }}
                        >
                            <div className="flex">
                                <p className=" text-white tracking-tight text-4xl md:text-5xl font-extrabold leading-tight">
                                    Our Green Journey
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <section className="my-10">
                        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12 items-center">
                            {/* Mission Image (Left Column) */}
                            <div className="w-full lg:col-span-4 bg-white dark:bg-neutral-900">
                                <div className="w-full gap-1 overflow-hidden bg-white dark:bg-neutral-900 aspect-[4.5/4] rounded-xl flex shadow-xl">
                                    <div
                                        className="w-full  bg-center bg-no-repeat bg-cover aspect-auto rounded-xl flex-1"
                                        // FIX 2: Using the correct placeholder URL variable
                                        style={{
                                            backgroundImage: `url('${MISSION_IMAGE_URL}')`,
                                        }}
                                        aria-label="A bright, inviting room filled with healthy, well-cared-for indoor plants"
                                    ></div>
                                </div>
                            </div>

                            {/* Headline & Body Text (Right Column) */}
                            <div className="lg:col-span-6">
                                <h1 className="text-gray-900  tracking-tight text-3xl md:text-4xl font-bold leading-tight text-left pb-3">
                                    Connecting people with the restorative power
                                    of nature, one plant at a time.
                                </h1>
                                <p className="text-gray-700  text-lg font-normal leading-relaxed pt-1">
                                    Founded from a passion for greenery and a
                                    belief in its calming influence, GreenNest
                                    is more than just a shop. It's a resource
                                    for aspiring and experienced plant parents
                                    alike, dedicated to making the world a
                                    greener, more beautiful place. We started in
                                    a small apartment, nurturing a few
                                    succulents, and have grown into a community
                                    that shares a love for every leaf and stem.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Core Values Section */}
                    <section className="">
                        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Sustainability */}
                            <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-xl flex flex-col items-start shadow-lg transition-transform hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className=" rounded-lg p-3 mb-4">
                                    {/* Icon: Leaf/Spa */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-green-700 dark:text-green-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354c.148-.152.33-.272.533-.356A8.969 8.969 0 0115 3a9 9 0 014.243 1.157l.002.001.001.001c.203.084.385.204.533.356l1.378 1.41a1 1 0 01-.001 1.414L18.414 9.5a1 1 0 01-1.414 0L15 7.414l-1.586 1.586a1 1 0 01-1.414 0L9.5 7.414 7.414 9.5a1 1 0 01-1.414 0L3.001 7.185a1 1 0 01-.001-1.414l1.378-1.41zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10H2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-gray-900  text-xl font-bold">
                                    Sustainability First
                                </h3>
                                <p className="text-gray-700  text-base leading-relaxed mt-2">
                                    We're committed to eco-friendly sourcing,
                                    recyclable packaging, and practices that
                                    protect our planet for future generations.
                                </p>
                            </div>

                            {/* Card 2: Expert Care */}
                            <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-xl flex flex-col items-start shadow-lg transition-transform hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className=" rounded-lg p-3 mb-4">
                                    {/* Icon: Recycling/Care */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-green-700 dark:text-green-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.91 8.91 0 0120 12a9 9 0 11-8.59-8.59M16 13a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-gray-900  text-xl font-bold">
                                    Expert Care
                                </h3>
                                <p className="text-gray-700  text-base leading-relaxed mt-2">
                                    Our team provides unparalleled knowledge and
                                    support, ensuring you have everything you
                                    need for your plants to flourish.
                                </p>
                            </div>

                            {/* Card 3: Community */}
                            <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-xl flex flex-col items-start shadow-lg transition-transform hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className=" rounded-lg p-3 mb-4">
                                    {/* Icon: Groups/Community */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-green-700 dark:text-green-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.46-1.61M12 12V6a3 3 0 00-5.83-1.61M8 12a3 3 0 100-6 3 3 0 000 6zm9 3a3 3 0 100-6 3 3 0 000 6zM4 18a2 2 0 100-4 2 2 0 000 4z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-gray-900  text-xl font-bold">
                                    Thriving Community
                                </h3>
                                <p className="text-gray-700  text-base leading-relaxed mt-2">
                                    Join a growing network of plant lovers. We
                                    foster connections through workshops,
                                    events, and a shared passion for greenery.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="my-10">
                        <div className="bg-green-700/10 dark:bg-green-900/20 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800  mb-4 md:mb-0">
                                Ready to Nurture Your Nest?
                            </h2>
                            <NavLink to={"/plants"}>
                                <button className="btn btn-primary bg-green-600 hover:bg-green-700 border-none text-white shadow-lg">
                                    Explore Our Plants
                                </button>
                            </NavLink>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
