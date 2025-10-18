// import { useState } from "react";
// import viuLogoUrl from "../assets/viu_full_standard.svg";
// import iuLogoUrl from "../assets/IU.svg";

// export default function SchoolShowcase() {
//   const [active, setActive] = useState(null);
//   const isOpen = active !== null;
//   const [hoverLeft, setHoverLeft] = useState(false);
//   const [hoverRight, setHoverRight] = useState(false);

//   const handleClick = (side) => {
//     if (!isOpen) setActive(side);
//     else if (active === side) setActive(null);
//     else setActive(side);
//   };

//   // --- geometry ---
//   const D = 7,  R = 3.5;  // OPEN travel (D) and circle radius (R)
//   const Dsm = 8, Rsm = 4; // sm+ version

//   // smaller closed gap so circles sit closer when nothing is selected
//   const GAP_CLOSED = 0.35; // rem
//   const GAP_OPEN   = 1.0;  // rem

//   const TEXT_SHIFT_PX = 56;

//   // CLOSED (tighter)
//   const leftClosed     = `translate(calc(-${R}rem - ${GAP_CLOSED}rem), -50%)`;
//   const rightClosed    = `translate(calc(${R}rem + ${GAP_CLOSED}rem), -50%)`;
//   const leftClosedSm   = `translate(calc(-${Rsm}rem - ${GAP_CLOSED}rem), -50%)`;
//   const rightClosedSm  = `translate(calc(${Rsm}rem + ${GAP_CLOSED}rem), -50%)`;

//   // OPEN (normal spread)
//   const leftOpen       = `translate(calc(-${D}rem - ${R}rem - ${GAP_OPEN}rem), -80%)`;
//   const rightOpen      = `translate(calc(${D}rem + ${R}rem + ${GAP_OPEN}rem), -80%)`;
//   const leftOpenSm     = `translate(calc(-${Dsm}rem - ${Rsm}rem - ${GAP_OPEN}rem), -80%)`;
//   const rightOpenSm    = `translate(calc(${Dsm}rem + ${Rsm}rem + ${GAP_OPEN}rem), -80%)`;

//   const circle =
//     "rounded-full w-28 h-28 sm:w-32 sm:h-32 relative overflow-hidden " +
//     "transition-transform duration-700 ease-in-out will-change-transform";

//   return (
//     // ↓ Reduced min-height and added small bottom margin to tighten gap to Projects
//     <section className="container mx-auto px-6 grid place-items-center mb-8 min-h-[clamp(28svh,38svh,44svh)]">
//       <div className="relative w-full h-56 sm:h-64 mx-auto">
//         {/* Anchor at the center; we only change translate() */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
//           {/* LEFT */}
//           <button
//             onClick={() => handleClick("left")}
//             onMouseEnter={() => setHoverLeft(true)}
//             onMouseLeave={() => setHoverLeft(false)}
//             aria-pressed={active === "left"}
//             className={[
//               circle,
//               active === "left" ? "bg-sky-300 shadow-md" : "bg-sky-200",
//             ].join(" ")}
//             style={{ transform: isOpen ? leftOpen : leftClosed }}
//           >
//             <span
//               className={[
//                 "absolute inset-0 rounded-full bg-sky-500/10",
//                 active === "left" ? "scale-100" : "scale-0",
//                 "pointer-events-none",
//                 "transition-transform duration-300 ease-out",
//               ].join(" ")}
//               aria-hidden
//               style={{ transform: `scale(${(active === "left" ? 1 : 0) + (hoverLeft ? 0.1 : 0)})`, transition: "transform 200ms ease-out" }}
//             />
//             <span className="absolute inset-0 grid place-items-center pointer-events-none">
//               <img
//                 src={viuLogoUrl}
//                 alt="VIU logo"
//                 className="w-24 sm:w-28 h-auto object-contain select-none"
//                 draggable="false"
//               />
//             </span>
//           </button>

//           {/* RIGHT */}
//           <button
//             onClick={() => handleClick("right")}
//             onMouseEnter={() => setHoverRight(true)}
//             onMouseLeave={() => setHoverRight(false)}
//             aria-pressed={active === "right"}
//             className={[
//               circle,
//               active === "right" ? "bg-rose-300 shadow-md" : "bg-rose-200",
//             ].join(" ")}
//             style={{ transform: isOpen ? rightOpen : rightClosed }}
//           >
//             <span
//               className={[
//                 "absolute inset-0 rounded-full bg-rose-500/10",
//                 active === "right" ? "scale-100" : "scale-0",
//                 "pointer-events-none",
//                 "transition-transform duration-300 ease-out",
//               ].join(" ")}
//               aria-hidden
//               style={{ transform: `scale(${(active === "right" ? 1 : 0) + (hoverRight ? 0.1 : 0)})`, transition: "transform 200ms ease-out" }}
//             />
//             <span className="absolute inset-0 grid place-items-center pointer-events-none">
//               <img
//                 src={iuLogoUrl}
//                 alt="IU logo"
//                 className="w-12 sm:w-19 h-auto object-contain select-none"
//                 draggable="false"
//               />
//             </span>
//           </button>
//         </div>

