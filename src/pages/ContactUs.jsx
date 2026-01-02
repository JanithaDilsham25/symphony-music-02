import fram  from "../assets/contactus/Frame300.png"
import fram1  from "../assets/contactus/Frame300mob.png"
import contactTab  from "../assets/contactus/contactTab.png"
import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

function ContactUs(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={contactTab} mobileImg={fram1} desktopImg={fram} title={"Contact Us"} subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        

       
        </>
    )
}

export default ContactUs