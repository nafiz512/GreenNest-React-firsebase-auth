import React from "react";
import decor1 from "../assets/images/decor1.jpeg";
import decor2 from "../assets/images/decor2.jpg";
import decor3 from "../assets/images/decor3.png";

const EcoDecorIdeas = () => {
    const ideas = [
        {
            image: decor1,
        },
        {
            image: decor2,
        },
        {
            image: decor3,
        },
    ];

    return (
        <div className="py-8">
            <h2 className=" pb-6 font-bold text-2xl"> Eco Decor Ideas</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {ideas.map((idea, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <img
                            src={idea.image}
                            alt={`Eco Decor ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EcoDecorIdeas;
