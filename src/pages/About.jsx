import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  PencilRuler,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TechList from "../components/TechList.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/skills.js";
import usePageMeta from "../hooks/usePageMeta.js";

const habits = [
  {
    icon: BookOpen,
    title: "Keep learning",
    copy: "Stay curious and keep exploring how the modern web is built.",
  },
  {
    icon: Braces,
    title: "Write with care",
    copy: "Practice clear, readable code and understand the choices behind it.",
  },
  {
    icon: PencilRuler,
    title: "Notice the details",
    copy: "Grow my UI and UX knowledge with every interface I create.",
  },
  {
    icon: Lightbulb,
    title: "Solve thoughtfully",
    copy: "Break problems down and look for useful, practical solutions.",
  },
];
const sectionLabel = (n, text) => (
  <div className="flex items-start gap-[13px] font-mono text-[9px] tracking-[.12em] text-[#787878]">
    <span className="text-brand">{n}</span>
    <span>{text}</span>
  </div>
);

export default function About() {
  usePageMeta(
    "About",
    "Learn about Md. Ruhul Amin Shovan, his Computer Technology studies, interest in frontend development, and current skills.",
  );
  return (
    <div className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] pb-[100px] pt-20 max-md:w-[calc(100%_-_40px)] max-md:pb-[72px] max-md:pt-[52px]">
      <PageIntro
        eyebrow="A little context"
        title={
          <>
            More about
            <br />
            <em>me.</em>
          </>
        }
        description="Getting to know the person behind the code."
      />
      <section className="grid grid-cols-[.44fr_1.15fr_.42fr] gap-[35px] border-y border-border py-[52px] max-lg:grid-cols-[.35fr_1.3fr_.3fr] max-lg:gap-[22px] max-md:grid-cols-1 max-md:gap-[21px] max-md:py-8">
        {sectionLabel("01", "MY STORY")}
        <Reveal className="max-w-[650px]">
          <p className="mb-[22px] mt-0 font-heading text-[21px] font-medium leading-[1.55] tracking-[-.035em] text-[#252525] max-md:text-lg">
            I’m an aspiring frontend developer with a background in Computer
            Technology and a growing curiosity about how good digital
            experiences come together.
          </p>
          <p className="mb-4 mt-0 text-[13px] leading-[1.85] text-[#6d6d6d] max-md:text-[11px]">
            I’m studying for a Diploma in Engineering in Computer Technology at
            Habiganj Polytechnic Institute. Web development caught my interest
            because it brings together structure, problem-solving, and visual
            thinking in a way people can use every day.
          </p>
          <p className="mb-4 mt-0 text-[13px] leading-[1.85] text-[#6d6d6d] max-md:text-[11px]">
            I’m learning the fundamentals, practicing with modern frontend
            technologies, and paying attention to what makes a website clear,
            responsive, and comfortable to use. My goal is to become a
            professional Frontend Developer and find an internship where I can
            contribute, learn from others, and keep improving.
          </p>
          <p className="mt-6 flex items-center gap-[7px] text-[10px] text-[#808080]">
            <MapPin size={15} className="text-brand" />
            Currently based in Dhaka, Bangladesh
          </p>
        </Reveal>
        <div className="flex flex-col items-end gap-2 self-end text-right font-mono text-[7px] tracking-[.1em] text-[#a0a0a0] max-md:hidden">
          <span>CURIOUS BY NATURE</span>
          <span>BUILDING WITH INTENTION</span>
          <i className="mt-2 font-heading text-[68px] font-bold not-italic leading-[.8] tracking-[-.13em] text-[#e5ebf6]">
            R<span className="text-[#c7d8f6]">.</span>
          </i>
        </div>
      </section>
      <section className="pt-20 max-md:pt-[53px]">
        <SectionHeading
          eyebrow="What I’m learning"
          title="A growing toolkit."
          detail="No percentages, just the tools I’m currently studying and practicing."
        />
        <div className="mt-[25px] grid grid-cols-2 gap-[19px] max-md:mt-5 max-md:grid-cols-1 max-md:gap-3">
          {skillGroups.map((group, index) => (
            <Reveal
              className="rounded-[9px] border border-border bg-white p-[22px] max-md:p-[17px]"
              key={group.title}
              delay={index * 80}
            >
              <div className="mb-[15px] flex items-center gap-3 border-b border-border pb-[15px]">
                <span className="font-mono text-[9px] text-brand">
                  0{index + 1}
                </span>
                <h3 className="m-0 flex-1 font-heading text-[15px] font-semibold max-md:text-[13px]">
                  {group.title}
                </h3>
                <Code2 size={17} className="text-[#8d99ac]" />
              </div>
              <TechList items={group.items} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-[.44fr_1.57fr] gap-[35px] pt-20 max-lg:grid-cols-[.35fr_1.65fr] max-lg:gap-[22px] max-md:grid-cols-1 max-md:gap-5 max-md:pt-[53px]">
        {sectionLabel("03", "EDUCATION")}
        <Reveal className="grid grid-cols-[45px_1fr_auto] items-start gap-[18px] border-y border-border py-[25px] max-md:grid-cols-[37px_1fr] max-md:gap-3 max-md:py-[19px]">
          <div className="grid size-[42px] place-items-center rounded-lg bg-[#eff5ff] text-brand max-md:size-[35px]">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="mb-[10px] font-mono text-[8px] uppercase tracking-[.12em] text-secondary">
              CURRENT STUDIES
            </p>
            <h2 className="m-0 font-heading text-[21px] font-semibold leading-[1.4] tracking-[-.04em] max-md:text-base">
              Diploma in Engineering
              <br />
              <em className="not-italic text-[#777]">— Computer Technology</em>
            </h2>
            <p className="my-[10px] text-[11px] text-secondary">
              Habiganj Polytechnic Institute
            </p>
            <span className="mt-[7px] inline-flex items-center text-[9px] text-[#6d6d6d]">
              <span className="status-dot" />
              Studying
            </span>
          </div>
          <span className="font-mono text-[8px] text-[#a5a5a5] max-md:hidden">
            01 / 01
          </span>
        </Reveal>
      </section>
      <section className="pt-20 max-md:pt-[53px]">
        <SectionHeading
          eyebrow="Personal development"
          title="The practice behind the progress."
        />
        <div className="grid grid-cols-4 border-y border-border max-md:grid-cols-2">
          {habits.map((habit, index) => {
            const Icon = habit.icon;
            return (
              <Reveal
                className={`py-6 pr-5 max-md:px-3 max-md:py-[18px] ${index % 2 ? "border-l border-border pl-5 max-md:pl-3" : ""} ${index > 1 ? "max-md:border-t max-md:border-border" : ""} ${index === 2 ? "max-md:border-l-0 max-md:pl-0" : ""}`}
                key={habit.title}
                delay={index * 60}
              >
                <span className="mb-[23px] block font-mono text-[8px] text-[#9aa5b6] max-md:mb-[15px]">
                  0{index + 1}
                </span>
                <Icon size={20} className="text-brand" strokeWidth={1.6} />
                <h3 className="mb-[7px] mt-[14px] font-heading text-[13px] font-semibold max-md:text-[11px]">
                  {habit.title}
                </h3>
                <p className="m-0 max-w-[220px] text-[10px] leading-[1.7] text-secondary max-md:text-[9px]">
                  {habit.copy}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>
      <Reveal className="mt-[55px] flex items-center justify-between border-y border-border py-[22px] text-[11px] text-[#686868] max-md:mt-[35px] max-md:flex-col max-md:items-start max-md:gap-3 max-md:text-[10px]">
        <span>Interested in what I’m working on?</span>
        <Link
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
          to="/projects"
        >
          Explore the project page <ArrowUpRight size={15} />
        </Link>
      </Reveal>
    </div>
  );
}
