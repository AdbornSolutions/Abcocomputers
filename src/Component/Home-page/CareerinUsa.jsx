import React from "react";
import leftImg from "../../assets/home-page/Rectangle8.png";
import rightImg from "../../assets/home-page/Rectangle9.png";

const CareerinUsa = () => {
  return (
    <div className="w-full bg-[#020617] py-20 px-6 flex justify-center">

      <div className="w-full max-w-6xl flex items-center justify-between gap-10">

        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src={leftImg}
            alt="graduate"
            className="w-64 h-80 object-cover rounded-[120px]"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center max-w-xl text-white">

          <h2 className="font-heading text-[28px] md:text-[32px] leading-tight mb-4">
            Welcome to ABCO Computers: Your Gateway to a Promising Future!
          </h2>

          <p className="text-gray-300 text-[15px] leading-[1.6] font-body">
            ABCO Computers is thrilled to present an extraordinary career opportunity in the United States, offering a fully funded master’s program for aspiring professionals. Imagine pursuing your higher education without worrying about financial constraints. With ABCO Computers, this dream can become a reality.
          </p>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 rounded-full 
              bg-white/10 backdrop-blur-md 
              border-t border-white/60
              text-white font-heading text-[16px]
              shadow-[inset_0_-1.5px_0_rgba(255,255,255,0.6)]
              hover:bg-white/20 transition duration-300">
              Make Career In USA
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block">
          <img
            src={rightImg}
            alt="professional"
            className="w-64 h-80 object-cover rounded-[120px]"
          />
        </div>

      </div>
    </div>
  );
};

export default CareerinUsa;