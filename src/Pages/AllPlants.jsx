import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";

const AllPlants = () => {
    const plants = useLoaderData();
    return (
        <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)] my-10">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {plants.map((el) => (
                    <PlantCard key={el.plantId} plant={el}></PlantCard>
                ))}
            </div>
        </div>
    );
};

export default AllPlants;
