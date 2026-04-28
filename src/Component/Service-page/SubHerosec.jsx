import React from "react";

// 👉 Figma image imports
import jobIcon from "../../assets/ServicePage/job-placement.png"
import counselingIcon from "../../assets/ServicePage/counseling.png";

const SubHerosec = () => {
  return (
    <section className="bg-[#060B14] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10">

        {/* LEFT HEADING */}
        <h2 className="text-[42px] font-medium 
          bg-[linear-gradient(90deg,_#FFFFFF_0.3%,_#2BD7D7_60%)] 
          bg-clip-text text-transparent">
          Successful Career <br />
          In USA
        </h2>

        {/* RIGHT DESCRIPTION */}
        <p className=" text-sm md:text-base max-w-xl">
          ABCO Computers supports individuals pursuing careers in the USA
          through fully funded master’s programs in IT, equipping students
          with advanced skills to succeed competitively.
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CARD 1 */}
        <div className="bg-[#0b1d2e] rounded-3xl p-6 md:p-7  hover:scale-[1.02] transition duration-300">

          {/* ICON + TITLE */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg">
              <img src={jobIcon} alt="Job Placement"  />
            </div>

            <h3 className="text-lg md:text-xl font-medium">
              Job Placement Assistance
            </h3>
          </div>

          {/* DESC */}
          <p className=" text-sm leading-relaxed mb-6">
            Our extensive network of industry partners enables us to guarantee job placement for our graduates.
            We provide guidance and support throughout the job search process, connecting students with exciting
            career opportunities in renowned IT firms across the USA.
          </p>

          {/* BUTTON */}
          <button className="text-sm border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl hover:bg-cyan-400 hover:text-black transition">
            Learn More →
          </button>

        </div>

        {/* CARD 2 */}
        <div className="bg-[#0b1d2e] rounded-3xl p-6 md:p-7  hover:scale-[1.02] transition duration-300">

          {/* ICON + TITLE */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg">
              <img src={counselingIcon} alt="Career Counseling"  />
            </div>

            <h3 className="text-lg md:text-xl font-medium">
              Career Counseling
            </h3>
          </div>

          {/* DESC */}
          <p className=" text-sm leading-relaxed mb-6">
            We offer personalized career counseling services to help individuals identify their strengths,
            interests, and career goals. Our experienced counselors provide guidance on career pathways,
            industry trends, and professional development, empowering individuals to make informed decisions
            about their career trajectories.
          </p>

          {/* BUTTON */}
          <button className="text-sm border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl hover:bg-cyan-400 hover:text-black transition">
            Learn More →
          </button>

        </div>

      </div>

    </section>
  );
};

export default SubHerosec;