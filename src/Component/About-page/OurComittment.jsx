import React from "react";

const OurCommitment = () => {
  const timelineItems = [
    {
      side: "right",
      title: "Choose ABCO Computers",
      text: "Our vast network of highly skilled IT professionals enables us to connect you with the best talent in the industry. We carefully screen and evaluate candidates to ensure they possess the skills, qualifications, and cultural fit that align with your organization."
    },
    {
      side: "left",
      title: "Our Expertise",
      text: "At ABCO Computers, we believe in a collaborative approach. By working closely with our clients, we gain a deep understanding of their unique needs and objectives. Our insightful industry knowledge and expertise enable us to deliver tailored staffing solutions that drive real results. Trust us to be your strategic partner in IT staffing."
    },
    {
      side: "right",
      title: "Our Team",
      text: "Our team at ABCO Computers is made up of passionate and experienced professionals who are dedicated to your success. We go above and beyond to connect you with the best IT talent and provide exceptional service at every step. Let our commitment and expertise propel your business forward."
    },
    {
      side: "left",
      title: "Talent Connectors",
      text : "Building Bridges Between IT Talent and Opportunities At ABCO Computers, we are talent connectors, specializing in matching exceptional IT professionals with the right opportunities. With our extensive network and expertise, we create meaningful connections that drive success for both candidates and organizations."
    },
    {
      side: "right",
      title: "Beyond Staffing",
      text: "Delivering Comprehensive IT Solutions ABCO Computers goes beyond staffing. We offer comprehensive IT solutions to meet your evolving needs. From project-based staffing to managed services, we provide end-to-end solutions that optimize your IT capabilities and drive sustainable growth."
    },
    {
      side: "left",
      title: "Agile Workforce Solutions",
      text: "Adapting to Your Dynamic IT Staffing Needs In today’s rapidly changing IT landscape, agility is key. ABCO Computers provides flexible and scalable workforce solutions that adapt to your evolving staffing needs. Whether you require short-term contractors or long-term placements, we have you covered. Our expertise ensures that you always have the right talent at the right time, driving your business forward."
    },
  ];
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      

      {/* ===== HEADING ===== */}
      <div className="mb-10">
        <p className="text-white text-[16px] sm:text-[34px] mb-2">Our</p>

        <h2 className="text-[40px] sm:text-[56px] md:text-[56px] font-medium leading-tight 
        bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_30%)] 
        bg-clip-text text-transparent">
          Commitment to Excellence
        </h2>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid lg:grid-cols-2 gap-2 items-center ">

        {/* ===== LEFT SHAPES ===== */}
        <div className="hidden lg:flex justify-center ">
          <div className="grid grid-cols-2 gap-5">

            <div className="flex flex-col gap-8 items-center">
              <div className="w-[207px] h-[378px] bg-[#FFFF] rounded-full" />
              <div className="w-[219px] h-[219px] bg-[#FFFF] rounded-full" />
            </div>

            <div className="flex flex-col gap-8 items-center -mt-16">
              <div className="w-[219px] h-[219px] bg-[#FFFF] rounded-full" />
              <div className="w-[207px] h-[378px] bg-[#FFFF] rounded-full" />
            </div>

          </div>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative -mt-10 md:-mt-32">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 md:left-1/2 left-4 top-0 bottom-0 
  w-[2px] md:w-[5px] bg-white -translate-x-1/2 md:translate-x-0"></div>

  {timelineItems.map((item, i) => (
    <div
      key={i}
      className={`relative flex items-start mb-10 
      md:items-center
      ${
        item.side === "right"
          ? "md:justify-start md:pl-[55%]"
          : "md:justify-end md:pr-[55%]"
      }`}
    >

      {/* DOT */}
      <div className="absolute 
        left-1/2 md:left-1/2 
        -translate-x-1/2 md:-translate-x-1/2 
        w-[12px] h-[12px] md:w-[20px] md:h-[20px] 
        bg-black border-2 md:border-4 rounded-full z-10"
      />

      {/* CONTENT */}
      <div className="ml-10 md:ml-0 max-w-[90%] sm:max-w-[260px] text-left">

        <h3 className="text-[14px] sm:text-[18px] font-semibold mb-1">
          {item.title}
        </h3>

        <p className="text-gray-400 text-[10px] sm:text-[10px] md:text-[10px] leading-relaxed">
          {item.text}
        </p>

      </div>

    </div>
  ))}

</div>

      </div>
      
    </section>
    
  );
};

export default OurCommitment;