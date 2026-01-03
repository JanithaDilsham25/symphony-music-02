import principle from "../../../assets/principle.png";
import Topic from "../topicComponent/Topic";

export default function PrinciplaMessage() {
  return (
    <> 
    <div className="w-full mt-10">
            <div className="flex justify-center">
                <Topic
                    title="Principle’s Message"
                    subtitle=""
                />
            </div>
            <div className="w-full flex justify-center m-4">
                <div className="lg:w-[70vw] flex lg:flex-row flex-col  gap-6">
                    <div className="w-full lg:w-[20vw] lg:block flex justify-center  ">
                    
                        <img  src={principle} className=" md:w-[38vw] sm:w-[40vw] w-[50vw] object-cover"/>
                        
                    </div>
                    <div className="lg:w-[50vw] w-[92vw] lg:text-[16px] xl:text-[20px] lg:block flex flex-col text-center lg:text-start gap-3">
                        <div className="flex flex-col gap-3">
                            <div>
                                <p>Founded in 2010, Harmony Music School began with a simple mission: to make quality music education accessible to everyone. What started as a small studio with just three teachers has grown into one of the region's premier music institutions.</p>
                            </div>
                            <div>
                                <p>We believe that music is a universal language that transcends boundaries and enriches lives. Our dedicated team of professional musicians and educators work tirelessly to nurture talent, build confidence, and inspire a lifelong love of music.</p>
                            </div>
                            <div>
                                <p>Founded in 2010, Harmony Music School began with a simple mission: to make quality music education accessible to everyone. What started as a small studio with just three teachers has grown into one of the region's premier music</p>
                            </div>
                            <div>
                                <p>Founded in 2010, Harmony Music School began with a simple mission: to make quality music education accessible to everyone. What started as a small studio with just three teachers has grown into one of the region's premier music institutions.</p>

                            </div>
                            

                        </div>
                        <div>
                            <p className="font-bold">
                                Mr. Sarah Johnson
                            </p>

                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
    )   
}