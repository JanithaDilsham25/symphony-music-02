import { Swiper, SwiperSlide } from "swiper/react";
import UpComingMobile from "../../components/body/upCommingEvents/UpComingMobile";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Topic from "../../components/body/topicComponent/Topic";


function UpComingSlide(){

    const upcomingData = [
  {
    title: "Annual Concert 2025",
    date: "December 18,2025 at 6:00 PM",
    venue: "Harmony Music Center",
  },

  {
    title: "Annual Concert 2025",
    date: "December 18,2025 at 6:00 PM",
    venue: "Harmony Music Center",
  },

  {
    title: "Annual Concert 2025",
    date: "December 18, 6:00 PM",
    venue: "Harmony Music Center",
  },

  {
    title: "Annual Concert 2025",
    date: "December 18, 6:00 PM",
    venue: "Harmony Music Center",
  }
];

    return(
      
    <section className="w-full h-250 flex flex-col justify-center items-center">
      <div className="">
        <Topic
              title="Up Coming Events"
              subtitle="Join us for exciting concerts, workshops, and recitals. Experience the joy of live music."
            />
      </div>
      <div className="w-full h-125 flex justify-center items-center">
          <div className="w-4/4 h-fit flex flex-row justify-center items-center">
      
                <Swiper
                  modules={[Autoplay, EffectCards]}
                  spaceBetween={24}
                  slidesPerView={1}
                  speed={900}                // 👈 smooth transition
                  freeMode={true}
                  centeredSlides={true}
                  autoplay={
                      {
                          delay: 2500,
                          disableOnInteraction: false
                      }
                  }
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                  }}
                  className="w-full"
                >
                  {upcomingData.map((item) => (
                <SwiperSlide key={item} >
                   <div className="w-4/4 flex justify-center items-center">
                     <UpComingMobile title={item.title} date={item.date} venue={item.venue} />
                   </div>
                </SwiperSlide>
              ))}
                </Swiper>
              </div>
      </div>
    </section>
)}

export default UpComingSlide