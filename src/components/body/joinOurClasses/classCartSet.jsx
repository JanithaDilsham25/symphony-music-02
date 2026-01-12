import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Guitar from "../../../assets/joinOurClass/Guitar.jpg";
import Violine from "../../../assets/joinOurClass/Violine.jpg";
import Keyboard from "../../../assets/joinOurClass/Keyboard.png";

import ClassCart from "./classCart";

export default function ClassCartSet() {
  const classes = [
    {
      id: 1,
      image: Guitar,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 2,
      image: Violine,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 3,
      image: Keyboard,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 4,
      image: Guitar,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 5,
      image: Keyboard,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 6,
      image: Keyboard,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 7,
      image: Keyboard,
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hal",
    },
  ];

  return (
    <section className="relative w-full py-12 bg-[#002B42] flex justify-center items-center flex-col gap-5">
      <h2 className="text-center text-white font-primary font-normal text-[36px] sm:text-[42px] md:text-[64px]  xl:text-[44px] 2xl:text-[72px] mb-4 sm:mb-5">
        Join With Our Classes
      </h2>

      <div className="w-10/12 sm:px-6 flex justify-center items-center">
        <div className="w-full max-w-7xl flex justify-center items-center">
          
          <Swiper
            modules={[Navigation, Mousewheel, Autoplay]}
            spaceBetween={16}
            grabCursor={true}
            loop={true}
            centeredSlides={true} // ✅ Center active slide
            slidesPerView={3}
            autoplay={{
              delay: 2500, // ✅ Auto slide every 2.5s
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 }, // ✅ Desktop shows 5
            }}
            slideActiveClass="active-slide"
          >
            {classes.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex justify-center transition-all duration-500"
              >
                <div className="swiper-scale-wrapper">
                  <ClassCart
                    image={item.image}
                    grade={item.grade}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
