import Navbar from "./components/Navbar";
import SchoolShowcase from "./components/SchoolShowcase";
import ProjectsShowcase from "./components/ProjectsShowcase";
import NickImg from "./assets/nick.png";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top" className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <header className="mx-auto max-w-5xl px-6 pt-16 pb-8">
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8">
            {/* LEFT: name + subtitle */}
            <div className="text-left">
              <h1 className="text-balance text-5xl sm:text-6xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
                  Nicholas Corbet
                </span>
              </h1>

              <p className="mt-3 text-balance text-xl text-slate-600/90 leading-relaxed">
                Building clean web apps & intelligent systems at IU
              </p>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-emerald-300/50" />
            </div>

            {/* RIGHT: circular avatar */}
            <div className="shrink-0">
              <img
                src={NickImg}
                alt="Nick Corbet"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover ring-2 ring-emerald-200/70 shadow-sm"
                draggable="false"
              />
            </div>
          </div>
        </header>

        <SchoolShowcase />
        <ProjectsShowcase />

        {/* ...rest of your sections... */}
      </main>
    </>
  );
}
