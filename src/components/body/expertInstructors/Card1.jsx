import React from 'react';

function Card1(props) {
  const isRight = props.index % 2 !== 0;

  return (
    <>
      {/* ================= DESKTOP CARD ================= */}
      <div className="
        hidden lg:flex
        w-[520px] h-64
        rounded-3xl
        border border-[#C87C03]
        gap-6 p-6
        flex-col items-center justify-center
        shadow-[0px_2px_12px_0px_#00000026]
      ">
        <div className="w-16 h-16 rounded-full bg-[#FFC107] flex items-center justify-center">
          <img
            src={props.icon}
            alt="icon"
            className="w-[30px] h-[30px]"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-[18px]">
          <h2 className="text-[32px] font-secondary font-semibold text-[#0A0A0A] leading-[30px]">
            {props.topic}
          </h2>
          <p className="text-[24px] font-inter text-[#454545] leading-9">
            {props.para}
          </p>
        </div>
      </div>

      {/* ================= MOBILE CARD (ALTERNATING) ================= */}
      <div
        className={`
          lg:hidden
          w-[398px] h-[114px]
          rounded-[14.35px]
          border border-[#C87C03]
          gap-[26px] p-[18px]
          flex items-center
          shadow-[0px_2px_12px_0px_#00000026]
          ${isRight ? 'flex-row text-left bg-[#FFFCF3]' : 'flex-row-reverse text-left'}
        `}
      >
        {/* Icon */}
        <div className="w-[45px] h-[45px] rounded-[89.35px] p-[11.78px] gap-[11.78px] bg-[#FFC107] flex items-center justify-center">
          <img
            src={props.icon}
            alt="icon"
            className=" "
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[12px] justify-center">
          <h3 className="text-[16px] font-secondary font-semibold text-[#0A0A0A]">
            {props.topic}
          </h3>
          <p className="text-[16px] font-inter text-[#454545] leading-[24px]">
            {props.para}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card1;