//         {/* sm overrides to keep same motion on larger circles */}
//         <style>{`
//           @media (min-width: 640px) {
//             .leftClosedSm  { transform: ${leftClosedSm}; }
//             .rightClosedSm { transform: ${rightClosedSm}; }
//             .leftOpenSm    { transform: ${leftOpenSm}; }
//             .rightOpenSm   { transform: ${rightOpenSm}; }
//           }
//         `}</style>

//         {/* invisible anchors so the CSS above gets applied when needed */}
//         {isOpen ? (
//           <>
//             <div className="leftOpenSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
//             <div className="rightOpenSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
//           </>
//         ) : (
//           <>
//             <div className="leftClosedSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
//             <div className="rightClosedSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
//           </>
//         )}

//         {/* center text only when apart */}
//         {isOpen && (
//           <div
//             className="pointer-events-none absolute inset-0 flex items-center justify-center"
//             style={{ transform: `translateY(${TEXT_SHIFT_PX}px)` }}
//           >
//             {active === "left" && (
//               <div className="animate-credits-in text-center text-gray-800">
//                 <h3 className="font-semibold text-xl mb-1">
//                   VIU — IT &amp; Applied Systems
//                 </h3>
//                 <p className="text-base leading-7">
//                   A two-year, project-based diploma in building and securing web
//                   & mobile apps. Learn full-stack development with modern stacks
//                   (fundamentals, databases, Linux/server, client/server, mobile,
//                   UI/UX, cloud/DevSecOps), complete a 4–6-week practicum, and
//                   graduate ready for full-stack or mobile roles—with pathways
//                   into security and AI-driven work.
//                 </p>
//               </div>
//             )}
//             {active === "right" && (
//               <div className="animate-credits-in text-center text-gray-800">
//                 <h3 className="font-semibold text-xl mb-1">
//                   IU - Intelligent Systems Engineering
//                 </h3>
//                 <p className="text-base leading-7">
//                   A hands-on, project-based engineering degree that blends core
//                   engineering with computing, machine learning, and AI to build
//                   systems that sense and act—from smart devices and robotics to
//                   nanoscale/medical tech.
//                 </p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// src/components/SchoolShowcase.jsx
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import viuLogoUrl from "../assets/viu_full_standard.svg";
import iuLogoUrl from "../assets/IU.svg";

