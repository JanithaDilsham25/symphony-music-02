import fram  from "../assets/contactus/Frame300.png"
import fram1  from "../assets/contactus/Frame300mob.png"
import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

function ContactUs(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={fram} mobileImg={fram1}/>
        

       
        </>
    )
}

export default ContactUs