import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"
import frame from "../assets/Frame229.png"
import frame1 from "../assets/Frame229k.png"

function AboutUs(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={frame} mobileImg={frame1}/>
        {/* <OtherHero mobileImg={frame1} /> */}

       
        </>
    )
}

export default AboutUs