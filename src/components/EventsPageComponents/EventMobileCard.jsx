import React from "react";
import EventDetailsItem from "./EventDetailsItem";

export default function EventMobileCard({
  pic,
  eventname,
  discription,
  details,
}) {
  return (
    <div className=" w-full bg-white border rounded-2xl overflow-hidden p-3">
      <img src={pic} className="w-full h-[220px] object-cover" alt="" />

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-[1.125rem] font-semibold">{eventname}</h3>

        <p className="text-[0.875rem] text-[#6B6B6B]">{discription}</p>

        <div className="flex flex-col gap-2">
          {details.map((item, i) => (
            <EventDetailsItem key={i} {...item} />
          ))}
        </div>

        <button className="mt-3 h-[40px] bg-[#FDC700] text-white rounded-lg">
          Register Now
        </button>
      </div>
    </div>
  );
}
