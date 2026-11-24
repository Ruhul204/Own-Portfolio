import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("shovan-theme");
    const initial =
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.dataset.theme = initial;
    return initial;
  });
  const menuButton = useRef(null);
  const themeMenu = useRef(null);
  const location = useLocation();
  const close = () => setOpen(false);

  function handleKeyDown(event) {
    if (event.key === "Escape" && themeMenuOpen) {
      setThemeMenuOpen(false);
    }
    if (event.key === "Escape" && open) {
      close();
      menuButton.current?.focus();
    }
  }

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!themeMenu.current?.contains(event.target)) setThemeMenuOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = (event) => {
      if (!window.localStorage.getItem("shovan-theme")) {
        const nextTheme = event.matches ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
      }
    };
    preference.addEventListener("change", syncSystemTheme);
    return () => preference.removeEventListener("change", syncSystemTheme);
  }, []);

  function chooseTheme(nextTheme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("shovan-theme", nextTheme);
    setThemeMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-[16px]"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto flex h-[76px] w-[calc(100%_-_64px)] max-w-[1200px] items-center justify-between gap-7 max-md:h-[68px] max-md:w-[calc(100%_-_40px)]">
        <Link
          className="inline-flex items-center gap-2.5 font-heading text-lg font-bold tracking-[-.06em]"
          to="/"
          onClick={close}
          aria-label="Ruhul, home"
        >
          <span className="grid size-[30px] place-items-center rounded-[9px] border border-[#dbe4f4] bg-[#eff5ff] font-heading text-sm font-bold tracking-normal text-brand">
            R
          </span>
          <span>
            Ruhul<span className="text-brand">.</span>
          </span>
        </Link>
        <button
          ref={menuButton}
          className="order-3 hidden size-[46px] place-items-center rounded-md border border-border bg-white max-md:grid"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          id="primary-navigation"
          className={
            (open ? "flex " : "hidden ") +
            "absolute left-0 right-0 top-[67px] z-20 flex-col items-stretch gap-0 border-b border-border bg-white px-5 pb-4 pt-2 shadow-xl shadow-slate-900/5 md:static md:ml-auto md:mr-3 md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
          }
          aria-label="Main navigation"
        >
          {links.map(([name, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={close}
              className={({ isActive }) =>
                [
                  "nav-link relative border-b border-slate-100 py-3 text-xs text-secondary transition-colors hover:text-ink md:border-0 md:py-2",
                  isActive ? "font-semibold text-brand" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="theme-control" ref={themeMenu}>
            <button
              className="theme-trigger"
              type="button"
              aria-label="Choose color theme"
              aria-haspopup="true"
              aria-expanded={themeMenuOpen}
              onClick={() => setThemeMenuOpen((value) => !value)}
            >
              {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            {themeMenuOpen && (
              <div className="theme-menu" role="group" aria-label="Color theme">
                <button
                  type="button"
                  className={
                    "theme-option " + (theme === "light" ? "selected" : "")
                  }
                  aria-pressed={theme === "light"}
                  onClick={() => chooseTheme("light")}
                >
                  <Sun size={15} /> Light
                </button>
                <button
                  type="button"
                  className={
                    "theme-option " + (theme === "dark" ? "selected" : "")
                  }
                  aria-pressed={theme === "dark"}
                  onClick={() => chooseTheme("dark")}
                >
                  <Moon size={15} /> Dark
                </button>
              </div>
            )}
          </div>
          <a
            className="ml-auto inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-[#d9e2f2] bg-[#f8fbff] px-3 text-[11px] font-semibold text-[#1d4ed8] transition hover:-translate-y-px hover:border-[#b8cdf5] hover:bg-[#edf4ff] max-md:ml-auto max-md:mr-0 max-md:px-2.5"
            href="/Md-Ruhul-Amin-Shovan-Resume.pdf"
            download="Md-Ruhul-Amin-Shovan-Resume.pdf"
            aria-label="Download résumé"
            title="Download résumé"
          >
            <ArrowDownToLine size={15} />
            <span className="max-md:hidden">Resume</span>
          </a>
        </div>
      </div>
      {location.pathname !== "/" && (
        <div className="route-progress" key={location.pathname} />
      )}
    </header>
  );
}
