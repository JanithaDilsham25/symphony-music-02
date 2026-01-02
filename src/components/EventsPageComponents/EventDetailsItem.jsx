function EventDetailItem({ img, text }) {
  return (
    <div className="flex items-center  text-gray-700  w-[378.34564208984375px] h-6 gap-[7.37px]">
   
      <img src={img} className="w-6 h-6 "></img>
      <span className="h-6 font-secondary font-normal text-[16px] tracking-normal leading-6 text-secondary">{text}</span>
    </div>
  );
}

export default EventDetailItem
