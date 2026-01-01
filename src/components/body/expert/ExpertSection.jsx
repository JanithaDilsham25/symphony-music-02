import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ExpertSection() {
  const cards = [
    {
      icon: "src/assets/Frame 41.png",
      topic: "Expert Instructors",
      para: "Learn from professional musicians with years of teaching experience",
    },
    {
      icon: "src/assets/Frame 41.png",
      topic: "Flexible Schedule",
      para: "Learn from professional musicians with years of teaching experience",
    },
    {
      icon: "src/assets/Frame 41.png",
      topic: "Certified Courses",
      para: "Learn from professional musicians with years of teaching experience",
    },
    {
      icon: "src/assets/Frame 41.png",
      topic: "Modern Studios",
      para: "Learn from professional musicians with years of teaching experience",
    },
    {
      icon: "src/assets/Frame 41.png",
      topic: "Performance Events",
      para: "Learn from professional musicians with years of teaching experience",
    },
  ];

  return (
    <section className="w-full flex justify-center ">
      <div className="w-10/12 flex flex-col gap-7  ">

        {/* ================= MOBILE  ================= */}
        <div className="block md:hidden ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= TAB (8 COL GRID) ================= */}
        <div className="w-full hidden md:grid xl:hidden grid-cols-8 gap-10">
          {/* Top row – 2 cards */}
         
          <div className="col-span-4 max-h-[240px]">
            <Card {...cards[0]} />
          </div>
          <div className="col-span-4 max-h-[240px]">
            <Card {...cards[1]} />
          </div>
       

          {/* Second row – 2 cards */}
         
          <div className="col-span-4 max-h-[240px]">
            <Card {...cards[2]} />
          </div>
          <div className="col-span-4 max-h-[240px]">
            <Card {...cards[3]} />
          </div>
       

          {/* Last row – 1 card */}
          <div className="col-span-2" />
          <div className="col-span-4 max-h-[240px]">
            <Card {...cards[4]} />
          </div>
          <div className="col-span-2" />
        </div>

        {/* ================= DESKTOP (12 COL GRID) ================= */}
        <div className="hidden h-[540px]  xl:grid grid-cols-12 gap-5">
          {/* Top row */}
          <div className="col-span-2" />
          {cards.slice(0, 2).map((card, i) => (
            <div key={i} className="col-span-4 h-[256px]">
              <Card {...card} />
            </div>
          ))}
          <div className="col-span-2" />

          {/* Bottom row */}
          {cards.slice(2, 5).map((card, i) => (
            <div key={i} className="col-span-4 h-[256px]">
              <Card {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExpertSection;
