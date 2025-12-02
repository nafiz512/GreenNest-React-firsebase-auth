import React, { useEffect } from "react";
import TopPlant from "../Components/TopPlant";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import App from "../App";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const plants = useLoaderData();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div className="w-10/12 mx-auto min-h-[calc(100vh-270px)]">
                <div className="mb-10">
                    <App></App>
                </div>
                <div className="mb-10">
                    <TopPlant data={plants}></TopPlant>
                </div>

                <div data-aos="fade-right" className="mb-10">
                    <PlantCareTips></PlantCareTips>
                </div>

                <div data-aos="fade-left" className="mb-10">
                    <GreenExperts></GreenExperts>
                </div>

                <div data-aos="zoom-in" className="mb-10">
                    <EcoDecorIdeas></EcoDecorIdeas>
                </div>

                <div data-aos="fade-right" className="mb-10">
                    <PlantOfTheWeek plants={plants}></PlantOfTheWeek>
                </div>
            </div>
        </div>
    );
};

export default Home;
