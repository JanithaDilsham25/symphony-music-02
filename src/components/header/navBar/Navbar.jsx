// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const NavigationButton = ({ text, to }) => {
//     return (
//       <Link to={to} className=" text-white hover:text-primary flex items-center justify-center px-3  gap-2  transition-colors duration-300">
//         <span className="font-secondary font-medium md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] leading-6 lg:leading-9">
//           {text}
//         </span>
//       </Link>
//     );
//   };

//   return (
//     <nav
//       className=" flex items-center justify-center w-full px-8 py-3 xl:px-5 xl:py-3 gap-2 xl:gap-3
        
        
//       "
//     >
//       <NavigationButton text="Classes" to="/classes"/>
//       <NavigationButton text="Events" to="/events"/>
//       <NavigationButton text="Gallery" to="/gallery"/>
//       <NavigationButton text="About Us" to="/aboutus"/>
//       <NavigationButton text="Contact Us" to="/contactus"/>
//     </nav>
//   );
// }
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <div className="w-full h-[50px] flex flex-row justify-center items-center text-[15px]  text-white gap-10">
            <Link to="/classes" className="hover:text-orange-300">Classes</Link>
            <Link to="/events" className="hover:text-orange-300">Events</Link>
            <Link to="/gallery" className="hover:text-orange-300">Gallery</Link>
            <Link to="/aboutus" className="hover:text-orange-300">About Us</Link>
            <Link to="/contactus" className="hover:text-orange-300">Contact Us</Link>
        </div>
        </>
    )
}

export default Navbar