import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

import aboutTab from "../assets/aboutus/aboutTab.png"
import aboutMob from "../assets/aboutus/aboutMob.png"
import about from "../assets/aboutus/about.png"

function AboutUs(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={aboutTab} mobileImg={aboutMob} desktopImg={about} />
        

       
        </>
    )
}

export default AboutUs