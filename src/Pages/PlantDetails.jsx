import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const PlantDetails = () => {
    const { notifySuccess } = useContext(AuthContext);
    const { id } = useParams();
    const plants = useLoaderData();
    const plant = plants.find((plant) => plant.plantId == id) || {};

    const handleBookNow = (e) => {
        e.preventDefault();
        notifySuccess(`${plantName} is booked Successfully!`);
        e.target.reset();
    };
    const {
        providerName,
        category,
        plantName,
        rating,
        price,
        availableStock,
        image,
        description,
        careLevel,
    } = plant;
    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)] flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Breadcrumb */}
                <div className="flex flex-wrap gap-2 p-4">
                    <a className="text-[#63886f] text-base font-medium leading-normal">
                        Shop
                    </a>
                    <p className="text-[#63886f] text-base font-medium leading-normal">
                        /
                    </p>
                    <p className="text-[#111813] text-base font-medium leading-normal">
                        {providerName}
                    </p>
                </div>

                {/* Product Card */}

                <div className="flex flex-col justify-start rounded-xl lg:flex-row lg:items-start gap-4">
                    <div className="w-full md:w-7/12 h-[400px] ">
                        <img
                            src={image}
                            alt=""
                            className=" w-full h-full rounded-xl"
                        />
                    </div>

                    <div className=" flex  min-w-80 grow flex-col justify-center gap-5 py-4 xl:px-4">
                        <p className="text-[#111813] text-lg font-bold leading-tight tracking-[-0.015em]">
                            Plant Name: <span>{plantName}</span>
                        </p>

                        <div className="flex items-end gap-5 justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-[#63886f] text-base font-normal leading-normal">
                                    Category:
                                    <span className="text-gray-700">
                                        {category}
                                    </span>
                                </p>
                                <p className="text-[#63886f] text-base font-normal leading-normal">
                                    Care Level:
                                    <span className="text-gray-700">
                                        {careLevel}
                                    </span>
                                </p>
                                <p className="text-[#63886f] text-base font-normal leading-normal">
                                    Rating:
                                    <span className="text-gray-700">
                                        {rating}
                                    </span>
                                </p>
                            </div>

                            <button className="flex min-w-[84px] items-center justify-center rounded-xl h-8 px-4 bg-[#17cf54] text-[#111813] text-sm font-medium leading-normal">
                                ${price}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="px-4">
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="text-[#265b37] text-base font-normal leading-normal pb-3 pt-1">
                        {description}
                    </p>
                </div>

                {/* Details Section */}
                <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce5df] py-5">
                        <p className="text-[#63886f] text-sm font-normal leading-normal">
                            Available Stock
                        </p>
                        <p className="text-[#111813] text-sm font-normal leading-normal">
                            {availableStock
                                ? `In Stock (${availableStock})`
                                : "Stock Out"}
                        </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce5df] py-5">
                        <p className="text-[#63886f] text-sm font-normal leading-normal">
                            Provider
                        </p>
                        <p className="text-[#111813] text-sm font-normal leading-normal">
                            {providerName}
                        </p>
                    </div>
                </div>

                {/* Booking Section */}
                <h2 className="text-[#111813] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Book a Consultation
                </h2>

                <form
                    onSubmit={handleBookNow}
                    className="max-w-[480px] gap-4 px-4 py-3"
                >
                    {/* Name Field */}
                    <label className="flex flex-col min-w-40 flex-1">
                        Name
                    </label>
                    <input
                        required
                        placeholder="Your Name"
                        name="name"
                        className="flex w-full rounded-xl border border-[#dce5df] bg-white h-14 p-[15px] text-base text-[#111813] placeholder:text-[#63886f] focus:outline-none focus:border-[#17cf54]"
                    />
                    {/* email  */}
                    <label>Email</label>

                    <input
                        required
                        name="email"
                        placeholder="Your Email"
                        className="flex w-full rounded-xl border border-[#dce5df] bg-white h-14 p-[15px] text-base text-[#111813] placeholder:text-[#63886f] focus:outline-none focus:border-[#17cf54]"
                    />

                    <div className="flex justify-end">
                        <button className="btn bg-green-600 text-gray-50 rounded-2xl mt-5 font-semibold">
                            Book Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlantDetails;
