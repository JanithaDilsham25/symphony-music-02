import { Link } from "react-router-dom";

export default function Navbar() {
  const NavigationButton = ({ text, to }) => {
    return (
      <Link to={to} className=" text-white hover:text-primary flex items-center justify-center px-3  gap-2  transition-colors duration-300">
        <span className="font-secondary font-medium md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] leading-6 lg:leading-9">
          {text}
        </span>
      </Link>
    );
  };

  return (
    <nav
      className=" flex items-center justify-center w-full px-8 py-3 xl:px-5 xl:py-3 gap-2 xl:gap-3
        
        
      "
    >
      <NavigationButton text="Classes" to="/classes"/>
      <NavigationButton text="Events" to="/events"/>
      <NavigationButton text="Gallery" to="/gallery"/>
      <NavigationButton text="About Us" to="/aboutus"/>
      <NavigationButton text="Contact Us" to="/contactus"/>
    </nav>
  );
}
