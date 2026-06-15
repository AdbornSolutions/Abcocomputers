import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Target,
  Users,
} from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const teamImg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80";
const officeImg =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80";
const strategyImg =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80";

const cultureCards = [
  {
    icon: <Users size={20} />,
    title: "People-first guidance",
    text: "Every learner and professional gets support that is practical, patient, and aligned with their goals.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Learning mindset",
    text: "We focus on skill-building, interview readiness, documentation clarity, and continuous improvement.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Smart execution",
    text: "Teams work across training, admissions, immigration, marketing, and onboarding to keep journeys structured.",
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "Transparent support",
    text: "Clear communication, reliable follow-ups, and honest process guidance shape the ABCO experience.",
  },
];

const dayHighlights = [
  {
    icon: <CalendarCheck size={18} />,
    title: "Structured follow-ups",
    text: "Teams track student and candidate progress so important steps do not get missed.",
  },
  {
    icon: <MessagesSquare size={18} />,
    title: "Open communication",
    text: "Candidates get guidance in a way that is clear, timely, and easy to understand.",
  },
  {
    icon: <Target size={18} />,
    title: "Outcome focus",
    text: "Training, documentation, and placement support are connected to real career goals.",
  },
];

const LifeAtAbco = () => {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Insights / Life at ABCO
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              A workplace built around
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                growth and clarity.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              Life at ABCO is shaped by mentoring, teamwork, process discipline,
              and a shared belief that every candidate deserves clear guidance
              while building a future in the USA IT ecosystem.
            </p>

            <Link
              to="/contactus"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[80px] border border-white/10 sm:rounded-[120px]">
              <img src={teamImg} alt="ABCO team" className="h-[360px] w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 pt-0 sm:pt-12">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <img src={officeImg} alt="Team collaboration" className="h-44 w-full object-cover" />
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="font-heading text-[34px] text-cyan-200">360</p>
                <p className="mt-2 text-sm text-gray-400">
                  Support across learning, guidance, documentation, and placement readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cultureCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[240px] rounded-2xl border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                {card.icon}
              </div>
              <p className="mb-2 text-xs text-cyan-100/60">0{index + 1}</p>
              <h3 className="text-[20px] font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {card.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <img
              src={strategyImg}
              alt="Planning and teamwork"
              className="h-[320px] w-full object-cover sm:h-[430px]"
            />
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              Inside the workflow
            </p>
            <h2 className="mt-3 font-heading text-[28px] sm:text-[38px]">
              What makes the ABCO experience feel organized.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Our teams collaborate across departments so candidates can move
              from inquiry to learning, documentation, interview preparation,
              and onboarding with fewer gaps and stronger confidence.
            </p>

            <div className="mt-7 grid gap-3">
              {dayHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1220] p-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-cyan-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[28px] border border-white/10 bg-[#0b1220] p-6 text-center sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
            Team Insight
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-[28px] sm:text-[40px]">
            Behind every process is a team that cares about outcomes.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-[16px]">
            Whether someone needs training, visa direction, job placement
            preparation, or a clearer professional path, ABCO teams work
            together to keep the journey accountable and encouraging.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LifeAtAbco;
