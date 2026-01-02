import React from "react";

function Card(props) {
  return (
    <div
      className="
        w-full h-[114px] md:h-[220px] xl:h-[256px]
        rounded-[14.35px] md:rounded-2xl xl:rounded-3xl
        border border-[0.6px] border-[#C87C03] 
        flex flex-row md:flex-col
        items-center md:items-center
        justify-start md:justify-center
        shadow-[0px_2px_12px_0px_#00000026]
        gap-[14px] md:gap-[24px]  xl:gap-[26px]
        px-4 md:px-0
        bg-[#FFFCF3]  md:bg-white
      "
    >
      {/* ICON (CENTERED + ROUND) */}
    <div className="w-[45px] h-[45px] md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full md:rounded-full bg-[#FFC107] flex items-center justify-center shrink-0">
  <img
    src={props.icon}
    alt="icon"
    className="w-[21.4px] h-[21.4px] md:w-[25px] md:h-[25px] xl:w-[30.5px] xl:h-[30.5px]"
  />
</div>


      {/* TEXT (LEFT MOBILE, CENTER DESKTOP) */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center gap-[12px] md:gap-[14px] xl:gap-[18px]">
        <h2 className="text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-secondary font-semibold text-[#0A0A0A] leading-[17.94px] md:leading-[24px] xl:leading-[30px]">
          {props.topic}
        </h2>
        <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] font-inter text-[#454545] leading-[24px] md:leading-8 xl:leading-9">
          {props.para}
        </p>
      </div>
    </div>
  );
}

export default Card;
