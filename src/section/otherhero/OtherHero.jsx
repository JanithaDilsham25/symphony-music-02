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
        className="hidden sm:inline-flex lg:hidden w-full h-screen bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.tabletImg})`, backgroundSize: "100% auto"
        }}
      >

        <div className="flex flex-col gap-13 justify-center items-center">
          <p className="text-[6.8rem] font-primary text-white pt-30">{props.title}</p>
          <p className="text-[1.5rem] text-white">{props.subtitle}</p>
        </div>
      </div>

      {/* /Desktop hero */}
      <div
        className="hidden lg:inline-flex w-full h-screen bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.desktopImg})`, backgroundSize: "100% 100vh"
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[80px] font-primary text-white mt-20">{props.title}</p>
          <p className="text-[16px] text-white">{props.subtitle}</p>
        </div>
      </div>

      
    </>
  );
}

export default OtherHero;
