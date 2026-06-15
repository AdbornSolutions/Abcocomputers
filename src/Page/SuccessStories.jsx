import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Quote,
  Sparkles,
  Trophy,
} from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const professionalImg =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80";
const studentImg =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80";
const teamImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80";

const stories = [
  {
    name: "Rohit Sharma",
    role: "Software Engineer, USA",
    image: professionalImg,
    icon: <Briefcase size={18} />,
    challenge: "Needed a clear path from basic programming knowledge to placement-ready confidence.",
    outcome:
      "Completed structured technical training, rebuilt his resume around practical projects, and practiced interviews with mentor feedback.",
    quote:
      "ABCO helped me understand what employers actually look for. The mentoring made my preparation focused and practical.",
  },
  {
    name: "Sneha Patil",
    role: "MS Student, USA",
    image: studentImg,
    icon: <GraduationCap size={18} />,
    challenge: "Wanted support with university planning, documentation, and F1 visa preparation.",
    outcome:
      "Received guidance for shortlisting, SOP direction, financial documentation, mock interview preparation, and pre-departure clarity.",
    quote:
      "The process felt organized from day one. I knew what to prepare, why it mattered, and how to answer confidently.",
  },
  {
    name: "Amit Kulkarni",
    role: "Cloud Support Associate",
    image: teamImg,
    icon: <Trophy size={18} />,
    challenge: "Had career gaps and needed to present skills in a stronger, more professional way.",
    outcome:
      "Improved communication, built a role-focused profile, and practiced scenario-based interview answers until he was ready.",
    quote:
      "The best part was the personal attention. Every session helped me remove confusion and move one step ahead.",
  },
];

const milestones = [
  { label: "Career Mapping", value: "1:1" },
  { label: "Training Tracks", value: "Role-led" },
  { label: "Profile Prep", value: "360" },
  { label: "Visa Direction", value: "Guided" },
];

const journeySteps = [
  "Understand candidate goals and current skill level",
  "Choose a career, learning, or study pathway",
  "Build a stronger profile with projects and documentation",
  "Practice interviews, communication, and process readiness",
  "Support next steps through placement or education planning",
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Insights / Success Stories
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              Real journeys.
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                Better career outcomes.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              ABCO Computers supports students, graduates, and working
              professionals with training, documentation clarity, visa guidance,
              mentorship, and placement-focused preparation for USA IT pathways.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
              >
                Contact us <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/15"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <p className="font-heading text-[30px] text-cyan-200">
                  {item.value}
                </p>
                <p className="mt-2 text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-6">
          {stories.map((story, index) => (
            <article
              key={story.name}
              className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] md:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                  Story 0{index + 1}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-cyan-200">
                      {story.icon}
                    </div>
                    <div>
                      <h3 className="text-[22px] font-semibold">{story.name}</h3>
                      <p className="text-sm text-cyan-100/70">{story.role}</p>
                    </div>
                  </div>
                  <Quote className="hidden text-white/20 sm:block" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-100/60">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {story.challenge}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-100/60">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {story.outcome}
                    </p>
                  </div>
                </div>

                <p className="mt-6 border-l-2 border-cyan-300/60 pl-4 text-sm leading-relaxed text-gray-300">
                  "{story.quote}"
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                <Sparkles size={20} />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
                How we support
              </p>
              <h2 className="mt-3 font-heading text-[28px] sm:text-[38px]">
                Every success story is built step by step.
              </h2>
            </div>

            <div className="grid gap-3">
              {journeySteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1220] p-4 text-sm text-gray-300"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                  <span>
                    <span className="text-white">0{index + 1}.</span> {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStories;
