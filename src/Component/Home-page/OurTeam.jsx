import React from "react";

import teamBg from "../../assets/home-page/our-team-big.png";
import user1 from "../../assets/home-page/small1.png";
import user2 from "../../assets/home-page/small2.png";
import user3 from "../../assets/home-page/small3.png";
import user4 from "../../assets/home-page/small4.png";
import iconTeam from "../../assets/home-page/team-of-experticon.png";
import iconPersonal from "../../assets/home-page/team-of-2.png";

const OurTeam = () => {
  return (
    <div className="w-full bg-[#020617] py-16 flex justify-center px-4">

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-6xl rounded-2xl  overflow-hidden">

        {/* BACKGROUND IMAGE (NO OVERLAY) */}
        <img
          src={teamBg}
          alt="team"
          className="object-contain"
        />

        {/* TOP HEADER */}
      <div className="absolute top-4 left-6 right-6 flex justify-end items-center gap-4">

  {/* OUR TEAM TEXT */}
  <h1 className="text-white text-3xl md:text-4xl ">
  Our Team
</h1>

  {/* AVATARS */}
  <div className="flex items-center gap-2">
    
    <div className="flex -space-x-3">
      {[user1, user2, user3, user4].map((img, i) => (
        <img
          key={i}
          src={img}
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>

   <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-[18px]">
  ↘
</div>

  </div>

</div>

       {/* BOTTOM FLOATING SECTION */}
<div className="absolute bottom-[20px] left-4 right-6 md:left-12 md:right-12">

  {/* TAG */}
  <div className="inline-block text-white text-[13px] 
  bg-white/10 backdrop-blur-md 
  px-5 py-2 rounded-xl 
  border border-white/30 
  shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-3">
    Why Choose Us
  </div>

  {/* ROW */}
  <div className="flex flex-col md:flex-row items-end justify-between w-full gap-2">

  {/* LEFT CARD */}
  <div className="bg-[#0f172a] text-white px-5 py-4 rounded-xl 
  w-full md:w-[250px] h-[100px] flex items-center">
    <h3 className="text-[25px] font-semibold leading-tight">
      Our <br /> Advantages
    </h3>
  </div>

  {/* RIGHT CARDS */}
  <div className="flex flex-col sm:flex-row gap-2 
  w-full md:w-auto md:ml-auto md:mt-[-20px]">

   {/* CARD 1 */}
<div className="bg-[#f3f4f6] text-black px-5 py-5 rounded-[24px] 
w-full sm:w-[280px] h-[120px] flex flex-col justify-center shadow-md">

  {/* ICON + HEADING */}
  <div className="flex items-center gap-3 mb-1">

    <img 
      src={iconTeam} 
      alt="team icon" 
      className="w-8 h-8 object-contain"
    />

    <h4 className="text-[22px] ">
      Team Of Experts
    </h4>

  </div>

  {/* TEXT */}
  <h6
   className="text-[14px] text-gray-600 leading-snug">
    Our expert team delivers cutting-edge solutions for your success.
  </h6>

</div>


{/* CARD 2 */}
<div className="bg-[#f3f4f6] text-black px-5 py-5 rounded-[24px]
w-full sm:w-[280px] h-[120px] flex flex-col justify-center shadow-md">

  {/* ICON + HEADING */}
  <div className="flex items-center gap-3 mb-1">

    <img 
      src={iconPersonal} 
      alt="personalization icon" 
      className="w-8 h-8 object-contain"
    />

    <h4 className="text-[22px] ">
      Personalization
    </h4>

  </div>

  {/* TEXT */}
  <h6 className="text-[14px] text-gray-600 leading-snug">
    Tailored solutions ensuring a perfect fit for your needs.
  </h6>

</div>

  </div>

</div>
</div>

      </div>

      {/* SPACE BELOW FOR FLOAT EFFECT */}
      <div className="h-10"></div>

    </div>
  );
};

export default OurTeam;