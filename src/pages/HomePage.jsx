
import UpCommingCard from "../components/body/upCommingEvents/UpComingCard"
import UpComingSlide from "../section/homepage/UpComingSlide"
import UpCommingSection from "../section/homepage/UpCommingSection"


export default function  HomePage(){
    return (
        <>
            <div className="hidden sm:flex">
                <UpCommingSection />
            </div>

            <div className="flex sm:hidden">
                <UpComingSlide />
            </div>

            
                
            
        </>
    )
}