import { useState, useEffect, Fragment } from "react";
import viuLogo from "../assets/viu_full_standard.svg";
import artLogo from "../assets/ART.svg";
import codeLogo from "../assets/code-svgrepo-com.svg";

const DURATION_MS = 700;
const BASE_SIZE = 150; // desktop/tablet default; mobile scales below inside component

// ——— Tweakables (change these and it will update) ———
const MOBILE_SIZE = 72;                 // px circle diameter on mobile
const MOBILE_GAP_FACTOR = 0.08;         // gap as a fraction of SIZE (mobile)
const MOBILE_GAP_MIN_PX = 2;            // min gap in px between circles (mobile)
const MOBILE_DETAILS_MINH_REM = 10;     // reserved details height under circles (mobile)
const DESKTOP_DETAILS_MINH_REM = 14;    // reserved text height under each column (desktop)
const SECTION_PB_MOBILE_REM = 3;       // bottom padding (mobile)
const SECTION_PB_DESKTOP_REM = 3;      // bottom padding (desktop/tablet)

const MOBILE_TEXT_MAX_CH = 60;          // max ~characters per line for mobile details

// Shared circle colors (use same color for all items)
const CIRCLE_BASE = "#bfdbfe"; // blue-200
const CIRCLE_DARK = "#93c5fd"; // blue-300

