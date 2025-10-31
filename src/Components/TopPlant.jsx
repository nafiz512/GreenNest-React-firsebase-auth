import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlantCard from "./PlantCard";

const TopPlant = ({ data }) => {
    const plant = data.filter((plant) => plant.plantId <= 6);
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="py-8 overflow-hidden">
            <h2 className=" pb-6 font-bold text-2xl">
                Top Rated Indoor Plants
            </h2>
            <div
                data-aos="zoom-in"
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
                {plant.map((el) => (
                    <PlantCard key={el.plantId} plant={el}></PlantCard>
                ))}
            </div>
        </div>
    );
};

export default TopPlant;
