// src/components/ProjectsShowcase.jsx
import { useLayoutEffect, useRef, useState } from "react";
import codeIcon from "../assets/code-svgrepo-com.svg";
import ethicsIcon from "../assets/ai-ethics-svgrepo-com.svg";
import aiIcon from "../assets/ai-svgrepo-com.svg";
import reflectionPdf from "../assets/Individual_Reflection_Nicholas_Corbet.pdf";

const DURATION_MS = 700;
const ROW_BUFFER = 1; // extra vertical height so rows never overlap

// --- position tuning (px) ---
// Positive values push the circle to the RIGHT; negative values push LEFT.
// These are added to the computed resting positions.
const CLOSED_X_OFFSET = -20; // closed/resting on the left side
const OPEN_X_OFFSET = 200;   // open/resting on the right side
const CLOSED_X_OFFSET_MOBILE = -34; // a bit further left when closed (mobile)
const OPEN_X_OFFSET_MOBILE   = 126;  // a little further right when open (mobile)

function ProjectRow({
  title,
  description,
  mobileDescription,
  iconSrc = codeIcon,
  size = 120, // circle diameter (px)
  isOpen = false,
  onToggle = () => {},
  titleClassName =
    "font-semibold leading-tight text-teal-700 text-lg sm:text-2xl md:text-3xl",
  descClassName =
    "text-left text-gray-800 text-[11px] sm:text-sm md:text-base max-w-[56ch] sm:max-w-[60ch] md:max-w-[64ch] leading-5 sm:leading-6",
}) {
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const [travelPx, setTravelPx] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  // measure slide distance
  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !btnRef.current) return;
      const W = containerRef.current.clientWidth || 0;
      const B = btnRef.current.offsetWidth || size;
      setTravelPx(Math.max(0, W - B));
      setIsSmall(W <= 560); // only treat narrow rows as mobile
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (btnRef.current) ro.observe(btnRef.current);
    return () => ro.disconnect();
  }, [size]);

  // Desktop uses the original behavior (unchanged)
  const extraLeft = (-Math.min(size, 120) * 1) + CLOSED_X_OFFSET;
  const extraRight = (Math.max(-Math.min(size * 0.9, 100), -size)) + OPEN_X_OFFSET;

  // Mobile: nudge section right and clamp open so it never crosses the right edge
  const LEFT_PAD  = 0;   // px — let closed circle sit closer to the edge
  const RIGHT_PAD = -16;  // px — allow a touch more right overhang
  const closedMin = -Math.round(size * 0.80); // allow up to ~20% visible if needed
  const closedX   = Math.max(closedMin, CLOSED_X_OFFSET_MOBILE);
  const unclampedOpenX = travelPx + OPEN_X_OFFSET_MOBILE; // push further right on mobile
  const openX     = Math.min(travelPx - RIGHT_PAD, Math.max(0, unclampedOpenX));

  // Keep button hitbox constant (no scale on the button itself)
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "9999px",
    transform: `translate(${isSmall ? (isOpen ? openX : closedX) : (isOpen ? travelPx + extraRight : extraLeft)}px, -50%) scale(${isSmall && isOpen ? 0.5 : 1})`,
    transition: `transform ${DURATION_MS}ms ease-in-out`,
  };

  const TITLE_SHIFT_MOBILE_CLOSED = 50;  // px right when closed
  const DESC_SHIFT_MOBILE_OPEN    = -32; // px left when open (mobile)

  const titleStyle = {
    transform: `translateX(${isOpen ? (isSmall ? 16 : 24) : (isSmall ? TITLE_SHIFT_MOBILE_CLOSED : 0)}px)`,
    opacity: isOpen ? 0 : 1,
    transition: `transform ${DURATION_MS}ms ease-in-out, opacity ${Math.round(
      DURATION_MS * 0.7
    )}ms ease-in-out`,
  };

  const descStyle = {
    transform: `translateX(${isOpen ? (isSmall ? DESC_SHIFT_MOBILE_OPEN : 0) : -24}px)`,
    opacity: isOpen ? 1 : 0,
    transition: `transform ${DURATION_MS}ms ease-in-out, opacity ${Math.round(
      DURATION_MS * 0.85
    )}ms ease-in-out`,
    pointerEvents: isOpen ? "auto" : "none",
  };

  const displayDesc = isSmall && mobileDescription ? mobileDescription : description;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible"
      style={{
        minHeight: size + ROW_BUFFER,
        paddingTop: isSmall ? 16 : 12,
        paddingBottom: isSmall ? 20 : 12,
        // Reserve space on the right so desktop text won't be covered by the open circle
        paddingRight: isSmall ? 12 : size + 200,
      }}
    >
      {/* Title layer */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-start z-[1] pointer-events-none">
        <h3 className={titleClassName} style={titleStyle}>
          {title}
        </h3>
      </div>

      {/* Description layer */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-start z-[1] pointer-events-none">
        <p className={descClassName} style={descStyle} aria-hidden={!isOpen}>
          {displayDesc}
        </p>
      </div>

      {/* Sliding circle (no-jitter: visual scales inside) */}
      <button
        ref={btnRef}
        onClick={onToggle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-expanded={isOpen}
        className="absolute top-1/2 left-0 z-10 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-300/40"
        style={circleStyle}
      >
        {/* Inner visual that actually scales & colors; hitbox stays stable */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none transform-gpu transition-transform duration-200 ease-out shadow-sm border border-black/10"
          style={{
            transform: `scale(${isHover ? 1.08 : 1})`,
            backgroundColor: isHover ? "#0d9488" : "#14b8a6",
          }}
        />
        {/* Centered code icon */}
        <img
          src={iconSrc}
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 pointer-events-none select-none"
        />
        <span className="sr-only">
          {isOpen ? "Hide project details" : "Show project details"}
        </span>
      </button>
    </div>
  );
}

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "Bakery Program app",
      description:
        "Flutter/Dart mobile app built as a VIU ITAS practicum to replace the bakery’s Excel recipe sheets. Two‑person project; designed clean UI and data model for recipes, ingredients, and steps. Shipped a usable prototype by end of term.",
      mobileDescription:
        "Flutter app replacing bakery Excel sheets. 2‑person practicum; designed recipe/ingredient data model and shipped a working prototype.",
    },
    {
      title: "Dog Sitting Website",
      description:
        "Client site that lets owners submit requests and the business manage them. React + HTML/CSS front end; Firebase (NoSQL) for data. Containerized with Docker; CI/CD and tests on GitHub for quick, reliable deploys.",
      mobileDescription:
        "React + Firebase site for dog‑sitting requests. Dockerized with CI/CD and tests on GitHub.",
    },
    {
      title: "PET SILO",
      description:
        "Terminal Tamagotchi‑style game in C for IU Software Systems Engineering (Apr–May 2025). Focused on clean architecture and safe memory use; aligned with UN SDG 3 (health & well-being). Built in Vim; leveraged Copilot within project guidelines.",
      mobileDescription:
        "C terminal Tamagotchi game (Apr–May 2025). Clean architecture, safe memory; aligned with UN SDG 3.",
    },
    {
      title: "Ethics In AI",
      description: (
        <>
          A short reflection on what I learned about AI ethics—its biases, fairness, accountability, transparency, and sustainability—and how these ideas guide the way I design and use technology. It ends with a few practical principles I plan to follow as an engineer.{' '}
          <a href={reflectionPdf} download className="underline">Download full paper</a>.
        </>
      ),
      mobileDescription: (
        <>
          What I learned about AI ethics—fairness, accountability, transparency, and sustainability—and how it will shape my work.{' '}
          <a href={reflectionPdf} download className="underline">Full paper</a>.
        </>
      ),
      icon: aiIcon,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [circleSize, setCircleSize] = useState(110);
  const wrapRef = useRef(null);

  // Compute a responsive circle size based on available width
  useLayoutEffect(() => {
    const measure = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth || 0;
      // Circle scales with container width. Clamp between 68 and 150 px.
      const base = w < 640 ? 0.15 : 0.18; // slightly smaller on mobile
      const s = Math.round(Math.max(68, Math.min(w * base, 150)));
      setCircleSize(s);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const handleToggle = (idx) => {
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <div
      ref={wrapRef}
      className="mx-auto w-full max-w-5xl pl-5 pr-1 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 mb-24 sm:mb-32 lg:mb-40"
    >
      <h2 id="projects" className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2 text-center">Projects</h2>

      {projects.map((p, i) => (
        <ProjectRow
          key={i}
          size={circleSize}
          title={p.title}
          description={p.description}
          mobileDescription={p.mobileDescription}
          iconSrc={p.icon || undefined}
          isOpen={activeIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}