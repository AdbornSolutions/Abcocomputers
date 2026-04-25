import React from "react";
import logo from "../assets/common-images/abco-logo.png";

import phoneIcon from "../assets/common-images/phone.png";
import mailIcon from "../assets/common-images/mail.png";
import mapIcon from "../assets/common-images/map.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#071a2f] to-[#0c2746] text-white px-4 sm:px-6 md:px-10 py-10">

  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

    {/* LEFT */}
    <div>
      
      <img
        src={logo}
        alt="ABCO Computers"
        className="h-10 sm:h-12 mb-4"
      />

      <p className="text-[13px] leading-relaxed mb-5">
        ABCO Computers supports aspiring IT professionals with skill-based
        training, guidance, and career opportunities to succeed in the
        global tech industry.
      </p>

      <div className="w-full h-[1px] bg-white mb-5 opacity-40"></div>

      <div className="space-y-4 text-[13px]">

        <div className="flex items-center gap-3">
          <img src={phoneIcon} className="w-5 h-5" />
          <span>+91-9370181988</span>
        </div>

        <div className="flex items-center gap-3">
          <img src={mailIcon} className="w-5 h-5" />
          <span className="break-all">hr-manager@abcocomputers.com</span>
        </div>

        <div className="flex items-start gap-3">
          <img src={mapIcon} className="w-5 h-5 mt-1" />
          <span className="text-[12px]">
            Plot No.47, 3rd Floor, Katol Road, Khamla <br />
            Nagpur, Maharashtra, 440023 India.
          </span>
        </div>

      </div>
    </div>

    {/* MENU */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Menu</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li className="hover:text-[#2BD7D7] cursor-pointer">Home</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">About us</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Services</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Department</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Learning</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Contact us</li>
      </ul>
    </div>

    {/* EXPLORE */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Explore</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li className="hover:text-[#2BD7D7] cursor-pointer">Careers</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Blogs</li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">Success Stories</li>
      </ul>
    </div>

    {/* POLICIES */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Policies</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li className="hover:text-[#2BD7D7] cursor-pointer">
          Term & Condition
        </li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">
          Privacy Policy
        </li>
        <li className="hover:text-[#2BD7D7] cursor-pointer">
          Refund & Return Policy
        </li>
      </ul>
    </div>

  </div>
</footer>
  );
};

export default Footer;