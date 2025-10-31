import React from "react";

const Hero = () => {
    return (
        <div className="py-5">
            <div className="w-full flex-1 ">
                <div className="relative min-h-[480px] w-full flex flex-col  rounded-sm items-center justify-center p-4 bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-black/60 rounded-sm"></div>

                    <div className="relative z-10 flex flex-col gap-2 text-center">
                        <h1 className="text-white text-5xl font-black leading-tight">
                            Nurture Nature at Home
                        </h1>
                        <h2 className="text-white text-base font-normal">
                            Explore, Buy, and Care for Plants Easily
                        </h2>
                    </div>

                    <button className="relative z-10 flex items-center justify-center rounded-xl bg-primary px-5 h-12 text-black text-base font-bold">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
