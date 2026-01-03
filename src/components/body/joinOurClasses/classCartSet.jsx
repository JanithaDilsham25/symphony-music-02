import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

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
  ];

  return (
    <section className="relative w-full py-12 bg-[#002B42]">
      <h2 className="text-center text-white font-primary font-normal text-[36px] sm:text-[42px] md:text-[64px]  xl:text-[70px] 2xl:text-[72px] mb-4 sm:mb-5">
        Join With Our Classes
      </h2>

      <div className="w-full px-4 sm:px-6 md:px-0">
        {" "}
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={16}
          navigation={false}
          mousewheel={true}
          grabCursor
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 1.1, centeredSlides: true },
            480: { slidesPerView: 1.5, centeredSlides: true },
            640: { slidesPerView: 2, centeredSlides: false },
            850: { slidesPerView: 2.5, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
            1280: { slidesPerView: 3, centeredSlides: false },
            1536: { slidesPerView: 3.5, centeredSlides: false },
          }}
          slideActiveClass="active-slide"
        >
          {classes.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center transition-transform duration-300 active-slide:scale-105 active-slide:z-10"
            >
              <ClassCart
                image={item.image}
                grade={item.grade}
                date={item.date}
                time={item.time}
                location={item.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
