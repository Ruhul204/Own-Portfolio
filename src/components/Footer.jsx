import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex min-h-[84px] w-[calc(100%_-_64px)] max-w-[1200px] items-center justify-between gap-5 border-b border-border max-md:min-h-[72px] max-md:w-[calc(100%_-_40px)]">
        <Link
          className="inline-flex items-center gap-2.5 font-heading text-[17px] font-bold tracking-[-.06em]"
          to="/"
        >
          <span className="grid size-[30px] place-items-center rounded-[9px] border border-[#dbe4f4] bg-[#eff5ff] font-heading text-sm font-bold text-brand">
            R
          </span>
          <span>
            Ruhul<span className="text-brand">.</span>
          </span>
        </Link>
        <p className="m-0 text-[10px] text-[#737373] max-md:hidden">
          Learning the craft. Building for people.
        </p>
        <button
          className="inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[9px] text-[#666] transition hover:text-brand"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={15} />
        </button>
      </div>
      <div className="mx-auto flex min-h-[57px] w-[calc(100%_-_64px)] max-w-[1200px] items-center justify-between gap-5 text-[8px] text-[#737373] max-md:grid max-md:w-[calc(100%_-_40px)] max-md:grid-cols-2 max-md:gap-3 max-md:py-4">
        <nav className="flex gap-4 max-md:gap-3" aria-label="Footer navigation">
          <Link className="hover:text-brand" to="/about">
            About
          </Link>
          <Link className="hover:text-brand" to="/projects">
            Projects
          </Link>
          <Link className="hover:text-brand" to="/contact">
            Contact
          </Link>
        </nav>
        <SocialLinks compact />
        <span className="max-md:col-span-2">© 2026 Md. Ruhul Amin Shovan</span>
      </div>
    </footer>
  );
}