export default function WorkExperience() {
  // --- Responsive sizing (mobile-friendly) ---
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isSmall = vw <= 560; // treat narrow viewports as mobile
  const SIZE = isSmall ? MOBILE_SIZE : BASE_SIZE; // smaller circles on mobile
  const LIFT = Math.round(SIZE * (isSmall ? 0.72 : 0.8));
  const COL_GAP = Math.round(SIZE * (isSmall ? 0.32 : 0.8)); // tighter column gap on mobile
  const TEXT_PULL = Math.round(SIZE * (isSmall ? 0.36 : 0.5)); // pull text a bit less on mobile
  const items = [
    {
      company: "Historical Artcraft Theater",
      role: "Volunteer",
      period: "2016–2018 • Franklin, IN",
      blurb:
        "Helped run show nights and events: customer service, concessions, seating, and setup/cleanup. Built reliability and teamwork in a busy, public-facing setting.",
      initials: "HA",
      icon: artLogo,
      // sky palette
      base: "#bae6fd", // sky-200
      dark: "#7dd3fc", // sky-300
    },
    {
      company: "VIU bakery program",
      role: "Web development",
      period: "Summer 2023 • Nanaimo, BC",
      blurb:
        "Flutter/Dart practicum project replacing bakery recipe Excel sheets with a simple mobile app. Collaborated with a teammate on UI and data model.",
      initials: "VIU",
      icon: viuLogo,
      // blue palette to match VIU brand
      base: "#bfdbfe", // blue-200
      dark: "#93c5fd", // blue-300
    },
    {
      company: "Freelance Work",
      role: "Web development — Dog Sitting Website",
      period: "September 2023 – December 2023 • Remote",
      blurb:
        "Client site for managing dog‑sitting requests. React + HTML/CSS front end; Firebase backend. Containerized with Docker and set up CI/CD and basic tests on GitHub.",
      initials: "FW",
      icon: codeLogo,
      iconScale: 0.56,
      // emerald palette (soft green to match your style)
      base: "#a7f3d0", // emerald-200
      dark: "#6ee7b7", // emerald-300
    },
  ];

  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null); // <— NEW
  const handleClick = (i) => setActive((cur) => (cur === i ? null : i));

  return (
    <section
      className="mx-auto max-w-5xl px-3 sm:px-4"
      style={{ paddingBottom: `${isSmall ? SECTION_PB_MOBILE_REM : SECTION_PB_DESKTOP_REM}rem` }}
    >
      <h2 className="text-center text-lg sm:text-2xl font-semibold text-slate-800">
        Work Experience
      </h2>

      <div className="relative mt-8" style={{ paddingTop: LIFT }}>
        {!isSmall ? (
          // ===== DESKTOP/TABLET (unchanged behavior) =====
          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: `${SIZE}px auto`,
              columnGap: COL_GAP,
              alignItems: "end",
              justifyItems: "center",
            }}
          >
            {items.map((item, i) => {
              const up = active === i;
              const isHover = hovered === i;
              const bg = up || isHover ? CIRCLE_DARK : CIRCLE_BASE;
              return (
                <Fragment key={i}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      gridColumn: `${i + 1} / ${i + 2}`,
                      gridRow: "1 / 2",
                      transform: `translateY(${up ? -LIFT : 0}px)`,
                      transition: `transform ${DURATION_MS}ms ease-in-out`,
                      width: SIZE,
                      height: SIZE,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleClick(i)}
                      aria-pressed={up}
                      aria-label={`${item.company}${item.role ? " — " + item.role : ""}`}
                      className="rounded-full shadow-sm border border-black/10 focus:outline-none focus:ring-4 focus:ring-teal-300/40 transition-[transform,background-color] duration-200 ease-out transform-gpu will-change-transform"
                      style={{
                        width: SIZE,
                        height: SIZE,
                        background: bg,
                        transform: `scale(${hovered === i ? (isSmall ? 1.03 : 1.06) : 1})`,
                        transformOrigin: "50% 50%",
                      }}
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt=""
                          aria-hidden
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                          style={{ width: Math.round(SIZE * (item.iconScale ?? 0.7)), height: Math.round(SIZE * (item.iconScale ?? 0.7)), objectFit: "contain" }}
                        />
                      ) : (
                        <span className="absolute inset-0 grid place-items-center text-slate-700 font-semibold text-lg select-none">
                          {item.initials ?? "•"}
                        </span>
                      )}
                    </button>
                  </div>

                  <div
                    className="text-center"
                    style={{
                      gridColumn: `${i + 1} / ${i + 2}`,
                      gridRow: "2 / 3",
                      transform: `translateY(${up ? -TEXT_PULL : 8}px)`,
                      opacity: up ? 1 : 0,
                      pointerEvents: "none",
                      transition: `transform ${DURATION_MS}ms ease-in-out, opacity ${DURATION_MS}ms ease-in-out`,
                      width: isSmall ? "min(34ch, 90vw)" : "min(36ch, 70vw)",
                      justifySelf: "center",
                      minHeight: `${DESKTOP_DETAILS_MINH_REM}rem`, // reserve height so open/close doesn’t change page length
                    }}
                    aria-live="polite"
                  >
                    {up && (
                      <>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">{item.company}</h3>
                        {(item.role || item.period) && (
                          <p className="text-sm sm:text-base text-gray-600 mt-1">{[item.role, item.period].filter(Boolean).join(" • ")}</p>
                        )}
                        {item.blurb && (
                          <p className="text-sm sm:text-base leading-6 text-gray-800 mt-3">{item.blurb}</p>
                        )}
                      </>
                    )}
                  </div>
                </Fragment>
              );
            })}
          </div>
        ) : (
          // ===== MOBILE (new behavior: 3 small circles in a row, one shared details area) =====
          <div className="relative">
            {/* Row of circles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                columnGap: Math.max(MOBILE_GAP_MIN_PX, Math.round(SIZE * MOBILE_GAP_FACTOR)), // mobile circle gap
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              {items.map((item, i) => {
                const up = active === i;
                const isHover = hovered === i;
                const bg = up || isHover ? CIRCLE_DARK : CIRCLE_BASE;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      transform: `translateY(${up ? -LIFT : 0}px)`,
                      transition: `transform ${DURATION_MS}ms ease-in-out`,
                      width: SIZE,
                      height: SIZE,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleClick(i)}
                      aria-pressed={up}
                      aria-label={`${item.company}${item.role ? " — " + item.role : ""}`}
                      className="rounded-full shadow-sm border border-black/10 focus:outline-none focus:ring-4 focus:ring-teal-300/40 transition-[transform,background-color] duration-200 ease-out transform-gpu will-change-transform"
                      style={{
                        width: SIZE,
                        height: SIZE,
                        background: bg,
                        transform: `scale(${isHover ? 1.03 : 1})`,
                        transformOrigin: "50% 50%",
                      }}
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt=""
                          aria-hidden
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                          style={{ width: Math.round(SIZE * (item.iconScale ?? 0.7)), height: Math.round(SIZE * (item.iconScale ?? 0.7)), objectFit: "contain" }}
                        />
                      ) : (
                        <span className="absolute inset-0 grid place-items-center text-slate-700 font-semibold text-lg select-none">
                          {item.initials ?? "•"}
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Shared details area under all three circles */}
            <div
              className="mt-4 text-center"
              style={{
                // Always reserve space so tapping doesn’t extend the page height
                minHeight: `${MOBILE_DETAILS_MINH_REM}rem`,
                opacity: active != null ? 1 : 0,
                transition: `opacity ${DURATION_MS}ms ease-in-out`,
                maxWidth: `min(${MOBILE_TEXT_MAX_CH}ch, 96vw)`, // allow more words per line on mobile
                margin: "12px auto 0",      // center it
              }}
              aria-live="polite"
            >
              {active != null && (
                <>
                  <h3 className="text-lg font-semibold text-slate-900">{items[active].company}</h3>
                  {(items[active].role || items[active].period) && (
                    <p className="text-xs text-gray-600 mt-1">{[items[active].role, items[active].period].filter(Boolean).join(" • ")}</p>
                  )}
                  {items[active].blurb && (
                    <p className="text-xs leading-5 text-gray-800 mt-3 px-1">{items[active].blurb}</p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
