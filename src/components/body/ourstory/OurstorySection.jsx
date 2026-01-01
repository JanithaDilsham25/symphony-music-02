import React from 'react';
import Button1 from '../../../buttons/homepage/Button1';
import StoryImg from '../../../assets/StorySectionImg.png';

function OurstorySection() {
  return (
    <>
      {/* ================= MOBILE VIEW =================
      <div className="lg:hidden w-full h-[710px] pr-3 pl-3 gap-2 flex flex-col items-center">
        <h2 className="
          w-[406px]
          h-[50px]
          text-[40px]
          leading-[30.3px]
          tracking-[-2%]
          text-[#E26200]
          font-primary
          text-center
          items-center
        ">
          Our Story
        </h2>
        <div className='w-[406px] h-[652px] gap-6 flex flex-col items-center '>
          <div className='w-[296px] h-[315px] bg-yellow-300'>
            <img
                src={StoryImg}
                alt="Our Story"
                className="w-full h-full"
              />
          </div>
     
        <div className='w-[296px] h-[315px]   bg-amber-400 bg-url({StoryImg})'></div>
        <p className="
          w-[398px]
          h-[252px]
          gap-[12.12px]
          text-[16px]
          leading-6
          tracking-normal
          text-[#454545]
          text-center
          
        ">
          Founded in 2010, Harmony Music School began with a simple mission: to make quality music education accessible to everyone. What started as a small studio with just three teachers has grown into one of the region's premier music institutions.
          <br></br>
          We believe that music is a universal language that transcends boundaries and enriches lives. Our dedicated team of professional musicians and educators work tirelessly to nurture talent, build confidence, and inspire a lifelong love of music.
        </p>

        <Button1 className="w-[137px] h-[37px] rounded-[4.62px] border-[0.58px] pt-2 pb-2 pr-3 pl-3 gap-[6.93px] border-[#454545]" >
          <div className='w-[113px] h-[21px] font-secondary font-medium text-[16px] tracking-normal leading-[20.78px] text-[#454545] buttonname="hh" '>View About Us</div>
        </Button1>
      </div>
      </div> */}

       

       {/* w-[1714.431640625px] 
       px-[896px]
        py-[120px] */}

      {/* ================= DESKTOP VIEW ================= */}
      <div className="
        flex flex-row
        w-full
        h-[1714.431640625px]

        justify-between items-center
      
      ">
        {/* Text Section */}
        <div className="w-[788px] h-[508px] flex flex-col gap-12 text-left">
          <span className="
            text-[72px]
            leading-[60px]
            tracking-[-0.02em]
            text-[#E26200]
            font-primary
          ">
            Our Story
          </span>
          <div className='w-[788px] h-[400px] gap-[32px]'>
      

          <div className="
            text-[24pt]
            leading-9
            text-[#454545]
            font-secondary
          ">
            Founded in 2010, Harmony Music School began with a simple mission: to
            make quality music education accessible to everyone. What started as
            a small studio with just three teachers has grown into one of the
            region's premier music institutions.
            <br /><br />
            We believe that music is a universal language that transcends
            boundaries and enriches lives. Our dedicated team of professional
            musicians and educators work tirelessly to nurture talent, build
            confidence, and inspire a lifelong love of music.
          </div>

          <Button1 buttonname="View About Us" />
          </div>
  
        </div>

        {/* Image Section */}
        <div className="w-[1146.431640625px] h-[1146.431640625px] aspect-square ">
          <img
              src={StoryImg}
              alt="Our Story"
              className="w-full h-full object-cover rounded-2xl"
          />
          </div>
    
      
      </div>
    </>
  );
}

export default OurstorySection;
