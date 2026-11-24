import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import Reveal from "../components/Reveal.jsx";
import ProjectArtwork from "../components/ProjectArtwork.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { projects } from "../data/projects.js";

export default function ProjectDetails() {
  const { id } = useParams(),
    project = projects.find((item) => item.id === id);
  usePageMeta(
    project ? project.title : "Project not found",
    project
      ? `${project.title} — a clearly labeled project placeholder in Md. Ruhul Amin Shovan’s portfolio.`
      : "The requested project could not be found.",
  );
  if (!project)
    return (
      <div className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] py-20 max-md:w-[calc(100%_-_40px)]">
        <PageIntro
          eyebrow="Project / not found"
          title={
            <>
              That project
              <br />
              <em>isn’t here.</em>
            </>
          }
          description="The project link may have changed or the item may not exist."
        />
        <Link
          className="inline-flex min-h-[46px] items-center gap-3 rounded-[7px] bg-brand px-4 text-xs font-semibold text-white"
          to="/projects"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  return (
    <div className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] pb-[100px] pt-[42px] max-md:w-[calc(100%_-_40px)] max-md:pb-[72px] max-md:pt-[26px]">
      <Link
        className="inline-flex items-center gap-2 text-[10px] text-[#6d6d6d] transition hover:text-brand"
        to="/projects"
      >
        <ArrowLeft size={15} /> All projects
      </Link>
      <PageIntro
        className="pt-[43px] pb-[35px] max-md:pt-[35px] max-md:pb-6"
        eyebrow={`Project detail · ${project.category}`}
        title={
          <>
            Project details
            <br />
            <em>to come.</em>
          </>
        }
        description="This page is a placeholder, ready for verified project information."
      />
      <Reveal className="max-w-[930px]">
        <ProjectArtwork project={project} detail />
      </Reveal>
      <div className="grid max-w-[930px] grid-cols-[1.4fr_.6fr] gap-20 pb-[25px] pt-[42px] max-md:grid-cols-1 max-md:gap-[22px] max-md:pb-[18px] max-md:pt-[29px]">
        <section>
          <p className="mb-[13px] font-mono text-[10px] uppercase tracking-[.12em] text-secondary">
            OVERVIEW
          </p>
          <h2 className="mb-3 mt-0 font-heading text-[21px] font-semibold tracking-[-.045em] max-md:text-[17px]">
            {project.title}
          </h2>
          <p className="my-2 text-xs leading-[1.8] text-secondary max-md:text-[10px]">
            {project.description}
          </p>
          <p className="my-2 text-xs leading-[1.8] text-secondary max-md:text-[10px]">
            Project purpose, main features, and development notes will be added
            when a completed project is ready to share.
          </p>
        </section>
        <aside className="border-t border-border">
          <div className="flex flex-col gap-[7px] border-b border-border py-[13px]">
            <span className="font-mono text-[8px] tracking-[.09em] text-[#929292]">
              CATEGORY
            </span>
            <strong className="text-[10px] font-medium">
              {project.category}
            </strong>
          </div>
          <div className="flex flex-col gap-[7px] border-b border-border py-[13px]">
            <span className="font-mono text-[8px] tracking-[.09em] text-[#929292]">
              TECHNOLOGIES
            </span>
            <strong className="text-[10px] font-medium">
              {project.technologies.length
                ? project.technologies.join(", ")
                : "To be added"}
            </strong>
          </div>
          <div className="flex flex-col gap-[7px] border-b border-border py-[13px]">
            <span className="font-mono text-[8px] tracking-[.09em] text-[#929292]">
              PROJECT LINKS
            </span>
            <strong className="text-[10px] font-medium">
              Not available yet
            </strong>
          </div>
        </aside>
      </div>
      <div className="flex max-w-[930px] flex-wrap gap-[9px] pb-8">
        <span
          className="inline-flex min-h-10 cursor-not-allowed items-center gap-3 rounded-[7px] border border-border bg-[#f6f7f8] px-4 text-[10px] text-[#a3a3a3]"
          aria-disabled="true"
        >
          Live demo unavailable <ExternalLink size={14} />
        </span>
        <span
          className="inline-flex min-h-10 cursor-not-allowed items-center gap-3 rounded-[7px] border border-border bg-[#f6f7f8] px-4 text-[10px] text-[#a3a3a3]"
          aria-disabled="true"
        >
          Repository unavailable <ArrowUpRight size={14} />
        </span>
      </div>
      <div className="max-w-[930px] border-t border-border pt-5">
        <Link
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
          to="/projects"
        >
          <ArrowLeft size={15} /> Back to all projects
        </Link>
      </div>
    </div>
  );
}
