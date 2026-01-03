import React from "react";
import EventDetailsItem from "./EventDetailsItem";

export default function EventCardBig({ event }) {
  return (

         <div className="md:w-7/8 xl:w-full bg-white border rounded-[14.74px] xl:rounded-3xl p-4 xl:p-6 ">
      <img
        src={event.pic}
        className="w-full xl:max-h-[340px] md:h-[275px] object-cover rounded-[14.74px] xl:rounded-2xl"
        alt=""
      />

      <h2 className="mt-6 md:text-[1.25rem] xl:text-[2rem] font-semibold">
        {event.eventname}
      </h2>

      <p className="mt-4 text-[1.25rem]  hidden xl:flex">{event.discription}</p>

      <div className="mt-6 hidden xl:flex xl:flex-col gap-3 ">
        {event.details.map((item, i) => (
          <EventDetailsItem key={i} {...item} />
        ))}
      </div>
 
       <button className='w-full h-[60px] hidden xl:flex items-center justify-center rounded-lg border mt-5 border-[#454545] pt-3 pr-5 pb-3 pl-5 gap-3'>
            <div className="w-xl h-9 gap-3">
              <span className=' h-9 text-[#454545] font-medium text-[1.5rem] leading-9 tracking-normal'>Read More</span>
            </div>
     </button>

     <p className="md:flex xl:hidden text-[1.125rem]">
        Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques. Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques.
        Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques. Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques.
        Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques. Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques.
     </p>
     
      
    </div>

   
  );
}
