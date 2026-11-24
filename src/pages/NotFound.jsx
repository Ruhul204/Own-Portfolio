import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta(
    "Page not found",
    "This page does not exist. Return to the portfolio home page for Md. Ruhul Amin Shovan.",
  );
  return (
    <div className="relative mx-auto min-h-[600px] w-[calc(100%_-_64px)] max-w-[1200px] pb-[100px] pt-20 max-md:min-h-[520px] max-md:w-[calc(100%_-_40px)] max-md:pb-[72px] max-md:pt-[52px]">
      <span className="absolute right-[9%] top-[7%] font-heading text-[clamp(130px,22vw,270px)] font-bold leading-[.8] tracking-[-.13em] text-[#f0f4fa] max-md:right-[2%] max-md:top-[12%] max-md:text-[40vw]">
        404
      </span>
      <PageIntro
        className="relative z-10 pt-[60px] max-md:pt-[50px]"
        eyebrow="Page not found"
        title={
          <>
            A little off
            <br />
            <em>the map.</em>
          </>
        }
        description="The page you’re looking for doesn’t exist or may have moved."
      />
      <div className="relative z-10 flex items-center gap-[21px] max-md:flex-col max-md:items-start max-md:gap-4">
        <Link
          className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-brand px-4 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] max-md:min-h-[43px] max-md:text-[10px]"
          to="/"
        >
          <ArrowLeft size={16} /> Back home
        </Link>
        <Link
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-all hover:gap-3"
          to="/projects"
        >
          Browse projects <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
