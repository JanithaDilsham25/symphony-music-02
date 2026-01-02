import Framegal from "../assets/gallery/Framegal.png"
import FrameGal from "../assets/gallery/FrameGal00.png"
import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"
import galleryTab from "../assets/gallery/galleryTab.png"

function Gallery(){
    return(
         <>
        <OtherNavbar />
        
        <OtherHero desktopImg={FrameGal} mobileImg={Framegal} tabletImg={galleryTab}/>
        {/* <OtherHero mobileImg={frame1} /> */}

       
        </>
    )
}

export default Gallery