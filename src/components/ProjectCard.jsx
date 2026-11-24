import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import ProjectArtwork from "./ProjectArtwork.jsx";

export default function ProjectCard({ project, compact = false, delay = 0 }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={[
        "group min-w-0 overflow-hidden rounded-[10px] border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-[#c8d6ed] hover:shadow-[0_16px_35px_#192a430c]",
        compact ? "featured-card" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        className="block"
        to={"/projects/" + project.id}
        aria-label={"View details for " + project.title}
      >
        <ProjectArtwork project={project} compact={compact} />
        <div className="p-[17px]">
          <div className="flex items-center justify-between gap-2 font-mono text-[8px] uppercase tracking-[.07em] text-[#737373]">
            <span>{project.category}</span>
            <span className="rounded bg-[#fbf5df] px-2 py-[5px] text-[#806014]">
              Placeholder
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <h3 className="m-0 font-heading text-[15px] font-semibold tracking-[-.035em]">
              {project.title}
            </h3>
            <ArrowUpRight
              className="shrink-0 text-[#7e8ba0] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              size={19}
            />
          </div>
          <p className="my-2 min-h-[49px] text-[10px] leading-[1.7] text-secondary max-md:min-h-0">
            {project.description}
          </p>
          <div className="flex items-center justify-between gap-2 border-t border-[#eef0f3] pt-3">
            <span className="text-[8px] text-[#737373]">
              {project.technologies.length
                ? project.technologies.join(" · ")
                : "Technologies to be added"}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-[9px] font-semibold text-brand">
              View details <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
