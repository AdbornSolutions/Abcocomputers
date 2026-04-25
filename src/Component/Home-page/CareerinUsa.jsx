import React from "react";

// CAREER IMAGES
import leftImg from "../../assets/home-page/Rectangle8.png";
import rightImg from "../../assets/home-page/Rectangle9.png";

const CareerinUsa = () => {
  return (
    <div className="w-full bg-[#020617] py-16 md:py-20 px-4 md:px-6 flex justify-center">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src={leftImg}
            alt="graduate"
            className="w-52 md:w-64 h-64 md:h-80 object-cover rounded-[80px] md:rounded-[120px]"
          />
        </div>

        {/* CENTER */}
        <div className="text-center max-w-xl text-white">
          
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[32px] leading-snug mb-4">
            Welcome to ABCO Computers: Your Gateway to a Promising Future!
          </h2>

          <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mt-6 mb-8">
            ABCO Computers is thrilled to present an extraordinary career
            opportunity in the United States, offering a fully funded master’s
            program for aspiring professionals. Imagine pursuing your higher
            education without worrying about financial constraints. With ABCO
            Computers, this dream can become a reality.
          </p>

          <button className="px-6 py-3 rounded-full bg-[#101826] text-white hover:bg-white/20 transition">
            Make Career In USA
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block">
          <img
            src={rightImg}
            alt="professional"
            className="w-52 md:w-64 h-64 md:h-80 object-cover rounded-[80px] md:rounded-[120px]"
          />
        </div>

      </div>
    </div>
  );
};

export default CareerinUsa;