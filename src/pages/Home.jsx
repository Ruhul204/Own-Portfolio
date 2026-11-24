import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/projects.js";
import { skillPreview } from "../data/skills.js";
import usePageMeta from "../hooks/usePageMeta.js";

function CodeWindow() {
  return (
    <div
      className="hero-composition"
      role="group"
      aria-label="Decorative frontend code and portrait composition"
    >
      <div className="grid-wash" />
      <div className="hero-photo-frame">
        <img
          src="/shovan-portrait.png"
          width={1254}
          height={1254}
          fetchPriority="high"
          decoding="async"
          alt="Portrait of Md. Ruhul Amin Shovan"
        />
        <span className="photo-corner top-left" />
        <span className="photo-corner bottom-right" />
        <span className="photo-caption">DHAKA, BANGLADESH · 2026</span>
      </div>
      <div className="code-note">
        <div className="code-note-head">
          <span />
          <span />
          <span />
          <i>hello-world.jsx</i>
        </div>
        <pre>
          <span className="code-purple">const</span>{" "}
          <span className="code-blue">developer</span> = {"{"}
          <br />
          {"  "}curiosity: <span className="code-green">true</span>,
          <br />
          {"  "}learning: <span className="code-green">'always'</span>,
          <br />
          {"  "}focus: <span className="code-green">'the details'</span>
          <br />
          {"}"}
        </pre>
      </div>
      <div className="orbit-mark">
        <span>R</span>
      </div>
      <div className="hero-sticker">
        <Sparkles size={15} />
        <span>
          Thoughtfully
          <br />
          made for people
        </span>
      </div>
      <div className="hero-coordinate">LEARNING · BUILDING · GROWING</div>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    "Home",
    "Portfolio of Md. Ruhul Amin Shovan, an aspiring frontend developer and Computer Technology student in Dhaka, Bangladesh.",
  );
  return (
    <>
      <section className="mx-auto grid min-h-[640px] w-[calc(100%_-_64px)] max-w-[1200px] grid-cols-[1fr_.95fr] items-center gap-[5%] pb-[85px] pt-[58px] max-lg:min-h-[600px] max-lg:gap-[2%] max-md:min-h-0 max-md:grid-cols-1 max-md:gap-1 max-md:pb-[45px] max-md:pt-11 max-md:w-[calc(100%_-_40px)]">
        <div className="px-[5%] pt-[5px] max-lg:pl-0 max-md:px-0">
          <p className="mb-[25px] font-mono text-[10px] font-medium uppercase tracking-[.12em] text-[#545454] max-md:mb-[19px] max-md:text-[8px]">
            <span className="status-dot" />
            HELLO, I'M RUHUL AMIN SHOVAN
          </p>
          <h1 className="m-0 font-heading text-[clamp(49px,6vw,76px)] font-semibold leading-[1.06] tracking-[-.075em] text-ink max-lg:text-[clamp(48px,7vw,68px)] max-md:text-[clamp(46px,11vw,68px)] max-md:leading-[1.02]">
            Building digital
            <br />
            experiences that
            <br />
            <em className="not-italic text-brand">make an impact.</em>
          </h1>
          <p className="mt-[21px] flex items-center gap-[10px] text-sm font-semibold text-[#353535] max-md:mt-[15px] max-md:text-xs">
            Frontend Developer{" "}
            <span className="size-1 rounded-full bg-[#b4b4b4]" /> React &amp;
            Modern Web
          </p>
          <p className="my-[17px] max-w-[445px] text-sm leading-[1.85] text-secondary max-md:my-[13px] max-md:text-xs max-md:leading-[1.75]">
            I’m passionate about building responsive, accessible, and
            user-friendly web experiences through modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-[10px] max-[360px]:max-w-[250px] max-[360px]:flex-col">
            <Link
              className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-brand px-4 text-xs font-semibold text-white shadow-[0_4px_12px_#2563eb26] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] max-md:min-h-[43px] max-md:px-[13px] max-md:gap-[9px] max-md:text-[10px]"
              to="/projects"
            >
              Explore my projects <ArrowRight size={16} />
            </Link>
            <Link
              className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] border border-border bg-white px-4 text-xs font-semibold text-[#363636] transition hover:-translate-y-0.5 hover:border-[#b7caef] hover:bg-[#f8fbff] max-md:min-h-[43px] max-md:px-[13px] max-md:gap-[9px] max-md:text-[10px]"
              to="/about"
            >
              More about me <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-[10px] text-[#727272] max-md:mt-[22px] max-md:gap-3 max-md:text-[8px]">
            <span className="inline-flex items-center gap-[6px]">
              <span className="status-dot" />
              Open to Internship Opportunities
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <MapPin size={14} />
              Dhaka, Bangladesh
            </span>
          </div>
          <SocialLinks />
        </div>
        <CodeWindow />
      </section>
      <section className="bg-pale">
        <div className="mx-auto grid min-h-[350px] w-[calc(100%_-_64px)] max-w-[1200px] grid-cols-[.6fr_1.2fr_.35fr] items-center gap-[38px] py-[72px] max-lg:grid-cols-[.55fr_1.35fr_.25fr] max-lg:gap-[23px] max-md:min-h-0 max-md:w-[calc(100%_-_40px)] max-md:grid-cols-1 max-md:gap-[21px] max-md:py-[50px]">
          <p className="font-mono text-[10px] uppercase tracking-[.12em] text-secondary max-md:text-[8px]">
            A LITTLE ABOUT ME{" "}
            <span className="mt-[9px] block text-[8px] text-[#b0b0b0] max-md:ml-[10px] max-md:mt-0 max-md:inline">
              01 / 04
            </span>
          </p>
          <div>
            <h2 className="m-0 max-w-[680px] font-heading text-[clamp(30px,4vw,44px)] font-medium leading-[1.22] tracking-[-.06em] max-md:text-[31px]">
              Curious about how thoughtful design and clean code can make the
              web feel <em className="not-italic text-brand">effortless.</em>
            </h2>
            <p className="my-[17px] max-w-[570px] text-[13px] leading-[1.75] text-secondary max-md:my-3 max-md:text-[11px]">
              I’m a Computer Technology student building a foundation in
              frontend development, one careful project at a time.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
              to="/about"
            >
              Get to know me <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="justify-self-center font-heading text-[120px] font-bold leading-[.8] tracking-[-.14em] text-[#e4eaf4] max-lg:text-[90px] max-md:hidden">
            R<span className="text-[#c7d8f6]">.</span>
          </div>
        </div>
      </section>
      <section className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] py-[104px] max-md:w-[calc(100%_-_40px)] max-md:py-[66px]">
        <SectionHeading
          eyebrow="Selected projects"
          title="A few things in the making."
          detail="These are placeholder entries. Real project details will appear here as they’re ready."
          link={
            <Link
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
              to="/projects"
            >
              All projects <ArrowUpRight size={15} />
            </Link>
          }
        />
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[13px] [&>.featured-card:last-child]:max-lg:hidden [&>.featured-card:last-child]:max-md:block">
          {projects.map((project, i) => (
            <ProjectCard
              project={project}
              key={project.id}
              compact
              delay={i * 90}
            />
          ))}
        </div>
      </section>
      <section className="bg-pale">
        <div className="mx-auto grid w-[calc(100%_-_64px)] max-w-[1200px] grid-cols-[.8fr_1.2fr] items-center gap-[13%] py-[86px] max-md:w-[calc(100%_-_40px)] max-md:grid-cols-1 max-md:gap-6 max-md:py-[62px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.12em] text-secondary max-md:text-[8px]">
              THE TOOLKIT{" "}
              <span className="mt-[9px] block text-[8px] text-[#b0b0b0]">
                03 / 04
              </span>
            </p>
            <h2 className="my-[17px] font-heading text-[clamp(35px,4.7vw,55px)] font-medium leading-[1.04] tracking-[-.075em] max-md:my-[13px] max-md:text-[43px]">
              Learning by
              <br />
              <em className="not-italic text-brand">building.</em>
            </h2>
            <p className="mb-[17px] mt-0 max-w-[330px] text-xs leading-[1.7] text-secondary max-md:text-[11px]">
              Technologies I’m exploring as I grow into a confident frontend
              developer.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
              to="/about"
            >
              More about my skills <ArrowUpRight size={15} />
            </Link>
          </div>
          <ul className="m-0 grid list-none grid-cols-2 gap-x-[22px] p-0 max-md:gap-x-4">
            {skillPreview.map((skill, index) => (
              <li
                className="flex items-center gap-3 border-b border-[#e3e6ec] py-[14px] text-[11px] font-medium max-md:gap-2 max-md:py-3 max-md:text-[9px]"
                key={skill}
              >
                <span className="font-mono text-[8px] text-[#9b9b9b] max-md:text-[7px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
                <ArrowUpRight className="ml-auto text-[#95a0b1]" size={14} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Reveal
        as="section"
        className="relative mx-auto my-[90px] flex w-[calc(100%_-_64px)] max-w-[1200px] items-center justify-between gap-6 overflow-hidden rounded-xl border border-[#e9edf4] bg-pale px-[70px] py-[62px] max-md:my-[55px] max-md:w-[calc(100%_-_40px)] max-md:flex-col max-md:items-start max-md:px-[22px] max-md:py-[29px]"
      >
        <div>
          <p className="mb-[15px] font-mono text-[10px] uppercase tracking-[.12em] text-secondary max-md:text-[8px]">
            OPEN TO OPPORTUNITIES{" "}
            <span className="ml-3 text-[8px] text-[#aaa] max-md:ml-0 max-md:mt-[7px] max-md:block">
              04 / 04
            </span>
          </p>
          <h2 className="m-0 font-heading text-[clamp(30px,4vw,45px)] font-medium leading-[1.15] tracking-[-.065em] max-md:text-[32px]">
            Have an opportunity
            <br />
            or an idea to share?
          </h2>
          <p className="mt-[13px] text-xs text-secondary max-md:text-[10px]">
            Let’s talk about what’s next.
          </p>
        </div>
        <Link
          className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-brand px-4 text-xs font-semibold text-white shadow-[0_4px_12px_#2563eb26] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] max-md:min-h-[43px] max-md:px-[13px] max-md:text-[10px]"
          to="/contact"
        >
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <ArrowDownRight
          className="absolute right-[5%] top-[13%] text-[#d8e4f5] max-md:right-[5%] max-md:top-[9%]"
          size={48}
        />
      </Reveal>
    </>
  );
}
