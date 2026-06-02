import { useEffect, useRef, useState } from "react";

const steps = [
  { number: "01", title: "Profile Evaluation", description: "We study your academic history, goals, skills, and budget to create a smart admission strategy.", side: "left" },
  { number: "02", title: "Strategic Application", description: "We prepare strong applications, refine documents, and ensure timely university submissions.", side: "right" },
  { number: "03", title: "Offer Acceptance", description: "We help you review admission offers, confirm your university, and complete official communication.", side: "left" },
  { number: "04", title: "Visa & Finance", description: "We guide you with financial documents, visa forms, SEVIS, and student visa interview preparation.", side: "right" },
  { number: "05", title: "Global Take-Off", description: "We support you with pre-departure briefing, travel guidance, and early settlement preparation.", side: "left" },
];

export default function Roadmap() {
  const bodyRef      = useRef(null);
  const svgRef       = useRef(null);
  const progressRef  = useRef(null);
  const circleRefs   = useRef([]);
  const rowRefs      = useRef([]);
  const [active, setActive]     = useState([]);
  const [visible, setVisible]   = useState([]);
  const [pathData, setPathData] = useState("");
  const [total, setTotal]       = useState(0);
  const [offset, setOffset]     = useState(9999);

  function buildSnake() {
    const body = bodyRef.current;
    if (!body) return;
    const bRect = body.getBoundingClientRect();
    const pts = circleRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left - bRect.left + r.width / 2, y: r.top - bRect.top + r.height / 2 };
    }).filter(Boolean);
    if (pts.length < 2) return;
    let d = `M${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p = pts[i], n = pts[i + 1];
      const mid = (p.y + n.y) / 2;
      d += ` C${p.x},${mid} ${n.x},${mid} ${n.x},${n.y}`;
    }
    setPathData(d);
    requestAnimationFrame(() => {
      if (progressRef.current) {
        const len = progressRef.current.getTotalLength();
        setTotal(len);
        setOffset(len);
      }
    });
  }

  useEffect(() => {
    setTimeout(buildSnake, 100);
    window.addEventListener("resize", buildSnake);
    return () => window.removeEventListener("resize", buildSnake);
  }, []);

  useEffect(() => {
    if (!total) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = rowRefs.current.indexOf(entry.target);
        if (idx < 0) return;
        setActive((p) => [...new Set([...p, idx])]);
        setVisible((p) => [...new Set([...p, idx])]);
        const progress = (idx + 1) / steps.length;
        setOffset(total * (1 - progress));
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    rowRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [total]);

  return (
    <div className="bg-[#0a0a0a] py-14 px-6 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="font-garamond text-3xl lg:text-4xl text-white mb-2">Your Roadmap to America</h2>
        <p className="font-outfit text-xs tracking-widest text-white/35 uppercase">
          A five-step execution plan from evaluation to enrollment.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto" ref={bodyRef}>
        {/* SVG snake */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ height: "100%" }}
        >
          <path d={pathData} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <path
            ref={progressRef}
            d={pathData}
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={total || 9999}
            strokeDashoffset={offset}
            opacity="0.7"
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>

        {/* Steps */}
        <div className="relative z-10 flex flex-col">
          {steps.map((step, i) => {
            const isLeft = step.side === "left";
            const isActive = active.includes(i);
            const isVis = visible.includes(i);
            return (
              <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                className={`flex items-center min-h-[160px] px-4 ${!isLeft ? "flex-row-reverse" : ""}`}
              >
                {/* Text side */}
                <div className={`flex-1 max-w-[220px] px-4 ${isLeft ? "text-right" : "text-left"}`}>
                  <h3
                    className="font-garamond text-xl text-white/90 mb-1.5"
                    style={{
                      opacity: isVis ? 1 : 0,
                      transform: isVis ? "translateY(0)" : "translateY(12px)",
                      transition: "opacity 0.5s, transform 0.5s",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-outfit text-[12px] text-white leading-relaxed"
                    style={{
                      opacity: isVis ? 1 : 0,
                      transform: isVis ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.5s 0.08s, transform 0.5s 0.08s",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Circle */}
                <div className="w-20 flex-shrink-0 flex justify-center items-center">
                  <div
                    ref={(el) => (circleRefs.current[i] = el)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-black border-[1.5px] border-[#c4b5fd] shadow-[0_0_0_8px_rgba(196,181,253,0.06)]"
                        : "bg-white/5 border-[1.5px] border-white/18 shadow-[0_0_0_8px_rgba(255,255,255,0.03)]"
                    }`}
                  >
                    <span
                      className={`font-outfit text-[13px] font-medium tracking-wider transition-colors duration-300 ${
                        isActive ? "text-[#c4b5fd]" : "text-white"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Empty spacer */}
                <div className="flex-1 max-w-[220px] hidden sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}