import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/projects.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function Projects() {
  usePageMeta(
    "Projects",
    "Browse project placeholders and future work from Md. Ruhul Amin Shovan, an aspiring frontend developer.",
  );
  return (
    <div className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] pb-[100px] pt-20 max-md:w-[calc(100%_-_40px)] max-md:pb-[72px] max-md:pt-[52px]">
      <PageIntro
        eyebrow="Selected work"
        title={
          <>
            Projects &amp;
            <br />
            <em>experiments.</em>
          </>
        }
        description="A home for practical work as I learn and build. Placeholder entries are clearly marked until real projects are ready to share."
      />
      <div className="mb-5 flex items-center justify-between gap-2 border-y border-border py-[15px] font-mono text-[8px] uppercase tracking-[.1em] text-[#8c8c8c] max-md:text-[7px]">
        <span>
          PROJECT INDEX <b className="ml-2 text-brand">03</b>
        </span>
        <span>PLACEHOLDER CONTENT · READY TO UPDATE</span>
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[13px]">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.id} delay={index * 80} />
        ))}
      </div>
      <Reveal
        as="aside"
        className="mt-[55px] grid grid-cols-[.4fr_1.1fr_auto] items-center gap-6 border-y border-border py-[23px] max-md:mt-[37px] max-md:grid-cols-1 max-md:gap-[11px] max-md:py-[18px]"
      >
        <span className="font-mono text-[8px] tracking-[.1em] text-brand">
          NOTE / 01
        </span>
        <p className="m-0 max-w-[500px] text-[10px] leading-[1.7] text-secondary">
          Project previews, descriptions, technologies, live demos, and
          repositories are intentionally left as placeholders until verified
          details are available.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
        >
          Ask about my current learning <ArrowUpRight size={15} />
        </Link>
      </Reveal>
    </div>
  );
}
