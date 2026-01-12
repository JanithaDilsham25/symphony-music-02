import { Link } from "react-router-dom"

function OtherNavbar(){
    return(
        <>
        <div className="w-full h-[50px] bg-white flex flex-row justify-around items-center">
            <Link to="/" className="text-[16px] hidden lg:inline-block">Symphony Music Institute</Link>
            <div className="w-4/10 h-[60px] flex flex-row text-[14px] gap-6 items-center justify-evenly font-medium">
                <Link to="/classes" className="text-black hidden lg:inline-block">Classes</Link>
                <Link to="/events"  className="hidden lg:inline-block">Event</Link>
                <Link to="/gallery" className="hidden lg:inline-block">Gallery</Link>
                <Link to="/aboutus"  className="hidden lg:inline-block">About us</Link>
                <Link to="/contactus"className="hidden lg:inline-block">Contact us</Link>
                <Link className="sm:hidden">Button</Link>
            </div>
            
        </div>
        
        </>
    )
}

export default OtherNavbar