import React, { useState } from "react";
import { eventsData } from "./Eventsdata.jsx";
import EventMobileCard from "./EventMobileCard";
import EventCardSmall from "./EventCardSmall";
import EventCardBig from "./EventCardBig";

export default function EventsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const today = new Date();

  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === "All") return true;
    if (filter === "Upcoming") return eventDate >= today;
    if (filter === "Past") return eventDate < today;
    return true;
  });

  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <div className="w-full md:w-full xl:w-9/12 flex flex-col p-5 items-center justify-center md:p-4 xl:p-0 ">

       
      {/* FILTER */}
      <div className="flex justify-center items-center w-full md:w-4/8 xl:w-5/12 gap-5 md:gap-6 mb-14 ">
        {["All Event", "Upcoming", "Past Event"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`w-5/12 text-[1rem] xl:text-[1rem] ${
              filter === type
                ? "border-b-2 border-[#393939]"
                : "text-[#454545]"
            }`}
          >
           
            {type} 
          </button>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col w-full gap-16    md:hidden">
        {filteredEvents.map((e, i) => (
          <EventMobileCard key={i} {...e} />
        ))}
      </div>

      {/* ================= TABLET (1 CARD + POPUP) ================= */}
      <div className="hidden md:grid  md:grid-cols-2 md:w-full xl:hidden flex-col gap-16">
        {filteredEvents.map((e, i) => (
          <EventCardSmall
            key={i}
            {...e}
            onClick={() => setSelectedEvent(e)}
          />
        ))}
      </div>

      {/* ================= DESKTOP (2 CARDS PER ROW) ================= */}
  <div className="hidden xl:grid xl:grid-cols-12 gap-y-8 ">
  {filteredEvents.reduce((rows, event, index) => {
    if (index % 2 === 0) {
      rows.push(filteredEvents.slice(index, index + 2));
    }
    return rows;
  }, []).map((row, rowIndex) => (
    <div key={rowIndex} className="col-span-12 grid grid-cols-12 gap-8">
      
      {/* LEFT SPACE */}
      <div className="col-span-1" />

      {/* CARDS */}
      {row.map((event, i) => (
        <div key={i} className="col-span-5">
          <EventCardBig event={event} />
        </div>
      ))}

      {/* RIGHT SPACE */}
      <div className="col-span-1" />

    </div>
  ))}
</div>



      {/* ================= TABLET POPUP ================= */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full px-3 py-1 text-lg"
            >
              ✕
            </button>

            <EventCardBig event={selectedEvent} />
          </div>
        </div>
      )}
      </div>

    </section>
  );
}
