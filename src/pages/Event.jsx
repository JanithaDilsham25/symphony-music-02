import OtherNavbar from "../components/header/navBar/OtherNavbar";
import OtherHero from "../section/otherhero/OtherHero";

import event from "../assets/events/event.png"
import eventMob from "../assets/events/eventMob.png"
import eventTab from "../assets/events/eventTab.png"

function Event() {
  return (
    <>
      <OtherNavbar />

      <OtherHero tabletImg={eventTab} mobileImg={eventMob} desktopImg={event}/>
    </>
  );
}

export default Event;
