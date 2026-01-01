import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <h2 className="text-center text-white font-primary font-normal text-[36px] md:text-[56px] lg:text-[58px] xl:text-[64px] 2xl:text-[72px]mb-4">
        Join With Our Classes
      </h2>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={16}
          navigation={false}
          mousewheel={true}
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            850: { slidesPerView: 2.5 },

            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 4.5 },
          }}
        >
          {classes.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
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
