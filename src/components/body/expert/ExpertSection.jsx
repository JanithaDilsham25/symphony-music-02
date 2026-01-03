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
   <section className="w-full flex justify-center  md:p-3">
  <div className="flex flex-col w-full">

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
    <div className="hidden md:grid xl:hidden grid-cols-8 gap-10">
      <div className="col-span-4"><Card {...cards[0]} /></div>
      <div className="col-span-4"><Card {...cards[1]} /></div>
      <div className="col-span-4"><Card {...cards[2]} /></div>
      <div className="col-span-4"><Card {...cards[3]} /></div>
      <div className="col-span-2" />
      <div className="col-span-4"><Card {...cards[4]} /></div>
      <div className="col-span-2" />
    </div>



{/* ================= DESKTOP ================= */}
<div className="hidden xl:grid grid-cols-12 gap-5">

  {/* ===== TOP ROW ===== */}

  {/* left spacing */}
  <div className="col-span-2" />

  {/* card 1 */}
  <div className="col-span-4 h-[256px]">
    <Card {...cards[0]} />
  </div>

  {/* card 2 */}
  <div className="col-span-4 h-[256px]">
    <Card {...cards[1]} />
  </div>

  {/* right spacing */}
  <div className="col-span-2" />

  {/* ===== BOTTOM ROW ===== */}

  <div className="col-span-4 h-[256px]">
    <Card {...cards[2]} />
  </div>

  <div className="col-span-4 h-[256px]">
    <Card {...cards[3]} />
  </div>

  <div className="col-span-4 h-[256px]">
    <Card {...cards[4]} />
  </div>

</div>



  </div>
</section>

  );
}

export default ExpertSection;
