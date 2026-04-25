import React from "react";

// ===== DATA =====
const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Pune, India",
    text: "ABCO Computers completely transformed my IT career. The training was practical, mentors were supportive.",
  },
  {
    name: "Amit Kulkarni",
    location: "Nagpur, India",
    text: "Excellent IT training with real-world exposure. Placement support helped me start my career.",
  },
  {
    name: "Sneha Patil",
    location: "Mumbai, India",
    text: "Guidance and support were outstanding. Everything was transparent and structured.",
  },
  {
    name: "Rahul Mehta",
    location: "Ahmedabad, India",
    text: "Joined with no IT background, now working confidently in the field.",
  },
  {
    name: "Neha Verma",
    location: "Indore, India",
    text: "Mentors were approachable and placement support was genuine.",
  },
];

// duplicate for infinite loop
const loopData = [...testimonials, ...testimonials];

const Card = ({ name, location, text }) => (
  <div className="w-[320px] h-[180px] flex-shrink-0 
    bg-[#0b1220] p-5 rounded-[20px] border border-white/10 mr-6">

    <p className="text-gray-300 text-[12px] mb-4">
      “{text}”
    </p>

    <div className="flex items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-10 h-10 rounded-md"
      />

      <div>
        <h4 className="text-[13px]">{name}</h4>
        <p className="text-[11px] text-gray-400">{location}</p>
        <div className="text-yellow-400 text-[12px]">★★★★★</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="w-full bg-[#020617] py-20 px-4 flex justify-center">
      
      {/* 🔥 FULL WIDTH WRAPPER */}
      <div className="w-full relative overflow-hidden">

        <div className="max-w-6xl mx-auto text-center">

          {/* TAG */}
          <div className="inline-block px-5 py-2 mb-6 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/20 
            text-gray-300 text-sm shadow-sm">
            Testimonials
          </div>

          {/* HEADING */}
          <h2 className="text-[42px] font-medium 
          bg-[linear-gradient(90deg,_#FFFFFF_0.3%,_#2BD7D7_60%)] 
          bg-clip-text text-transparent">
            HERE IS WHAT OUR CLIENTS HAVE TO SAY
          </h2>

        </div>

        {/* ===== MARQUEE SECTION ===== */}
        <div className="mt-12">

          {/* ROW 1 */}
<div className="overflow-hidden">
  <div className="marquee-left">
    {loopData.map((item, i) => (
      <Card key={i} {...item} />
    ))}
  </div>
</div>

{/* ROW 2 */}
<div className="overflow-hidden mt-6">
  <div className="marquee-right">
    {loopData.map((item, i) => (
      <Card key={i} {...item} />
    ))}
  </div>
</div>

        </div>

        {/* 🔥 LEFT FADE (FLUID) */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[140px] md:w-[180px] 
        bg-gradient-to-r from-[#020617] to-transparent z-20"></div>

        {/* 🔥 RIGHT FADE (FLUID) */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[140px] md:w-[180px] 
        bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

      </div>
    </div>
  );
};

export default Testimonials;