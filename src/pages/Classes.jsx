import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"
import contact from "../assets/classes/Frame301.png"
import contactmob from "../assets/classes/Frame301mob.png"

function Classes(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={contact} mobileImg={contactmob}/>
        {/* <OtherHero mobileImg={frame1} /> */}

       
        </>
    )
}

export default Classes