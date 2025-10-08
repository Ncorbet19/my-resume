// import { useState } from "react";
// import viuLogoUrl from "../assets/viu_full_standard.svg";
// import iuLogoUrl from "../assets/IU.svg";


// export default function SchoolShowcase() {
//   const [active, setActive] = useState(null);
//   const isOpen = active !== null;

//   const handleClick = (side) => {
//     if (!isOpen) setActive(side);
//     else if (active === side) setActive(null);
//     else setActive(side);
//   };

//   // --- geometry ---
//   const D = 7,
//     R = 3.5; // how far to push when OPEN (D) and circle radius (R)
//   const Dsm = 8,
//     Rsm = 4; // sm+ version
//   const GAP = 1;
  

//   // --- your CLOSED positions (kept) : centered pair ---
//   const leftClosed = `translate(calc(-${R}rem - ${GAP}rem), -100%)`;
//   const rightClosed = `translate(calc(${R}rem + ${GAP}rem),  -100%)`;
//   const leftClosedSm = `translate(calc(-${Rsm}rem - ${GAP}rem), -100%)`;
//   const rightClosedSm = `translate(calc(${Rsm}rem + ${GAP}rem),  -100%)`;

//   // --- OPEN positions : same Y, slide farther left/right from center ---
//   const leftOpen = `translate(calc(-${D}rem - ${R}rem - ${GAP}rem), -140%)`;
//   const rightOpen = `translate(calc(${D}rem + ${R}rem + ${GAP}rem),  -140%)`;
//   const leftOpenSm = `translate(calc(-${Dsm}rem - ${Rsm}rem - ${GAP}rem), -140%)`;
//   const rightOpenSm = `translate(calc(${Dsm}rem + ${Rsm}rem + ${GAP}rem),  -140%)`;

//   const circle =
//     "rounded-full w-28 h-28 sm:w-32 sm:h-32 relative overflow-hidden " +
//     "transition-transform duration-700 ease-in-out will-change-transform";

//   return (
//     <section className="container mx-auto px-6 min-h-[60svh] grid place-items-center">
//       <div className="relative w-full h-64 sm:h-72 mx-auto">
//         {/* Always anchor at the CENTER; we only change translate() */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           {/* LEFT */}
//           <button
//             onClick={() => handleClick("left")}
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
//                 "transition-transform duration-300 ease-out hover:scale-100",
//               ].join(" ")}
//               aria-hidden
//             />
//             {/* VIU logo */}
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
//                 "transition-transform duration-300 ease-out hover:scale-100",
//               ].join(" ")}
//               aria-hidden
//             />
//             <span className="absolute inset-0 grid place-items-center pointer-events-none">
//               <img
//                 src={iuLogoUrl}
//                 alt="VIU logo"
//                 className="w-12 sm:w-19 h-auto object-contain select-none"
//                 draggable="false"
//               />
//             </span>
//           </button>
//         </div>

//         {/* sm overrides to keep the same motion on larger circles */}
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
//           <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//             {active === "left" && (
//               <div className="animate-credits-in text-center text-gray-800">
//                 <h3 className="font-semibold text-xl mb-1">
//                   VIU — IT &amp; Applied Systems
//                 </h3>
//                 <p className="text-base leading-7">
//                   A two-year, project-based diploma that trains you to design,
//                   build, and secure web and mobile apps. The program emphasizes
//                   full-stack/back-end development and covers programming
//                   fundamentals, databases, Linux/server admin, client- and
//                   server-side development, mobile, UI/UX, and cloud/DevSecOps.
//                   You work with modern stacks (HTML/CSS, JavaScript/JSON,
//                   Node.js, PHP, NoSQL), complete a practicum with a local
//                   employer (~4–6 weeks), and graduate ready for roles like
//                   full-stack or mobile developer, with pathways into security
//                   and AI-driven apps.
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


import { useState } from "react";
import viuLogoUrl from "../assets/viu_full_standard.svg";
import iuLogoUrl from "../assets/IU.svg";

