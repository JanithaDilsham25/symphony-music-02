import React from "react";
import Topic from "../body/topicComponent/Topic";

function AboutOurStory() {
  return (
    <section className="w-full py-24 flex flex-col items-center gap-24">

      {/* ================= ABOUT OUR STORY ================= */}
      <div className="max-w-4xl flex flex-col items-center text-center gap-6 px-4">
        <Topic
          title="Our Story"
          subtitle="Founded in 2010, Harmony Music School began with a simple mission — to make quality music education accessible to everyone."
        />

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
          What started as a small studio with just three passionate teachers has
          grown into one of the region’s most trusted music institutions.
          Over the years, Harmony Music School has become a place where creativity
          is nurtured, confidence is built, and lifelong friendships are formed.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
          We believe music is a universal language that transcends boundaries and
          enriches lives. Our dedicated team of professional musicians and
          educators work tirelessly to guide students not only to master their
          instruments, but also to discover their unique musical voice.
        </p>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-4 text-center">

        {/* Mission */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Mission"
            subtitle="To make quality music education accessible to everyone."
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
            Our mission is to nurture creativity, confidence, and musical
            excellence in students of all ages. We strive to create an inspiring
            learning environment where passion meets discipline and every student
            feels encouraged to grow.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Vision"
            subtitle="To inspire generations through the power of music."
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
            Our vision is to become a leading music institution that shapes
            confident performers, thoughtful artists, and lifelong lovers of
            music — empowering individuals to express themselves and connect
            with the world through sound.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutOurStory;
