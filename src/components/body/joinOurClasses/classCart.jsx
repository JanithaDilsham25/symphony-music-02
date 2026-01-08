import React from "react";
import { LuGuitar } from "react-icons/lu";

import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function ClassCart({ image, grade, date, time, location }) {
  return (
    <div className="relative w-77.5 md:w-80 xl:w-8/12 flex flex-col items-center p-1 gap-4 rounded-[7.76px] bg-white border border-black">
      <div className="relative w-full h-42 rounded-xl overflow-hidden ">
        <img
          src={image}
          alt="Instrument"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="hidden xl:flex w-14 h-14 absolute bottom-0 right-0 rounded-full bg-yellow-400 justify-center items-center m-4">
          <LuGuitar className="w-7 h-7 text-black" />
        </div>
      </div>

      <div className="w-full  p-2 rounded-md flex flex-col items-start gap-3">
        <h2 className="font-inter font-semibold text-[16px] text-[#272A30] leading-7">
          {grade}
        </h2>
        <div className="w-full gap-1.5 flex flex-col ">
          <div className="flex items-center gap-3">
            <FaRegCalendar className="text-yellow-500 w-5 h-5" />
            <span className="font-inter font-normal text-[14px] text-[#454545] flex items-center">
              {date}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaRegClock className="text-yellow-500 w-5 h-5" />
            <span className="font-inter font-normal text-[14px] text-[#454545] flex items-center">
              {time}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <GrLocation className="text-yellow-500 w-5 h-5 " />
            <span className="font-inter font-normal text-[14px] text-[#454545] flex items-center">
              {location}
            </span>
          </div>
        </div>
        <button
          className="
            
            w-full
            rounded-lg xl:border xl:border-[#454545] 
            flex items-center justify-center bg-[#FDC700]  
           xl:bg-white p-1
          "
        >
          {/* <span className="font-inter font-medium text-[18px] leading-[20.78px] tracking-[0px] text-black xl:hidden">
            Read More
          </span> */}
          <span className=" hidden xl:inline font-inter font-medium text-[12px] text-[#454545] font-medium">
            View details
          </span>
        </button>
      </div>
    </div>
  );
}
