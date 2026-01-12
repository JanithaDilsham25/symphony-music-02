
import mask from "../../assets/header/mask.png"

import logo from "../../assets/header/logo.png"
import Navbar from "./navBar/Navbar";
import Button1 from "../../Buttons/homePage/Button1";
import HomePageBtn from "../../buttons/homepage/HomePageBtn";
import maskTab from "../../assets/header/maskTab.png";
import maskMobile from "../../assets/header/maskMobile.png"
import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <>
      {/* Mobile  */}
      <section className="sm:hidden w-full aspect-[0.643] justify-center items-center">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${maskMobile})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-4xl  text-white m-5">Start Your Musical</div>
          <div className="font-primary text-4xl  text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>

      {/* Tablet  */}
      <section className="hidden sm:inline-flex xl:hidden w-full aspect-[1.94/1.4] justify-center items-center bg-green-400">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${maskTab})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-5"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-5xl text-white m-5">Start Your Musical</div>
          <div className="font-primary text-5xl text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>

      {/* Web */}
      <section className="hidden xl:inline-flex w-full h-screen justify-center items-center">
        <div
          className="w-full h-[103vh] absolute z-1 top-0 bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${mask})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-40 h-40 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-7xl text-white m-5">Start Your Musical</div>
          <div className="font-primary text-7xl text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>
    </>
  );
}

export default Header;
