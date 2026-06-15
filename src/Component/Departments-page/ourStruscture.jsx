import React, { useEffect, useRef, useState } from "react";

const mobileSteps = [
  "Admission",
  "Visa & Legal",
  "Training",
  "Marketing",
  "Placement",
  "Onboarding",
];

const OurStructure = () => {
  const sectionRef = useRef(null);
  const [isFlowVisible, setIsFlowVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsFlowVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFlowVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#060B14] text-white py-16 md:py-20 px-4 md:px-10 lg:px-20 ${
        isFlowVisible ? "flow-visible" : ""
      }`}
    >
      <div className="flex justify-center mb-6">
        <div
          className="px-5 py-1 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm"
        >
          Departments Work
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-[24px] sm:text-[28px] md:text-[42px] font-semibold">
          A Structured System That Works
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Every department functions within a unified framework, ensuring seamless communication,
          accountability, and high-quality service delivery throughout your engagement.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block">
          <div className="flex justify-between items-center relative">
            <Step id="01" title="Admission" order={1} />
            <Step id="02" title="Visa & Legal" order={2} />
            <Step id="03" title="Training" order={3} />

            <svg className="flow-arrow absolute top-[25px] left-[22%] w-[180px]" style={{ "--flow-delay": "180ms" }} viewBox="0 0 140 60">
              <path d="M0 20 Q70 70 140 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="135,40 125,20 135,25" fill="white" transform="translate(6,-7)" />
            </svg>

            <svg className="flow-arrow absolute top-[-25px] left-[65%] w-[180px]" style={{ "--flow-delay": "360ms" }} viewBox="0 0 150 60">
              <path d="M0 30 Q60 -20 130 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="135,15 140,26 120,30" fill="white" transform="translate(2,-4)" />
            </svg>
          </div>

          <div className="flex justify-between items-center mt-24 relative">
            <Step id="06" title="Onboarding" order={6} />
            <Step id="05" title="Placement" order={5} />
            <Step id="04" title="Marketing" order={4} />

            <svg className="flow-arrow absolute top-[-100px] right-[-13%] w-[180px]" style={{ "--flow-delay": "540ms" }} viewBox="30 10 120 100">
              <path d="M30 0 Q120 30 60 70" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="55,65 65,75 55,75" fill="white" />
            </svg>

            <svg className="flow-arrow absolute top-[-40px] right-[21%] w-[180px]" style={{ "--flow-delay": "720ms" }} viewBox="0 0 140 60">
              <path d="M140 30 Q70 -20 0 30" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="-100,-20 -100,60 20,30" fill="white" />
            </svg>

            <svg className="flow-arrow absolute top-[35px] left-[25%] w-[180px]" style={{ "--flow-delay": "900ms" }} viewBox="0 10 120 60">
              <path d="M150 20 Q70 70 -10 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="10,20 -1,20 2,30" fill="white" transform="translate(0.5,5)" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:hidden items-center">
          {mobileSteps.map((title, i, arr) => (
            <div
              key={title}
              className="flow-step flex flex-col items-center"
              style={{ "--flow-delay": `${i * 180}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="circle">{`0${i + 1}`}</div>
                <h3 className="title text-[18px]">{title}</h3>
              </div>

              {i !== arr.length - 1 && (
                <div
                  className="flow-arrow mt-3 text-white text-2xl opacity-70"
                  style={{ "--flow-delay": `${i * 180 + 120}ms` }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .circle {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: black;
          border-radius: 50%;
          font-weight: 600;
          font-size: 18px;
        }

        .title {
          font-size: 32px;
          font-weight: 600;
        }

        .flow-step {
          opacity: 0;
          transform: translateY(22px) scale(0.96);
          animation-delay: var(--flow-delay, 0ms);
        }

        .flow-arrow {
          opacity: 0;
          transform: translateY(10px);
          animation-delay: var(--flow-delay, 0ms);
        }

        .flow-visible .flow-step {
          animation: flowFadeIn 0.72s ease forwards;
          animation-delay: var(--flow-delay, 0ms);
        }

        .flow-visible .flow-arrow {
          animation: flowArrowIn 0.65s ease forwards;
          animation-delay: var(--flow-delay, 0ms);
        }

        @keyframes flowFadeIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes flowArrowIn {
          to {
            opacity: 0.75;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-step,
          .flow-arrow {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 18px;
          }
          .circle {
            width: 44px;
            height: 44px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

const Step = ({ id, title, order }) => (
  <div
    className="flow-step flex items-center gap-4"
    style={{ "--flow-delay": `${(order - 1) * 180}ms` }}
  >
    <div className="circle">{id}</div>
    <h3 className="title">{title}</h3>
  </div>
);

export default OurStructure;
