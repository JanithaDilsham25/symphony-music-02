import React, { useState } from "react";
import { eventsData } from "./eventsData";
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
    <section className="w-full flex flex-col items-center bg-amber-200">
      <div className="w-10/12 bg-green-200 flex flex-col items-center ">

        
      {/* FILTER */}
      <div className="flex gap-6 mb-14">
        {["All", "Upcoming", "Past"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`h-[60px] px-6 xl:text-[1.5rem] ${
              filter === type
                ? "border-b-2 border-[#393939]"
                : "text-[#454545]"
            }`}
          >
            {type} Events
          </button>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col gap-16  bg-red-500  md:hidden">
        {filteredEvents.map((e, i) => (
          <EventMobileCard key={i} {...e} />
        ))}
      </div>

      {/* ================= TABLET (1 CARD + POPUP) ================= */}
      <div className="hidden md:grid  grid-cols-2 xl:hidden flex-col items-center gap-16">
        {filteredEvents.map((e, i) => (
          <EventCardSmall
            key={i}
            {...e}
            onClick={() => setSelectedEvent(e)}
          />
        ))}
      </div>

      {/* ================= DESKTOP (2 CARDS PER ROW) ================= */}
      <div className="hidden xl:grid grid-cols-2 gap-12 w-full max-w-7xl px-6">
        {filteredEvents.map((e, i) => (
          <div key={i} className="flex justify-center">
            <EventCardBig event={e} />
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
