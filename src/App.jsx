import "./App.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
    const slides = [
        {
            id: 1,
            title: "Bring Nature Home",
            slogan: "Fresh air, green vibes, peaceful mind.",
            image: "/slide1.jpeg",
        },
        {
            id: 2,
            title: "Grow with Care",
            slogan: "Every plant deserves your attention.",
            image: "/banner.png",
        },
        {
            id: 3,
            title: "Nature is Therapy",
            slogan: "Feel the calmness around you.",
            image: "/slide2.jpg",
        },
    ];

    return (
        <div className="w-full h-[30vh] md:h-[60vh]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="">
                        <div
                            className="relative w-full  h-[30vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="relative z-10 text-center text-white px-4">
                                <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-2xl drop-shadow-md">
                                    {slide.slogan}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
