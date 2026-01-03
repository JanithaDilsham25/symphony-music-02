import OtherNavbar from "../components/header/navBar/OtherNavbar";
import OtherHero from "../section/otherhero/OtherHero";

import event from "../assets/events/event.png"
import eventMob from "../assets/events/eventMob.png"
import eventTab from "../assets/events/eventTab.png"
import EventsSection from "../components/EventsPageComponents/EventsSection";

function Event() {
  return (
    <>
      <OtherNavbar />

      <OtherHero tabletImg={eventTab} mobileImg={eventMob} desktopImg={event} title={"Events"} subtitle={"Capturing moments of musical joy, growth, and achievement"}/>
      
      
      <EventsSection/>
    </>
  );
}

export default Event;
