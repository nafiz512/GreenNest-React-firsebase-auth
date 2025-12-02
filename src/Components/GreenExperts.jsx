import React from "react";
import expert2 from "../assets/images/expert2.png";
import expert1 from "../assets/images/expert1.png";
import expert3 from "../assets/images/expert3.png";

const GreenExperts = () => {
    const experts = [
        {
            name: "Dr. Emily Carter",
            field: "Plant Pathology",
            image: expert1,
        },
        {
            name: "Mark Thompson",
            field: "Horticulture",
            image: expert2,
        },
        {
            name: "Sarah Lee",
            field: "Indoor Gardening",
            image: expert3,
        },
    ];

    return (
        <div className="">
            <h2 className=" pb-4 font-bold text-2xl">Meet Our Green Experts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {experts.map((expert, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3 text-center items-center pb-3"
                    >
                        <div className="px-4 w-full flex justify-center">
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="aspect-square w-full max-w-[230px] object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div>
                            <p className="text-[#111813] text-xl  font-medium ">
                                {expert.name}
                            </p>
                            <p className="text-[#63886f] text-base font-normal ">
                                {expert.field}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GreenExperts;
