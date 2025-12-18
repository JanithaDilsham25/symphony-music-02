import AllSection from "../components/body/expertInstructors/AllSection";
import OurstorySection from "../components/body/ourstory/OurstorySection";
import Student from "../components/body/topStudent/student";
import Header from "../components/header/headercontent/cont";

export default function  HomePage(){
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Header />
                <OurstorySection/>
                <AllSection/>
                <Student/>
            </div>
        
        </>
    )
}