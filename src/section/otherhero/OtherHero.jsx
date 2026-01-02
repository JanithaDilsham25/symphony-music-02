import OtherNavbar from "../../components/header/navBar/OtherNavbar";

function OtherHero(props) {
  return (
    <>
      {/* Mobile hero */}
      <div
        className="block sm:hidden w-full h-screen bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${props.mobileImg})`,
        }}
      ></div>

      {/* Tablet hero */}
      <div
        className="hidden sm:block lg:hidden w-full h-screen bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${props.tabletImg})`, backgroundSize: "100% 120vh"
        }}
      ></div>

      {/* /Desktop hero */}
      <div
        className="hidden lg:block w-full h-screen bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${props.desktopImg})`, backgroundSize: "100% 120vh"
        }}
      ></div>

      
    </>
  );
}

export default OtherHero;
