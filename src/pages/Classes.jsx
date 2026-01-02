import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

import classesTab from "../assets/classes/classesTab.png"
import classes from "../assets/classes/classes.png"
import classesMob from "../assets/classes/classesMob.png"

function Classes(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={classesTab} mobileImg={classesMob} desktopImg={classes} title={"Our Classes"} subtitle={"Capturing moments of musical joy, growth, and achievement"}/>
        {/* <OtherHero mobileImg={frame1} /> */}

       
        </>
    )
}

export default Classes