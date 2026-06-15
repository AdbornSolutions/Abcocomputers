import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card1 from "../../assets/DepartmentPage/Departmentscard/1.png";
import Card2 from "../../assets/DepartmentPage/Departmentscard/2.png";
import Card3 from "../../assets/DepartmentPage/Departmentscard/3.png";
import Card4 from "../../assets/DepartmentPage/Departmentscard/4.png";
import Card5 from "../../assets/DepartmentPage/Departmentscard/5.png";
import Card6 from "../../assets/DepartmentPage/Departmentscard/6.png";
import Card7 from "../../assets/DepartmentPage/Departmentscard/7.png";
import Card8 from "../../assets/DepartmentPage/Departmentscard/8.png";

const departments = [
  {
    icon: Card1,
    title: "HR & Onboarding Department",
    desc: "Manages recruitment coordination, candidate onboarding processes, documentation verification, and ensures smooth transition into organizational roles.",
    link: "/hr-onboarding",
  },
  {
    icon: Card2,
    title: "Admission Department",
    desc: "Handles university selection, application processing, document preparation, and admission tracking for master's programs in the USA.",
    link: "/admission",
  },
  {
    icon: Card3,
    title: "Accounts Department",
    desc: "Handles financial transactions, payment processing, scholarship documentation, and maintains accurate financial records.",
    link: "/accounts",
  },
  {
    icon: Card4,
    title: "Training Department",
    desc: "Provides industry-relevant IT skill development, technical training, resume preparation, and interview readiness programs.",
    link: "/training",
  },
  {
    icon: Card5,
    title: "Marketing Department",
    desc: "Promotes candidate profiles to hiring partners, manages employer outreach, and strengthens placement opportunities.",
    link: "/marketing",
  },
  {
    icon: Card6,
    title: "Contracts Department",
    desc: "Oversees employment agreements, offer letters, compliance documentation, and ensures transparent contractual processes.",
    link: "/contracts",
  },
  {
    icon: Card7,
    title: "Immigration & Legal Department",
    desc: "Manages visa documentation, legal compliance, immigration procedures, and provides strategic guidance for F1, H1B, and Green Card processes.",
    link: "/immigration",
  },
  {
    icon: Card8,
    title: "Advisory Team",
    desc: "Offers career counseling, long-term planning strategies, and personalized mentorship for professional growth in the USA.",
    link: "/advisory",
  },
];

const Departments = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex justify-center mb-6">
        <div
          className="px-5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm"
        >
          Department
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-semibold leading-tight">
          Dedicated Expertise. Unified Impact.
        </h2>

        <p className="text-white mt-4 max-w-3xl mx-auto text-[16px] md:text-[20px]">
          Our specialized teams collaborate seamlessly, leveraging advanced methodologies
          and industry knowledge <br />to deliver reliable, results-driven consulting solutions.
        </p>
      </div>

      <div
        className="w-full max-w-[1400px] mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6"
      >
        {departments.map((item, index) => (
          <StyledDepartmentCard key={index}>
            <Link to={item.link} className="card">
              <div className="card2">
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center 
                  bg-white/10 rounded-full flex-shrink-0"
                  >
                    <img src={item.icon} alt="icon" className="w-7 h-7 object-contain" />
                  </div>

                  <h3 className="text-[20px] font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-[14px] leading-relaxed line-clamp-3 mt-3">
                  {item.desc}
                </p>

                <span className="text-gray-300 text-xs transition hover:text-[#2BD7D7]">
                  Learn More →
                </span>
              </div>
            </Link>
          </StyledDepartmentCard>
        ))}
      </div>
    </section>
  );
};

export default Departments;

const StyledDepartmentCard = styled.div`
  .card {
    display: block;
    width: 100%;
    height: 221px;
    padding: 1px;
    border-radius: 20px;
    background-image: linear-gradient(163deg, transparent 0%, transparent 100%);
    transition: all 0.3s;
  }

  .card2 {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 19px;
    background-color: #0b1220;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    box-shadow: 0 0 30px 1px rgba(0, 255, 117, 0.3);
  }
`;
