
import Student from "../components/body/topStudent/student"
import UpCommingCard from "../components/body/upCommingEvents/UpComingCard"
import Header from "../components/header/headerContent/Header"
import UpComingSlide from "../section/homepage/UpComingSlide"
import UpCommingSection from "../section/homepage/UpCommingSection"


export default function  HomePage(){
    return (
        <>
            <Header />
            
            <div className="hidden md:flex">
                <UpCommingSection />
            </div>

            <div className="md:hidden">
                <UpComingSlide />
            </div>
            <UpCommingSection />
            {/* <UpComingSlide /> */}

            
                
            
        </>
    )
}