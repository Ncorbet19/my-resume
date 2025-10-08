// src/components/ProjectsShowcase.jsx
import { useLayoutEffect, useRef, useState } from "react";

const DURATION_MS = 700;
const EXTRA_LEFT = 120;   // px past the left edge
const EXTRA_RIGHT = 85;   // px past the right edge
const ROW_BUFFER = 1;    // extra vertical height so rows never overlap

function ProjectRow({
  title,
  description,
  size = 120, // circle diameter (px)
  isOpen = false,
  onToggle = () => {},
  titleClassName = "font-semibold leading-tight text-teal-700 text-2xl sm:text-3xl",
  descClassName = "max-w-[70ch] text-left text-gray-800 text-lg sm:text-xl",
}) {
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const [travelPx, setTravelPx] = useState(0);

  // measure slide distance
  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !btnRef.current) return;
      const W = containerRef.current.clientWidth || 0;
      const B = btnRef.current.offsetWidth || size;
      setTravelPx(Math.max(0, W - B));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (btnRef.current) ro.observe(btnRef.current);
    return () => ro.disconnect();
  }, [size]);

  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "9999px",
    transform: `translate(${isOpen ? travelPx + EXTRA_RIGHT : -EXTRA_LEFT}px, -50%)`,
    transition: `transform ${DURATION_MS}ms ease-in-out`,
  };

  const titleStyle = {
    transform: `translateX(${isOpen ? 24 : 0}px)`,
    opacity: isOpen ? 0 : 1,
    transition: `transform ${DURATION_MS}ms ease-in-out, opacity ${Math.round(
      DURATION_MS * 0.7
    )}ms ease-in-out`,
  };

  const descStyle = {
    transform: `translateX(${isOpen ? 0 : -24}px)`,
    opacity: isOpen ? 1 : 0,
    transition: `transform ${DURATION_MS}ms ease-in-out, opacity ${Math.round(
      DURATION_MS * 0.85
    )}ms ease-in-out`,
    pointerEvents: isOpen ? "auto" : "none",
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible"
      style={{ minHeight: size + ROW_BUFFER, paddingTop: 12, paddingBottom: 12 }}
    >
      {/* Title layer */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-start z-0 pointer-events-none">
        <h3 className={titleClassName} style={titleStyle}>
          {title}
        </h3>
      </div>

      {/* Description layer */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-start z-0 pointer-events-none">
        <p className={descClassName} style={descStyle} aria-hidden={!isOpen}>
          {description}
        </p>
      </div>

      {/* Sliding circle */}
      <button
        ref={btnRef}
        onClick={onToggle}
        aria-expanded={isOpen}
        className="absolute top-1/2 left-0 -translate-y-1/2 z-50 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-sm border border-black/10 focus:outline-none focus:ring-4 focus:ring-teal-300/40 rounded-full"
        style={circleStyle}
      >
        <span className="sr-only">
          {isOpen ? "Hide project details" : "Show project details"}
        </span>
      </button>
    </div>
  );
}

export default function ProjectsShowcase() {
  // You can swap these with your real data later.
  const projects = [
    { title: "Project Title 1", description: "Project description 1" },
    { title: "Project Title 2", description: "Project description 2" },
    { title: "Project Title 3", description: "Project description 3" },
  ];

  // Single-open state like your SchoolShowcase
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (idx) => {
    setActiveIndex((cur) => (cur === idx ? null : idx)); // toggle; close others
  };

  return (
    <div className="mx-auto max-w-5xl px-4 space-y-16">
      {projects.map((p, i) => (
        <ProjectRow
          key={i}
          size={110}                 // change per row if you like
          title={p.title}
          description={p.description}
          isOpen={activeIndex === i}
          onToggle={() => handleToggle(i)}
          // Optional per-row overrides:
          // titleClassName="font-semibold leading-tight text-teal-700 text-3xl sm:text-4xl"
          // descClassName="max-w-[70ch] text-left text-gray-800 text-xl"
        />
      ))}
    </div>
  );
}
