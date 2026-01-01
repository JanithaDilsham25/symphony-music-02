import React, { useState } from "react";
import EventCard from "./EventCard";
import { eventsData } from "./Eventsdata.jsx";  

function EventsSection() {
  const [filter, setFilter] = useState("All");

  const today = new Date();

  const filteredEvents =
    filter === "All"
      ? eventsData
      : filter === "Upcoming"
      ? eventsData.filter((event) => new Date(event.date) > today)
      : eventsData.filter((event) => new Date(event.date) < today);

  return (
    <div className="w-[1360px] h-[3082px] mt-[808px] ml-[280px] gap-32 flex flex-col items-center">

      {/* Filter Buttons */}
      <div className="flex w-[508px] h-[60px] justify-between gap-3 ">
        <button
          className={`w-[153px] h-[60px] pt-3 pr-5 pb-3 pl-5 gap-2.5 ${
            filter === "All" ? " border-b-2 border-[#393939] text-[#393939]" : "text-[#454545]"
          }`}
          onClick={() => setFilter("All")}
        >
          <span className="w-[113px] h-9 font-medium font-secondary text-[24px] tracking-normal leading-9 space-y-4">All Events</span>
        </button>

        <button
          className={`w-[168px] h-[60px] pt-3 pr-5 pb-3 pl-5 gap-2.5 ${
            filter === "Upcoming" ? " border-b-2 border-[#393939] text-[#393939]" : "text-[#454545]"
          }`}
          onClick={() => setFilter("Upcoming")}
        >
         <span className="w-32 h-9 font-medium font-secondary text-[24px] tracking-normal leading-9 space-y-4">Up Coming</span> 
        </button>

        <button
          className={`w-[163px] h-[60px] pt-3 pr-5 pb-3 pl-5 gap-2.5  ${
            filter === "Past" ? " border-b-2 border-[#393939] text-[#393939]" : "text-[#454545]"
          }`}
          onClick={() => setFilter("Past")}
        >
          <span className="w-[123px] h-9 font-medium font-secondary text-[24px] tracking-normal leading-9 space-y-4">Past Event</span >
        </button>
      </div>

      {/* Cards Grid */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:w-[1360px] lg:h-[922px]} flex flex-col items-center gap-16">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            pic={event.pic}
            eventname={event.eventname}
            discription={event.discription}
            details={event.details}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsSection;
