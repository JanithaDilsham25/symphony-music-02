export default function AchievementCart({ icon, count, title }) {
  return (
    <div className=" xl:w-64  md:w-43 w-40   flex flex-col justify-center items-center  xl:gap-3 gap-2">
      <div className="xl:w-16 xl:h-16 lg:w-13 lg:h-13 w-8.5 h-8.5 bg-[#FFC107] rounded-full flex justify-center items-center ">
        <div className="xl:w-8.5 xl:h-8.5 lg:w-6.25 lg:h-6.25 w-4.75 h-4.75 relative">
          <img
            src={icon}
            alt="Instrument"
            className="absolute inset-0 w-full h-full bg-cover"
          />
        </div>
      </div>

      <div className="w-full  flex flex-col xl:gap-3 gap-2">
        <div className="w-full  flex justify-center">
          <span className="font-inter font-semibold xl:text-[32px] lg:text-[30px] mb:text-[20px] text-[#FFC107] text-center">
            {count}
          </span>
        </div>

        <div className="w-full  flex justify-center items-center">
          <span className="font-inter font-normal xl:text-[24px] lg:text-[20px] mb:text-[15px] text-center">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
