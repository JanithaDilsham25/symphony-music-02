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
    <section className="w-full h-auto flex justify-center items-center">
      <div className="w-10/12 flex flex-col gap-7">

        {/* ================= MOBILE VIEW (UNCHANGED) ================= */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="h-auto">
                  <Card
                    icon={card.icon}
                    topic={card.topic}
                    para={card.para}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP VIEW (FIXED) ================= */}
        <div className="hidden md:flex flex-col gap-7">

          {/* TOP ROW */}
          <div className="w-full flex gap-5 justify-center items-center">
            <div className="w-2/12"></div>

            {cards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className="w-4/12 h-[256px]"
              >
                <Card {...card} />
              </div>
            ))}

            <div className="w-2/12"></div>
          </div>

          {/* BOTTOM ROW */}
          <div className="w-full flex gap-5 justify-center">
            {cards.slice(2, 5).map((card, i) => (
              <div
                key={i}
                className="w-4/12 h-[256px]"
              >
                <Card {...card} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExpertSection;
