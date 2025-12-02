import React from "react";
import tips1 from "../assets/images/tips1.png";
import tips2 from "../assets/images/tips2.png";
import tips3 from "../assets/images/tips3.png";

const PlantCareTips = () => {
    const tips = [
        {
            title: "Watering",
            description: "Keep soil moist but not soggy.",
            image: tips1,
        },
        {
            title: "Sunlight",
            description: "Provide bright, indirect light.",
            image: tips2,
        },
        {
            title: "Fertilizing",
            description: "Feed with a balanced fertilizer.",
            image: tips3,
        },
    ];

    return (
        <div className="">
            <h2 className=" pb-6 font-bold text-2xl">Plant Care Tips</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
                {tips.map((tip, index) => (
                    <div key={index} className="flex flex-col gap-3 pb-3">
                        <div>
                            <img
                                className="w-full h-72 bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                src={tip.image}
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-[#111813] text-base font-medium leading-normal">
                                {tip.title}
                            </p>
                            <p className="text-[#63886f] text-sm font-normal leading-normal">
                                {tip.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantCareTips;
