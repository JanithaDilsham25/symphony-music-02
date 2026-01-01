import OtherNavbar from "../../components/header/navBar/OtherNavbar";

function OtherHero(props) {
  return (
    <>
      {/* Mobile hero */}
      <div
        className="block sm:hidden w-full h-[100vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${props.mobileImg})`,
        }}
      ></div>

      {/* Tablet/Desktop hero */}
      <div
        className="hidden sm:block w-full h-[100vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${props.tabletImg})`, backgroundSize: "100% 120vh"
        }}
      ></div>

      
    </>
  );
}

export default OtherHero;
