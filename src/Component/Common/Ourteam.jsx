import React from "react";
import t1 from "../../assets/DepartmentPage/Ourteam/t1.png";
import t2 from "../../assets/DepartmentPage/Ourteam/t2.png";
import t3 from "../../assets/DepartmentPage/Ourteam/t3.png";

const team = [
  {
    img: t1,
    name: "Rahul Mehta",
    role: "Senior IT Consultant | 8+ yrs exp | Pune",
    desc: "Rahul is an experienced IT consultant specializing in enterprise solutions, cloud migration, and digital transformation strategies.",
  },
  {
    img: t2,
    name: "Priya Sharma",
    role: "Career Consultant | 7+ yrs exp | Pune",
    desc: "Priya specializes in guiding students and professionals through F1, H1B, and Green Card processes with strong career counseling.",
  },
  {
    img: t3,
    name: "Arjun Sharma",
    role: "Director | 10+ yrs exp | Pune",
    desc: "Arjun leads U.S. career programs, specializing in admissions, visa strategy, and job placement guidance.",
  },
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

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {team.map((member, index) => (
          <div
            key={index}
            className="group relative rounded-[20px] overflow-hidden cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={member.img}
              alt="team"
              className="w-full h-[360px] object-cover 
              grayscale group-hover:grayscale-0 
              transition duration-500"
            />

            {/* 🔥 OVERLAY */}
            <div
              className="absolute bottom-0 left-0 w-full 
              bg-gradient-to-t from-black/90 via-black/70 to-transparent 
              p-5 opacity-0 group-hover:opacity-100 
              translate-y-full group-hover:translate-y-0 
              transition duration-500"
            >

              <h3 className="text-[24px] font-semibold">
                {member.name}
              </h3>

              <p className="text-sm text-gray-300 mt-1">
                {member.role}
              </p>

              <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">
                {member.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default OurTeam;