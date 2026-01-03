import React from 'react'
import Topic from '../topicComponent/Topic'
import Button1 from '../../../Buttons/homePage/Button1';
import StoryImg from '../../../assets/StorySectionImg.png';

function OurStory() {
  return (
   <>
    <section className='w-full flex justify-center text-center lg:text-left items-center overflow-hidden pt-9 pb-9 mb-8 md:p-5 p-5'>
        <div className='xl:w-10/12 w-full flex flex-row xl:justify-center xl:items-center lg:ml-5  pb-20'>
        
            <div className='w-full xl:w-6/12 xl:flex flex flex-col h-full xl:gap-[48px] justify-center items-center xl:items-start'>
              
              <div className='w-full md:w-1/2 xl:w-6/12 flex flex-col justify-center items-center'>
                
                {/* ✅ FIXED HERE */}
                <div className='flex justify-center items-center xl:justify-start xl:items-start text-center xl:text-left w-full'>
                  <Topic title="Our Story" />
                </div>
                
                <div className='xl:hidden w-full flex justify-center items-center -mt-12 md:-mt-16 '>
                  <img
                    src={StoryImg}
                    alt="Our Story"
                    className="w-full object-contain max-w-[320px] md:max-w-[600px]"
                  />
                </div>

              </div>
                
              <div className='flex flex-col justify-center items-center gap-[32px] xl:block'>
                <div
                  className="
                    text-[1rem]
                    md:text-[1.125rem]
                    xl:text-[1.25rem]
                    xl:leading-9
                    md:leading-7
                    text-[#454545]
                    font-secondary
                    text-center
                    xl:text-left
                    xl:mb-6
                  "
                >
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

            <div className='w-full h-full  xl:w-6/12 hidden xl:flex object-cover '>
              <img
                src={StoryImg}
                alt="Our Story"
                className="w-full object-contain max-w-full scale-125"
              />
            </div>

        </div>
    </section>
   </>
  )
}

export default OurStory
