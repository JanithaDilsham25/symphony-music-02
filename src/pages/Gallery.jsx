import Framegal from "../assets/gallery/Framegal.png"
import FrameGal from "../assets/gallery/FrameGal00.png"
import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

function Gallery(){
    return(
         <>
        <OtherNavbar />
        
        <OtherHero tabletImg={FrameGal} mobileImg={Framegal}/>
        {/* <OtherHero mobileImg={frame1} /> */}

       
        </>
    )
}

export default Gallery