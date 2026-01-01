import React from "react";
import Vector7 from "../../../assets/homePage/Vector7.png"; // Under vector
import MaskgroupLg from "../../../assets/homePage/MaskgroupLg.png";
import MaskgroupMd from "../../../assets/homePage/MaskgroupMd.png"; // Desktop background
import Vector8 from "../../../assets/homePage/Vector8.svg"; // Mask overlay
import Logo from "../../../assets/homePage/Logo.png";

import MaskgroupSm from "../../../assets/homePage/MaskgroupSm.png";
import Vector9 from "../../../assets/homePage/Vector9.png";
import Navbar from "../navBar/Navbar";

export default function Header() {
  return (
    <div className="w-full relative overflow-hidden ">
      <div className="hidden xl:block relative w-full aspect-2/1 overflow-hidden">
        <svg
          viewBox="0 0 1920 960"
          className="hidden xl:block absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <image href={Vector7} width="1920" height="960" />
          <image
            href={MaskgroupLg}
            width="1920"
            height="960"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <div className="hidden md:block xl:hidden relative w-full">
        <svg
          viewBox="0 0 834 562"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid slice"
        >
          <image href={Vector8} width="834" height="625" />
          <image
            href={MaskgroupMd}
            width="834"
            height="562"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <div className="md:hidden relative w-full">
        <svg
          viewBox="0 0 430 661"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Vector9 */}
          <image href={Vector9} width="430" height="700" />

          {/* Mask stays in place */}
          <image
            href={MaskgroupSm}
            width="430"
            height="661"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      <div className="hidden absolute z-20 md:block   top-0 left-0 w-full ">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-20 flex flex-col  items-center gap-16 sm:gap-12 xl:gap-11 2xl:gap-16 md:gap-10  lg:gap-11   top-[18vh] md:top-[15vh] ">
        <div className="w-5/16 md:w-2/12 xl:w-9/72    ">
          <img src={Logo} alt="Icon" className="w-full h-auto" />
        </div>
        {/* Hero Text*/}

        <div className="   z-20 flex flex-col items-center gap-6 md:gap-5  2xl:gap-5">
          <div className="flex justify-center w-full ">
            <h1
              className="font-primary font-normal  text-white text-center text-[48px] sm:text-[58px] leading-12.5 drop-shadow-[0_0.74px_5.57px_#00000040]
                         md:text-[62px] md:leading-16 md:drop-shadow-[0_0.95px_7.1px_#00000040] lg:text-[75px] lg:leading-15 xl:text-[90px] xl:leading-20 2xl:text-[110px] 2xl:leading-25 xl:drop-shadow-[0_1.78px_13.38px_#00000040]
 "
            >
              Start Your Musical <br />
              Journey Today
            </h1>
          </div>

          <div className="w-full  z-20 flex justify-center">
            <div className="text-center md:hidden">
              <p className="text-white font-secondary text-[18px] leading-tight">
                Learn from professional instructors in a
              </p>
              <p className="text-white font-secondary text-[18px] leading-tight">
                supportive environment
              </p>
            </div>

            {/* md and up: 1 line */}
            <p className="hidden md:block text-white font-secondary tracking-wide text-center text-[18px] md:leading-6 xl:leading-7.5">
              Learn from professional instructors in a supportive environment
            </p>
          </div>
        </div>

        <button
          className="inline-flex flex-col items-center justify-center  z-20
             rounded-[4.62px] px-3 py-2 gap-[6.93px] border-[0.58px] border-white
             mb:px-2.5 mb:py-1.5
             xl:rounded-2 lg:border xl:px-5 xl:py-3 
            self-center"
        >
          <span className="text-white font-secondary font-medium text-[16px] leading-5 mb:text-[13px] mb:leading-[20] xl:text-[22px] 2xl:text-[24px] 2xl:leading-9">
            Explore Classes
          </span>
        </button>
      </div>
    </div>
  );
}