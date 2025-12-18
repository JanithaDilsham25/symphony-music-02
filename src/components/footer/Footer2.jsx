import React from "react";
import vector3 from "../footer/Images/Vector 3.png";
import vector4 from "../footer/Images/Vector 4.png";
import symponylogo from "../footer/Images/Frame 90.png";

function Footer2() {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* Background Layer 1 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${vector3})` }}
      />

      {/* Background Layer 2 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${vector4})` }}
      />

      {/* 🟧 ORANGE CONTAINER */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto px-
          min-h-[600px]
          flex flex-col
        "
      >

        {/* ✅ WRAPPER that pushes BOTH blue + black DOWN */}
        <div className="mt-auto">

          {/* 🟦 BLUE CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left ">

            {/* Logo + About */}
            <div className=" text-center flex flex-col justify-center items-center  h-60">
              
              <img 
                src={symponylogo}
                alt="Symphony Music Institute"
                className="mx-auto md:mx-0 w-55 mb-6 h-45 "
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Inspiring musical excellence and creativity since 2010.
                Join us and unleash your musical talent.
              </p>
            </div>

            {/* Contact */}
            <div className=" text-center ">
              <h3 className="text-yellow-400 font-semibold mb-4 ">
                Contact Us
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                <li>info@harmonymusic.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Music Avenue, Harmony City</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className=" text-center">
              <h3 className="text-yellow-400 font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                <li>Home</li>
                <li>Classes</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>

          {/* ⬛ BLACK FOOTER BAR */}
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm ">
            © 2025 Symphony Music Institute
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer2;
