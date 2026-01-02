import Student from "../components/body/topStudent/student";

import OurStory from "../components/body/ourstory/OurStory";
import ExpertSection from "../components/body/expert/ExpertSection";
import Navbar from "../components/header/navBar/Navbar";
export default function  HomePage(){
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Navbar />
                <OurStory/>
                <ExpertSection/>
                <Student/>
            </div>
        
{/* 
            <div className="md:hidden">
                <UpComingSlide />
            </div>
            <UpCommingSection />
            <UpComingSlide />

            
                
            
        </>
    )
}