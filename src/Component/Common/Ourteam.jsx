import React from "react";
import t1 from "../../assets/DepartmentPage/Ourteam/t1.png";
import t2 from "../../assets/DepartmentPage/Ourteam/t2.png";
import t3 from "../../assets/DepartmentPage/Ourteam/t3.png";

const team = [
  { img: t1 },
  { img: t2 },
  { img: t3 },
];

const OurTeam = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 md:px-10 lg:px-20">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm">
          Our Team
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[26px] sm:text-[32px] md:text-[42px] font-semibold">
          Experts Behind the Innovation
        </h2>
      </div>

      {/* TEAM CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden 
            bg-[#0b1220] border border-white/10 
            hover:scale-105 transition duration-300"
          >
            <img
              src={member.img}
              alt="team"
              className="w-full h-[300px] md:h-[340px] object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default OurTeam;