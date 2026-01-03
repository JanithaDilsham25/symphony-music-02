
import { Link } from "react-router-dom";



export default function Nav2(){


    return(
        <>
            <div className="lg:flex flex-row justify-between px-[10vw] sm:hidden h-[90px]  ">
                <div className="flex flex-col leading-tight justify-center  text-center">
                        <span className="text-[32px] font-bold text-[#E26200]">Symphony</span>
                        <span className="text-[22px] text-[#454545]">Music Institute</span>
                </div>
                <div className=" text-black text-[24px] font-medium flex flex-row items-center">
                    <Link to="#" className="hover:text-primary px-[20px] py-[12px] ">
                        Classes
                    </Link>

                    <Link to="#" className="hover:text-primary px-[20px] py-[12px]">
                        Events
                    </Link>

                    <Link to="#" className="hover:text-primary px-[20px] py-[12px]">
                        Gallery
                    </Link>

                    <Link to="#" className="hover:text-primary px-[20px] py-[12px] ">
                        About Us
                    </Link>

                    <Link to="#" className="hover:text-primary px-[20px] py-[12px]">
                        Contact Us
                    </Link>   

                </div>
            </div>
        </>
    )
}