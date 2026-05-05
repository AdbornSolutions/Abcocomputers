import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Profile Evaluation",
    description:
      "A deep dive into your academic history and future goals to build a winning strategy.",
    side: "left",
  },
  {
    number: "02",
    title: "Strategic Application",
    description:
      "Crafting compelling narratives and ensuring flawless document submissions.",
    side: "right",
  },
  {
    number: "03",
    title: "Offer Acceptance",
    description:
      "Securing your I-20 and managing official communication with your chosen university.",
    side: "left",
  },
  {
    number: "04",
    title: "Visa & Finance",
    description:
      "Finalizing financial statements and mastering the visa interview process.",
    side: "right",
  },
  {
    number: "05",
    title: "Global Take-Off",
    description:
      "Pre-departure briefings and joining our exclusive alumni network in the USA.",
    side: "left",
  },
];

export default function Roadmap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="rm-page ">
      <style>{globalCSS}</style>

      {/* Header */}
      <div className="rm-header">
        <h1 className="rm-title">Your Roadmap to America</h1>
        <p className="rm-subtitle">
          A streamlined, five-step execution plan from evaluation to enrollment.
        </p>
      </div>

      {/* Timeline */}
      <div className="rm-timeline">
        {/* SVG snake curve — desktop only */}
        {!isMobile && (
          <svg
            className="rm-svg"
            viewBox="0 0 300 850"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150,10 
                 C240,10 240,195 150,195 
                 C60,195 60,375 150,375 
                 C240,375 240,555 150,555 
                 C60,555 60,735 150,735 
                 C240,735 240,840 150,840"
              fill="none"
              stroke="rgb(250, 250, 250)"
              strokeWidth="1.2"
            />
          </svg>
        )}

        {/* Steps */}
        <div className="rm-steps">
          {steps.map((step, i) => {
            const isLeft = step.side === "left";

            return (
              <div
                key={i}
                className={`rm-row${isMobile ? " rm-row--mobile" : ""}`}
              >
                {!isMobile ? (
                  /* ── DESKTOP LAYOUT ── */
                  <>
                    {/* Left text column */}
                    <div className={`rm-text${isLeft ? " rm-text--align-right" : ""}`}>
                      {isLeft && (
                        <>
                          <h3 className="rm-step-title">{step.title}</h3>
                          <p className="rm-step-desc">{step.description}</p>
                        </>
                      )}
                    </div>

                    {/* Circle */}
                    <div className="rm-circle-col">
                      <div className="rm-circle">
                        <span className="rm-num">{step.number}</span>
                      </div>
                    </div>

                    {/* Right text column */}
                    <div className={`rm-text${!isLeft ? " rm-text--align-left" : ""}`}>
                      {!isLeft && (
                        <>
                          <h3 className="rm-step-title">{step.title}</h3>
                          <p className="rm-step-desc">{step.description}</p>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  /* ── MOBILE LAYOUT ── */
                  <>
                    <div className="rm-circle-col">
                      <div className="rm-circle">
                        <span className="rm-num">{step.number}</span>
                      </div>
                    </div>
                    <div className="rm-text rm-text--align-left rm-text--mobile">
                      <h3 className="rm-step-title">{step.title}</h3>
                      <p className="rm-step-desc">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .rm-page {
    
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 20px 80px;
    font-family: 'Georgia', 'Times New Roman', serif;
    color: #fff;
  }
.rm-row:nth-child(4) {
  align-items: flex-end;
  padding-bottom: 20px;  /* ← adjust as needed */
}
  /* HEADER */
  .rm-header {
    text-align: center;
    margin-bottom: 52px;
    max-width: 520px;
  }
  .rm-title {
    font-size: clamp(22px, 4.5vw, 36px);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 10px;
  }
  .rm-subtitle {
    font-size: clamp(11px, 1.8vw, 13.5px);
    color: rgba(255,255,255,0.4);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1.6;
  }

  /* TIMELINE CONTAINER */
  .rm-timeline {
    position: relative;
    width: 100%;
    max-width: 800px;
  }

  /* SNAKE SVG */
  .rm-svg {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* STEPS WRAPPER */
  .rm-steps {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  /* DESKTOP ROW */
  .rm-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 168px;
     padding: 0 40px;  /* ← add this */
  }

  /* MOBILE ROW */
  .rm-row--mobile {
    align-items: flex-start;
    min-height: unset;
    padding: 18px 0;
  }

  /* CIRCLE */
  .rm-circle-col {
    flex-shrink: 0;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rm-circle {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 7px rgba(255,255,255,0.025);
  }
  .rm-circle:hover {
    background: rgba(255,255,255,0.12);
  }
  .rm-num {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    letter-spacing: 0.07em;
  }

  /* TEXT BLOCK */
  .rm-text {
    flex: 1;
    padding: 0 22px;
max-width: 280px;  /* ← add this */
  }
  .rm-text--align-right {
    text-align: right;
  }
  .rm-text--align-left {
    text-align: left;
  }
  .rm-text--mobile {
    padding: 4px 14px 0 10px;
  }

  .rm-step-title {
   font-size: clamp(16px, 2.8vw, 22px);
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
    margin-top: 5px
    margin-bottom: 8px;
    font-family: 'Georgia', serif;
  }
  .rm-step-desc {
    font-size: clamp(10px, 1.6vw, 12.5px);
    color: rgba(255,255,255,0.42);
    line-height: 1.7;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
    margin-top :10px
  }
    .rm-row:nth-child(5) {
  align-items: flex-end;
  padding-bottom: 20px;  /* ← adjust as needed */
}
  .rm-row:last-child {
  margin-top: 30px;   /* ← adjust as needed */
  margin-right: 40px; /* ← adjust as needed */
}  

  /* MOBILE — vertical line instead of snake */
  @media (max-width: 599px) {
    .rm-steps::before {
      content: '';
      position: absolute;
      left: 35px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255,255,255,0.12);
      z-index: 0;
    }
    .rm-circle-col {
      width: 70px;
      position: relative;
      z-index: 1;
    }
    .rm-circle {
      width: 44px;
      height: 44px;
    }
    .rm-num {
      font-size: 11px;
    }
  }
`;
