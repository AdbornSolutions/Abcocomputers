import React from "react";
import logo from "../assets/common-images/abco-logo.png";

import phoneIcon from "../assets/common-images/phone.png";
import mailIcon from "../assets/common-images/mail.png";
import mapIcon from "../assets/common-images/map.png";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#071a2f] to-[#0c2746] text-white px-10 py-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">

        {/* LEFT */}
        <div>
          {/* LOGO */}
          <img
            src={logo}
            alt="ABCO Computers"
            className="h-12 mb-4"
          />

          {/* TEXT */}
          <p className="text-[13px] text-white leading-relaxed mb-5 max-w-xs">
            ABCO Computers supports aspiring IT professionals with skill-based
            training, guidance, and career opportunities to succeed in the
            global tech industry.
          </p>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-white mb-5"></div>

          {/* CONTACT */}
          <div className="space-y-4 text-[13px] text-white ">

            <div className="flex items-center gap-3">
              <div className=" flex items-center justify-center 
   ">
                <img src={phoneIcon} alt="phone" className="w-12 h-10 object-contain" />
              </div>
              <span>+91-9370181988</span>
            </div>

            <div className="flex items-center gap-3">
              <div className=" flex items-center justify-center 
  rounded-full ">
                <img src={mailIcon} alt="mail" className="w-12 h-10 object-contain" />
              </div>
              <span>hr-manager@abcocomputers.com</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center 
  rounded-full bg-white mt-1">
                <img src={mapIcon} alt="location" className="w-12 h-10 object-contain" />
              </div>
              <span className="leading-relaxed">
                Plot No.47, 3rd Floor, Katol Road, Khamla <br />
                Nagpur, Maharashtra, 440023 India.
              </span>
            </div>

          </div>
        </div>

        {/* MENU */}
      <div >
          <h3 className="text-[22px] font-semibold mb-5">Menu</h3>
          <ul className="space-y-3 text-[15px] text-white ">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Department</li>
            <li className="hover:text-white cursor-pointer">Learning</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* EXPLORE */}
    <div>
          <h3 className="text-[22px] font-semibold mb-5">Explore</h3>
          <ul className="space-y-3 text-[15px] text-white">
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
          </ul>
        </div>

        {/* POLICIES */}
       <div>
          <h3 className="text-[22px] font-semibold mb-5">Policies</h3>
          <ul className="space-y-3 text-[15px] text-white ">
            <li className="hover:text-white cursor-pointer">
              Term & Condition
            </li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Refund & Return Policy
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;