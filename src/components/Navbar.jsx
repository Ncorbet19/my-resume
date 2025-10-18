// src/components/Navbar.jsx
import { useState } from "react";
import resumePdf from "../assets/Nicholas_Corbet_resume.pdf";

export default function Navbar() {
  const btn =
    "bg-teal-600 text-white rounded-md whitespace-nowrap flex-shrink-0 " +
    "px-2.5 py-1 text-sm sm:px-3 sm:py-1.5 sm:text-base " +
    "hover:bg-teal-700 active:bg-teal-800 transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400";

  const githubUrl = "https://github.com/Ncorbet19";
  const emailHref = "mailto:corbet_n@aol.com";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-3xl mx-auto flex flex-nowrap items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
        <a
          href="#top"
          className="font-semibold text-gray-800 truncate pr-1 text-xs sm:text-base md:text-lg"
        >
          Nicholas Corbet
        </a>

        {/* Desktop buttons */}
        <ul className="hidden sm:flex gap-3 flex-nowrap">
          <li>
            <a href={resumePdf} download className={btn} aria-label="Download résumé PDF">
              Download résumé
            </a>
          </li>
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btn}
              aria-label="Open GitHub profile in a new tab"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={emailHref}
              className={btn}
              aria-label="Email Nicholas Corbet"
            >
              Email me
            </a>
          </li>
        </ul>

        {/* Mobile dropdown */}
        <div className="sm:hidden relative">
          <button
            type="button"
            className={btn}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full mt-2 w-44 rounded-md border border-slate-200 bg-white shadow-lg overflow-hidden"
            >
              <a
                role="menuitem"
                href={resumePdf}
                download
                className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                Download résumé
              </a>
              <a
                role="menuitem"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                GitHub
              </a>
              <a
                role="menuitem"
                href={emailHref}
                className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                Email me
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
