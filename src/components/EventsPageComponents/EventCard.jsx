import React from 'react'
import EventDetailItem from './EventDetailsItem.jsx'

function EventCard({pic, eventname, discription ,details}) {



  return (
    // <div className="hidden lg:flex w-[648px] h-[922px] bg-white border border-[#454545] rounded-3xl gap-8 p-4 flex flex-col text-left  w-">
    //   <div className='w-[616px] h-[338px] gap-2.5 '>
    //     <img src={pic} alt='Event image' className="w-[616px] h-[338px] rounded-[23.46px]"/>
    //   </div>
    //   <div className='w-[616px] h-[520px] gap-8 flex flex-col text-left'>
        
    //     <div className='text-[#454545] w-[417px] h-9 font-inter font-semibold text-[32px] leading-9 tracking-[-0.02em] space-y-9 '>{eventname}</div>

    //     <div className="w-[616px] h-[360px] gap-6 bg-blue-400">
    //         <div className='w-[616px] h-[108px] font-normal text-[24px] text-[#454545] leading-9 tracking-normal space-y-5'>
    //             {discription}
    //         </div>
    //         <div className='w-[599px] h-[228px] gap-3 bg-yellow-100'>
               
    //           {details.map((item, index) => (
    //              <EventDetailItem key={index} img={item.img} text={item.text} />
    //         ))}
    //         </div>
    //     </div>
 
    //     <button className='w-[616px] h-[60px] rounded-lg border border-[#454545] pt-3 pr-5 pb-3 pl-5 gap-3'>
    //         <div className="w-xl h-9 gap-3">
    //             <span className='w-[124px] h-9 text-[#454545] font-medium text-[24px] leading-9 tracking-normal'>Read More</span>
    //         </div>
    //     </button>
    //   </div>
    // </div>


      <div className="  lg:hidden w-[398px] h-[607.18px] bg-white border border-[#454545] rounded-[14.74px] gap-[19.65px] p-[9.83px] gap-[19.65px]  text-left">
      <div className='w-[378.35px] h-[207.6px] gap-[6.14px]'>
        <img src={pic} alt='Event image' className="w-[378.35px] h-[207.6px] rounded-[14.41px]"/>
      </div>
      <div className='w-[378.35px] h-[360.27px] gap-[19.65px] flex flex-col text-left bg-blue-400'>
        
        <div className='text-[#454545] w-[261px] h-[23px] font-inter font-semibold text-[20px] leading-[22.11px] tracking-[-2%] space-y-9 '>{eventname}</div>

        <div className="w-[378.34564208984375px] h-[260.22px] gap-[14.74px] ">
            <div className='w-[378.34564208984375px] h-[72px] font-secondary font-normal text-[16px] text-[#454545] leading-6 tracking-normal'>
                {discription}
            </div>
            <div className='w-[378.34564208984375px] h-[173.48147583007812px] gap-[7.37px] bg-yellow-100'>
               
              {details.map((item, index) => (
                 <EventDetailItem key={index} img={item.img} text={item.text} />
            ))}
            </div>
        </div>
 
        <button className='w-[378.34564208984375px] h-[37.74px] rounded-[4.91px] border-[0.61px] border-[#454545] pt-[7.37px] pr-[12.28px] pb-[7.37px] pl-[12.28px] gap-[7.37px] flex items-center justify-center'>
            <div className="w-[95px] h-[23px] ">
                <span className=' text-[#454545] font-medium text-[14.74px] leading-[22.11px] tracking-normal'>Read More</span>
            </div>
        </button>
      </div>
    </div>




    
  )
}

export default EventCard
