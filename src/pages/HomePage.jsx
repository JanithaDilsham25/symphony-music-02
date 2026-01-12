import Student from "../components/body/topStudent/student";

import OurStory from "../components/body/ourstory/OurStory";
import ExpertSection from "../components/body/expert/ExpertSection";
import Navbar from "../components/header/navBar/Navbar";
import UpComingSlide from "../section/homepage/UpComingSlide";
import UpComingSection from "../section/homepage/UpComingSection";
import Header from "../components/header/Header";
import ClassCartSet from "../components/body/joinOurClasses/classCartSet";
import Story from "../section/story/Story";
import Reveal from "../animation/Reveal";
import Footer from "../section/Footer";
export default function HomePage() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />
        <Reveal direction="top">
          <OurStory />
        </Reveal>

       
        <Reveal direction="right">
           <ExpertSection />
          {/* <Story /> */}
        </Reveal>

        <Reveal>
          <Student />
        </Reveal>

        <Reveal>
          <ClassCartSet />
        </Reveal>

        
          <div className="hidden md:inline-block">
            <Reveal>
              <UpComingSection />
            </Reveal>

            <div className="sm:hidden">
              <Reveal>
                <UpComingSlide />
              </Reveal>
            </div>
            
          </div>
        

        <Reveal>
          <div className="md:hidden">
            <UpComingSlide />
          </div>
        </Reveal>
        <Footer />
      </div>
    </>
  );
}
