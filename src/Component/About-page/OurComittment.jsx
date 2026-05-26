import React from "react";

const OurCommitment = () => {
  const timelineItems = [
    {
      side: "right",
      title: "Choose ABCO Computers",
      text: "Choose ABCO Computers for trusted IT consulting, career guidance, staffing solutions, and technology support. We combine industry expertise, personalized service, and a result-driven approach to help clients and candidates achieve success."
    },
    {
      side: "left",
      title: "Our Approach",
      text: "At ABCO Computers, our approach is focused on understanding each client’s goals and every candidate’s career needs. We deliver practical IT solutions, career guidance, staffing support, and technology services that create long-term value and measurable growth."
    },
    {
      side: "right",
      title: "Our Team",
      text: "Our team includes experienced IT consultants, recruiters, mentors, and technology professionals who work together to deliver smart solutions, reliable support, and career-focused services for individuals and businesses."
    },
    {
      side: "left",
      title: "Talent Connectors",
      text : "Building strong connections is at the heart of our work. ABCO Computers connects skilled IT professionals with the right career opportunities while helping companies find qualified, job-ready technology talent for their business needs."
    },
    {
      side: "right",
      title: "Beyond Staffing",
      text: "Beyond traditional staffing, ABCO Computers offers complete technology and career solutions, including IT consulting, software support, training guidance, visa process support, and USA job placement assistance."
    },
    {
      side: "left",
      title: "Agile Workforce Solutions",
      text: "ABCO Computers provides flexible workforce solutions that help businesses hire skilled professionals for project-based, contract, and long-term roles. Our agile staffing approach supports faster hiring, better productivity, and smooth business operations."
    },
  ];
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      

      {/* ===== HEADING ===== */}
      <div className="mb-10">
        <p className="text-white text-[16px] sm:text-[34px] mb-2">Our</p>

        <h2 className="text-[32px] sm:text-[48px] md:text-[56px] font-medium leading-tight 
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
        <div className="relative mt-6 md:-mt-32">

  {/* CENTER LINE */}
  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 
  w-[2px] md:w-[5px] bg-white md:-translate-x-1/2"></div>

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
        left-4 md:left-1/2 
        -translate-x-1/2 
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
