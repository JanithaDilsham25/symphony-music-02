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
        className="hidden sm:inline-flex xl:hidden w-full aspect-[1.706] bg-contain bg-no-repeat justify-center items-start bg-red-700"
        style={{
          backgroundImage: `url(${props.tabletImg})`, backgroundSize: "100% auto"
        }}
      >

        <div className="flex flex-col gap-5 justify-center items-center">
          <p className=" text-[7vw] font-primary text-white pt-20">{props.title}</p>
          <p className="text-[2vw] text-white">{props.subtitle}</p>
        </div>
      </div>

      {/* /Desktop hero */}
      <div
        className="hidden xl:inline-flex w-full h-[625px] bg-contain bg-no-repeat justify-center items-start bg-green-400"
        style={{
          backgroundImage: `url(${props.desktopImg})`, backgroundSize: "100% 110vh"
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
