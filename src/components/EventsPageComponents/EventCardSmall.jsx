import React from "react";
import EventDetailsItem from "./EventDetailsItem";

export default function EventCardSmall({
  pic,
  eventname,
  discription,
  details,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer  bg-white border rounded-2xl p-3"
    >
      <img src={pic} className="w-full h-[200px] object-cover rounded-xl" />

      <div className="mt-4 flex flex-col gap-3">
        <h3 className="text-[1.25rem] font-semibold">{eventname}</h3>
        <p className="text-[1rem]">{discription}</p>

        {/* <div className="flex flex-col gap-2">
          {details.slice(0, 3).map((item, i) => (
            <EventDetailsItem key={i} {...item} />
          ))}
        </div>

        <button className="mt-2 border rounded-md py-2 text-[14px]">
          Read More
        </button> */}
      </div>
    </div>
  );
}
