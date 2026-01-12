import OtherNavbar from "../components/header/navBar/OtherNavbar"
import OtherHero from "../section/otherhero/OtherHero"

import aboutTab from "../assets/aboutus/aboutTab.png"
import aboutMob from "../assets/aboutus/aboutMob.png"
import about from "../assets/aboutus/about.png"
import StaffSection from "../components/body/meetOurStaff/staffSection"
import AboutOurStory from "../components/aboutpage(our story)/AboutOurStory"
import PrinciplaMessage from "../components/body/principleMessage/principlaMessage"
import Footer from "../section/Footer";
import AchievementCartSet from "../components/body/achievementcarts/achievementCartSet"
function AboutUs(){
    return(
        <>
        <OtherNavbar />
        
        <OtherHero tabletImg={aboutTab} mobileImg={aboutMob} desktopImg={about} title={"About Harmony"} subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        {/* <AchievementCartSet /> */}
        <AboutOurStory />
        <PrinciplaMessage />
        <StaffSection />
        <Footer />
        </>
    )
}

export default AboutUs