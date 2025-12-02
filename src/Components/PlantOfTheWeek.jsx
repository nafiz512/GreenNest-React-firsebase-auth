import React from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

function getTopRating(plants) {
    let maxRating = 0;
    plants.forEach((plant) => {
        const rating = parseFloat(plant.rating);
        maxRating = Math.max(maxRating, rating);
    });
    return maxRating;
}

export default function PlantOfTheWeek({ plants }) {
    const navigate = useNavigate();

    // Get top-rated plants
    const topRated = getTopRating(plants);
    const chosen = plants.filter(
        (plant) => parseFloat(plant.rating) === topRated
    );

    if (!chosen || chosen.length === 0) {
        return null;
    }

    const handleBook = (plantId) => {
        navigate(`/plant-details/${plantId}`, {
            state: { openBooking: true },
        });
    };

    return (
        <section className="w-full mx-auto ">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111813] mb-4 ">
                Plant of the Week
            </h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="rounded-2xl shadow-xl"
            >
                {chosen.map((plant) => (
                    <SwiperSlide key={plant.plantId}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-0 md:gap-6">
                            {/* Image */}
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src={plant.image}
                                    alt={plant.plantName}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src =
                                            "/placeholder-plant.png";
                                    }}
                                />
                                <div className="absolute left-4 bottom-4 bg-white/75 backdrop-blur-sm rounded-lg px-3 py-2">
                                    <span className="text-sm text-gray-800 font-medium">
                                        Featured
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-extrabold text-[#0f2a1f]">
                                                {plant.plantName}
                                            </h3>
                                            <p className="text-sm text-[#63886f] mt-1">
                                                {plant.category ||
                                                    "Indoor Plant"}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-[#111813]">
                                                ${plant.price}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                stock:{" "}
                                                {plant.availableStock ?? "N/A"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center text-amber-500 gap-1">
                                        {Array(Math.round(plant.rating))
                                            .fill()
                                            .map((_, i) => (
                                                <FaStar key={i}></FaStar>
                                            ))}
                                        <p className="text-black">
                                            ({plant.rating})
                                        </p>
                                    </div>

                                    <p className="mt-4 text-sm text-gray-700 line-clamp-4">
                                        {plant.description}
                                    </p>

                                    <div className="mt-4 text-xs text-gray-500 space-y-1">
                                        <p>
                                            Care:{" "}
                                            <span className="text-gray-700">
                                                {plant.careLevel || "Moderate"}
                                            </span>
                                        </p>
                                        <p>
                                            Provider:{" "}
                                            <span className="text-gray-700">
                                                {plant.providerName ||
                                                    "GreenNest"}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-6 flex gap-3 flex-col sm:flex-row">
                                    <button
                                        onClick={() =>
                                            handleBook(plant.plantId)
                                        }
                                        className="w-full sm:w-auto flex-1 bg-[#17cf54] hover:bg-[#13b348] text-[#111813] font-semibold rounded-xl py-3 px-5 transition"
                                    >
                                        Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
