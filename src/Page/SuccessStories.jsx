import React from "react";
import { ArrowRight, Briefcase, GraduationCap, Quote, Trophy } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const stories = [
  {
    name: "Rohit Sharma",
    role: "Software Engineer, USA",
    insight: "Moved from basic IT knowledge to a structured career path through training, resume preparation, and interview support.",
  },
  {
    name: "Sneha Patil",
    role: "MS Student, USA",
    insight: "Received end-to-end guidance for university shortlisting, documentation, F1 preparation, and pre-departure planning.",
  },
  {
    name: "Amit Kulkarni",
    role: "Cloud Support Associate",
    insight: "Built confidence through practical mentoring, profile polishing, and placement-focused preparation.",
  },
];

const milestones = [
  { label: "Career Guidance", value: "1:1" },
  { label: "Training Support", value: "Live" },
  { label: "Placement Prep", value: "360" },
  { label: "Visa Direction", value: "Clear" },
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Insights / Success Stories
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              Real journeys.
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                Career outcomes.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              Explore how ABCO Computers supports students and professionals
              with training, mentorship, visa direction, and placement-focused
              preparation for USA IT opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contactus"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
              >
                Contact us <ArrowRight size={16} />
              </a>
              <a
                href="/services"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/15"
              >
                View services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <p className="font-heading text-[30px] text-cyan-200">
                  {item.value}
                </p>
                <p className="mt-2 text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {stories.map((story, index) => (
              <article
                key={story.name}
                className="group border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-cyan-200">
                    {index === 0 ? <Briefcase size={18} /> : index === 1 ? <GraduationCap size={18} /> : <Trophy size={18} />}
                  </div>
                  <Quote className="text-white/20 transition group-hover:text-cyan-200/50" />
                </div>
                <h3 className="text-[21px] font-semibold">{story.name}</h3>
                <p className="mt-1 text-sm text-cyan-100/70">{story.role}</p>
                <p className="mt-5 text-sm leading-relaxed text-gray-400">
                  {story.insight}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStories;
