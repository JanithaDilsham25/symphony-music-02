import React from 'react'
import Topic from '../topicComponent/Topic'
import Button1 from '../../../Buttons/homePage/Button1';
import StoryImg from '../../../assets/StorySectionImg.png';
function OurStory() {
  return (
   <>
    <section className='w-full   flex justify-center text-center md:text-left items-center overflow-hidden'>
        <div className='w-10/12    flex flex-row   md:justify-center md:items-center bg-amber-300'>
        
            <div className=' w-full md:w-6/12 md:flex  flex flex-col   h-full gap-[48px]'>

                <Topic title="Our Story" />
                 <div className='w-3/4 md:hidden flex justify-center items-center gap-24'>
                    <img
                        src={StoryImg}
                        alt="Our Story"
                        className="w-full  pt-0  gap-0 pb-10 scale-150"
                     />
                </div>
                <div className=' h-auto flex flex-col justify-center items-center gap-[32px] md:block'>
              

                  <div className="
                    text-[16px]
                    md:text-[18px]
                    lg:text-[20px]
                    leading-9
                    text-[#454545]
                    font-secondary
                    text-center
                    md:text-left
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
        <div className=' w-full md:w-6/12  h-full hidden md:flex  object-cover'>
            <img
                  src={StoryImg}
                  alt="Our Story"
                  className="w-full h-full  "
             />
        </div>
        </div>
    </section>
   </>
  )
}

export default OurStory
