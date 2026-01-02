import Student from "../components/body/topStudent/student";

import OurStory from "../components/body/ourstory/OurStory";
import ExpertSection from "../components/body/expert/ExpertSection";
import Navbar from "../components/header/navBar/Navbar";
import UpComingSlide from "../section/homepage/UpComingSlide";
import UpComingSection from "../section/homepage/UpComingSection";
export default function HomePage() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <OurStory />
        <ExpertSection />
        <Student />
        {/* <UpComingSection /> */}
        <div className="md:hidden">
          <UpComingSlide />
        </div>
      </div>

      {/* <UpCommingSection />
            <UpComingSlide /> */}
    </>
  );
}
