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
    <section className="w-12/12 bg-green-500 flex justify-center  md:p-3 xl:p-0 mt-5 mb-15 xl:mb-20 ">
      <div className="flex flex-col w-10/12 xl:justify-center xl:items-center bg-blue-700">
        {/* MOBILE */}
        <div className="md:hidden w-full p-5">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TABLET */}
        <div className="hidden md:grid xl:hidden grid-cols-8 gap-10 ">
          <div className="col-span-4">
            <Card {...cards[0]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[1]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[2]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[3]} />
          </div>
          <div className="col-span-2" />
          <div className="col-span-4">
            <Card {...cards[4]} />
          </div>
          <div className="col-span-2" />
        </div>

       {/* ================= DESKTOP ================= */}
<div className="hidden xl:flex w-full flex-col gap-16 justify-center items-center">

  {/* ================= TOP ROW ================= */}
  <div className="w-full flex justify-center bg-blue-400">
    <div className="flex  justify-center gap-5">
      
      <div className="w-4/12 h-[256px] flex justify-center">
        <Card {...cards[0]} />
      </div>

      <div className="w-4/12 h-[256px] flex justify-center">
        <Card {...cards[1]} />
      </div>

    </div>
  </div>

  {/* ================= BOTTOM ROW ================= */}
<div className="w-10/12 flex items-center justify-between gap-5 bg-green-800">

  <div className="w-4/12 h-[256px] flex justify-center">
    <Card {...cards[2]} />
  </div>

  <div className="w-4/12 h-[256px] flex justify-center">
    <Card {...cards[3]} />
  </div>

  <div className="w-4/12 h-[256px] flex justify-center">
    <Card {...cards[4]} />
  </div>

</div>

</div>

      </div>
    </section>
  );
}

export default ExpertSection;
