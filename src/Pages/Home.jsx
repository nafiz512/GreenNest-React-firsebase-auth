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
            <div>
                <App></App>
            </div>
            <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-270px)]">
                <div>
                    <TopPlant data={plants}></TopPlant>
                </div>

                <div data-aos="fade-right">
                    <PlantCareTips></PlantCareTips>
                </div>

                <div data-aos="fade-left">
                    <GreenExperts></GreenExperts>
                </div>

                <div data-aos="zoom-in">
                    <EcoDecorIdeas></EcoDecorIdeas>
                </div>

                <div data-aos="fade-right">
                    <PlantOfTheWeek plants={plants}></PlantOfTheWeek>
                </div>
            </div>
        </div>
    );
};

export default Home;