export default function SchoolShowcase() {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const handleClick = (side) => {
    if (!isOpen) setActive(side);
    else if (active === side) setActive(null);
    else setActive(side);
  };

  // --- geometry ---
  const D = 7,  R = 3.5;  // OPEN travel (D) and circle radius (R)
  const Dsm = 8, Rsm = 4; // sm+ version

  // smaller closed gap so circles sit closer when nothing is selected
  const GAP_CLOSED = 0.35; // rem
  const GAP_OPEN   = 1.0;  // rem

  const TEXT_SHIFT_PX = 56;

  // CLOSED (tighter)
  const leftClosed     = `translate(calc(-${R}rem - ${GAP_CLOSED}rem), -50%)`;
  const rightClosed    = `translate(calc(${R}rem + ${GAP_CLOSED}rem), -50%)`;
  const leftClosedSm   = `translate(calc(-${Rsm}rem - ${GAP_CLOSED}rem), -50%)`;
  const rightClosedSm  = `translate(calc(${Rsm}rem + ${GAP_CLOSED}rem), -50%)`;

  // OPEN (normal spread)
  const leftOpen       = `translate(calc(-${D}rem - ${R}rem - ${GAP_OPEN}rem), -80%)`;
  const rightOpen      = `translate(calc(${D}rem + ${R}rem + ${GAP_OPEN}rem), -80%)`;
  const leftOpenSm     = `translate(calc(-${Dsm}rem - ${Rsm}rem - ${GAP_OPEN}rem), -80%)`;
  const rightOpenSm    = `translate(calc(${Dsm}rem + ${Rsm}rem + ${GAP_OPEN}rem), -80%)`;

  const circle =
    "rounded-full w-28 h-28 sm:w-32 sm:h-32 relative overflow-hidden " +
    "transition-transform duration-700 ease-in-out will-change-transform";

  return (
    // ↓ Reduced min-height and added small bottom margin to tighten gap to Projects
    <section className="container mx-auto px-6 grid place-items-center mb-8 min-h-[clamp(28svh,38svh,44svh)]">
      <div className="relative w-full h-56 sm:h-64 mx-auto">
        {/* Anchor at the center; we only change translate() */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
          {/* LEFT */}
          <button
            onClick={() => handleClick("left")}
            aria-pressed={active === "left"}
            className={[
              circle,
              active === "left" ? "bg-sky-300 shadow-md" : "bg-sky-200",
            ].join(" ")}
            style={{ transform: isOpen ? leftOpen : leftClosed }}
          >
            <span
              className={[
                "absolute inset-0 rounded-full bg-sky-500/10",
                active === "left" ? "scale-100" : "scale-0",
                "transition-transform duration-300 ease-out hover:scale-100",
              ].join(" ")}
              aria-hidden
            />
            <span className="absolute inset-0 grid place-items-center pointer-events-none">
              <img
                src={viuLogoUrl}
                alt="VIU logo"
                className="w-24 sm:w-28 h-auto object-contain select-none"
                draggable="false"
              />
            </span>
          </button>

          {/* RIGHT */}
          <button
            onClick={() => handleClick("right")}
            aria-pressed={active === "right"}
            className={[
              circle,
              active === "right" ? "bg-rose-300 shadow-md" : "bg-rose-200",
            ].join(" ")}
            style={{ transform: isOpen ? rightOpen : rightClosed }}
          >
            <span
              className={[
                "absolute inset-0 rounded-full bg-rose-500/10",
                active === "right" ? "scale-100" : "scale-0",
                "transition-transform duration-300 ease-out hover:scale-100",
              ].join(" ")}
              aria-hidden
            />
            <span className="absolute inset-0 grid place-items-center pointer-events-none">
              <img
                src={iuLogoUrl}
                alt="IU logo"
                className="w-12 sm:w-19 h-auto object-contain select-none"
                draggable="false"
              />
            </span>
          </button>
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
              <div className="animate-credits-in text-center text-gray-800">
                <h3 className="font-semibold text-xl mb-1">
                  VIU — IT &amp; Applied Systems
                </h3>
                <p className="text-base leading-7">
                  A two-year, project-based diploma in building and securing web
                  & mobile apps. Learn full-stack development with modern stacks
                  (fundamentals, databases, Linux/server, client/server, mobile,
                  UI/UX, cloud/DevSecOps), complete a 4–6-week practicum, and
                  graduate ready for full-stack or mobile roles—with pathways
                  into security and AI-driven work.
                </p>
              </div>
            )}
            {active === "right" && (
              <div className="animate-credits-in text-center text-gray-800">
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
