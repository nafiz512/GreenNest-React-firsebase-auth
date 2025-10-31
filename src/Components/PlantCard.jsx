import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const PlantCard = ({ plant }) => {
    return (
        <div className="rounded-t-lg hover:scale-105 flex flex-col  bg-white shadow-md hover:shadow-lg transition-transform duration-300 ">
            {/* Image */}
            <div className=" h-72 flex items-center justify-center">
                <img
                    loading="lazy"
                    src={plant.image}
                    alt={plant.plantName}
                    className="h-full rounded-lg w-full object-cover "
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-2 p-4 ">
                <h3 className="text-lg  text-gray-600 mb-1">
                    {plant.plantName}
                </h3>
                <h3>${plant.price.toFixed(2)}</h3>
                {/* Rating */}
                <div className="flex gap-1 items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => {
                        const fillPercent =
                            Math.min(Math.max(plant.rating - i, 0), 1) * 100;
                        return (
                            <div key={i} className="relative w-4 h-4">
                                <FaStar
                                    className="absolute top-0 left-0 text-gray-300"
                                    size={16}
                                />

                                <div
                                    className="absolute top-0 left-0 overflow-hidden"
                                    style={{ width: `${fillPercent}%` }}
                                >
                                    <FaStar className="black" size={16} />
                                </div>
                            </div>
                        );
                    })}
                    <h2 className="ml-1 text-sm font-bold text-gray-600">
                        ({plant.rating.toFixed(1)})
                    </h2>
                </div>

                {/* Button */}
                <NavLink to={`/plant-details/${plant.plantId}`}>
                    <button className="mt-auto w-full rounded-xl btn btn-success text-white font-semibold text-sm py-2 px-4 transition-colors">
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default PlantCard;