export default function SchoolShowcase() {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  // Detect small screens (Tailwind < sm)
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639.98px)").matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639.98px)");
    const onChange = (e) => setIsSmall(e.matches);
    // Modern
    mq.addEventListener?.("change", onChange);
    // Fallback
    if (!mq.addEventListener && mq.addListener) mq.addListener(onChange);
    return () => {
      mq.removeEventListener?.("change", onChange);
      if (!mq.removeEventListener && mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  // Scale only the buttons row (not the center text) to keep circles visible on small screens
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);


  // hover only affects visual scale of the circle itself
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const handleClick = (side) => {
    if (!isOpen) setActive(side);
    else if (active === side) setActive(null);
    else setActive(side);
  };

  // --- geometry ---
  const D = 7,  R = 3.5;   // OPEN travel (D) and circle radius (R)
  const Dsm = 8, Rsm = 4;  // sm+ version

  // gaps (edit these)
  const GAP_CLOSED = 0.10;          // rem for desktop/tablet closed gap
  const GAP_CLOSED_MOBILE = -2.5;   // rem for mobile closed gap
  const GAP_OPEN   = 5;             // rem for open gap (desktop/tablet)
  const GAP_OPEN_MOBILE = -1;    // rem for open gap on mobile (smaller = closer)

  // choose gaps/spread based on viewport
  const GAP_CLOSED_USE = isSmall ? GAP_CLOSED_MOBILE : GAP_CLOSED;
  const GAP_OPEN_USE   = isSmall ? GAP_OPEN_MOBILE   : GAP_OPEN;

  // Spread controls how far each circle travels from center when OPEN (1 = desktop default)
  const OPEN_SPREAD_DESKTOP = 1;
  const OPEN_SPREAD_MOBILE  = 0.22; // closer on mobile
  const OPEN_SPREAD         = isSmall ? OPEN_SPREAD_MOBILE : OPEN_SPREAD_DESKTOP;

  const TEXT_SHIFT_PX = 56;

  // Lift circles higher above the text on mobile when open
  const OPEN_Y = isSmall ? "-140%" : "-80%";

  // Measure needed width when open and shrink the buttons stage to fit the container
  const measureAndFit = () => {
    // Always reset before computing
    setScale(1);
    const container = containerRef.current;
    if (!container) return;

    // Closed state never scales
    if (!isOpen) { setScale(1); return; }

    // Compute the theoretical span (edge-to-edge) in rem for the two circles when OPEN.
    // spanRem = 2 * (D*OPEN_SPREAD + 2R + GAP_OPEN_USE)
    const spanRem = 2 * (D * OPEN_SPREAD + 2 * R + GAP_OPEN_USE);

    // Convert rem → px using root font size
    const rootFontPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const neededWidth = spanRem * rootFontPx;

    // Available px inside the container with a small side padding
    const contRect = container.getBoundingClientRect();
    const PADDING = 8; // px on each side
    const available = Math.max(0, contRect.width - PADDING * 2);

    // Scale to fit; clamp to sane bounds so circles don't vanish
    const nextScale = Math.min(1, available / Math.max(1, neededWidth));
    const clampedScale = Math.max(0.4, nextScale);
    setScale(clampedScale);
  };

  useLayoutEffect(() => {
    measureAndFit();
    const onResize = () => measureAndFit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, active]);


  // CLOSED (tighter)
  const leftClosed     = `translate(calc(-${R}rem - ${GAP_CLOSED_USE}rem), -50%)`;
  const rightClosed    = `translate(calc(${R}rem + ${GAP_CLOSED_USE}rem), -50%)`;
  const leftClosedSm   = `translate(calc(-${Rsm}rem - ${GAP_CLOSED_USE}rem), -50%)`;
  const rightClosedSm  = `translate(calc(${Rsm}rem + ${GAP_CLOSED_USE}rem), -50%)`;

  // OPEN (normal spread, responsive values)
  const leftOpen       = `translate(calc(-${D}rem * ${OPEN_SPREAD} - ${R}rem - ${GAP_OPEN_USE}rem), ${OPEN_Y})`;
  const rightOpen      = `translate(calc(${D}rem * ${OPEN_SPREAD} + ${R}rem + ${GAP_OPEN_USE}rem),  ${OPEN_Y})`;
  const leftOpenSm     = `translate(calc(-${Dsm}rem - ${Rsm}rem - ${GAP_OPEN}rem), -80%)`;
  const rightOpenSm    = `translate(calc(${Dsm}rem + ${Rsm}rem + ${GAP_OPEN}rem),  -80%)`;

  // Base circle (size is conditional so we can shrink when closed on mobile)
  const circleBase =
    "rounded-full relative overflow-hidden transition-transform duration-700 ease-in-out will-change-transform";
  const circleSize = isSmall ? (isOpen ? "w-24 h-24" : "w-20 h-20") : "w-28 h-28 sm:w-32 sm:h-32";

  // Inner logo sizes track circle size when closed on mobile
  const viuImgSize = isSmall ? (isOpen ? "w-20" : "w-16") : "w-24 sm:w-28";
  const iuImgSize  = isSmall ? (isOpen ? "w-10" : "w-8")  : "w-12 sm:w-19";

  return (
    <section className={`container mx-auto sm:px-6 grid place-items-center mb-20 sm:mb-8 min-h-[clamp(28svh,38svh,44svh)] ${isOpen ? "school-open" : ""}`}>
      <div ref={containerRef} className="relative w-full h-56 sm:h-64 mx-auto">
        {/* Anchor at the center; we only change translate() */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={stageRef}
            className={"flex items-center gap-0"}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              transition: "transform 160ms ease-out",
            }}
          >
            {/* LEFT */}
            <button
              ref={leftBtnRef}
              onClick={() => handleClick("left")}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              aria-pressed={active === "left"}
              className={[
                circleBase,
                circleSize,
                "shadow-md focus:outline-none focus:ring-4 focus:ring-sky-300/40",
              ].join(" ")}
              style={{
                transform: `${isOpen ? leftOpen : leftClosed} scale(${!isOpen && hoverLeft ? 1.08 : 1})`,
                transition: "transform 200ms ease-out, background-color 150ms ease-out",
                transformOrigin: "center center",
                backgroundColor: active === "left"
                  ? (hoverLeft ? "#60cdfa" : "#7dd3fc")  // active: mid between 300 and 400 on hover
                  : (hoverLeft ? "#a5d8fe" : "#bae6fd"), // inactive: mid between 200 and 300 on hover
              }}
            >
              {/* VIU logo */}
              <span className="absolute inset-0 grid place-items-center pointer-events-none">
                <img
                  src={viuLogoUrl}
                  alt="VIU logo"
                  className={`${viuImgSize} h-auto object-contain select-none`}
                  draggable="false"
                />
              </span>
            </button>

            {/* RIGHT */}
            <button
              ref={rightBtnRef}
              onClick={() => handleClick("right")}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              aria-pressed={active === "right"}
              className={[
                circleBase,
                circleSize,
                "shadow-md focus:outline-none focus:ring-4 focus:ring-rose-300/40",
              ].join(" ")}
              style={{
                transform: `${isOpen ? rightOpen : rightClosed} scale(${!isOpen && hoverRight ? 1.08 : 1})`,
                transition: "transform 200ms ease-out, background-color 150ms ease-out",
                transformOrigin: "center center",
                backgroundColor: active === "right"
                  ? (hoverRight ? "#fc8c9d" : "#fda4af")  // active: mid between 300 and 400 on hover
                  : (hoverRight ? "#fbbdc5" : "#fecdd3"), // inactive: mid between 200 and 300 on hover
              }}
            >
              {/* IU logo */}
              <span className="absolute inset-0 grid place-items-center pointer-events-none">
                <img
                  src={iuLogoUrl}
                  alt="IU logo"
                  className={`${iuImgSize} h-auto object-contain select-none`}
                  draggable="false"
                />
              </span>
            </button>
          </div>
        </div>

        {/* sm overrides to keep same motion on larger circles */}
        <style>{`
          @media (min-width: 640px) {
            .leftClosedSm  { transform: ${leftClosedSm}; }
            .rightClosedSm { transform: ${rightClosedSm}; }
            .leftOpenSm    { transform: ${leftOpenSm}; }
            .rightOpenSm   { transform: ${rightOpenSm}; }
          }
        `}</style>
        {/* Responsive font sizes for open state */}
        <style>{`
          /* When the showcase is open, make description fonts responsive to viewport width */
          .school-open .school-text {
            /* widen the text block and trim side padding on small screens */
            max-width: min(98vw, 48rem);
            padding-inline: clamp(0rem, 1.2vw, 0.5rem);
            margin-inline: auto;
          }
          .school-open .school-text h3 {
            font-size: clamp(0.82rem, 3.8vw, 1.25rem); /* ~13px → 20px */
            line-height: 1.18;
          }
          .school-open .school-text p {
            font-size: clamp(0.72rem, 3.4vw, 1rem); /* ~11.5px → 16px */
            line-height: 1.6;
          }
          @media (max-width: 380px) {
            .school-open .school-text h3 { font-size: clamp(0.8rem, 4.2vw, 1.12rem); }
            .school-open .school-text p  { font-size: clamp(0.68rem, 3.9vw, 0.95rem); }
          }
          @media (max-width: 340px) {
            .school-open .school-text h3 { font-size: clamp(0.76rem, 4.6vw, 1.05rem); }
            .school-open .school-text p  { font-size: clamp(0.64rem, 4.2vw, 0.9rem); }
          }
        `}</style>

        {/* invisible anchors so the CSS above gets applied when needed */}
        {isOpen ? (
          <>
            <div className="leftOpenSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
            <div className="rightOpenSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
          </>
        ) : (
          <>
            <div className="leftClosedSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
            <div className="rightClosedSm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />
          </>
        )}

        {/* center text only when apart */}
        {isOpen && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{ transform: `translateY(${TEXT_SHIFT_PX}px)` }}
          >
            {active === "left" && (
              <div className="school-text animate-credits-in text-center text-gray-800">
                <h3 className="font-semibold text-xl mb-1">
                  VIU — IT &amp; Applied Systems
                </h3>
                <p className="text-base leading-7">
                  A two-year, project-based diploma in building and securing web
                  &amp; mobile apps. Learn full-stack development with modern stacks
                  (fundamentals, databases, Linux/server, client/server, mobile,
                  UI/UX, cloud/DevSecOps), complete a 4–6-week practicum, and
                  graduate ready for full-stack or mobile roles—with pathways
                  into security and AI-driven work.
                </p>
              </div>
            )}
            {active === "right" && (
              <div className="school-text animate-credits-in text-center text-gray-800">
                <h3 className="font-semibold text-xl mb-1">
                  IU - Intelligent Systems Engineering
                </h3>
                <p className="text-base leading-7">
                  A hands-on, project-based engineering degree that blends core
                  engineering with computing, machine learning, and AI to build
                  systems that sense and act—from smart devices and robotics to
                  nanoscale/medical tech.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}