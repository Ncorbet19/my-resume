import Navbar from "./components/Navbar";
import SchoolShowcase from "./components/SchoolShowcase";
import ProjectsShowcase from "./components/ProjectsShowcase";
import NickImg from "./assets/nick.png";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top" className="max-w-3xl mx-auto px-6 pt-28 sm:pt-24 pb-12">
        <header className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pb-8">
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8">
            {/* LEFT: name + subtitle */}
            <div className="text-left">
              <h1 className="text-balance text-4xl sm:text-6xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
                  Nicholas Corbet
                </span>
              </h1>

              <p className="mt-3 text-balance text-base sm:text-xl text-slate-600/90 leading-relaxed">
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

        <div className="mt-6 sm:mt-10">
          <SchoolShowcase />
        </div>
        <ProjectsShowcase />

        <WorkExperience />

        {/* Additional qualifications */}
        <section id="additional-qualifications" className="mx-auto max-w-5xl px-3 sm:px-6 mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Additional qualifications</h2>
          <ul className="mt-4 list-disc pl-5 sm:pl-6 text-slate-700 leading-relaxed space-y-2">
            <li>Fluent in Swedish and English.</li>
            <li>Triple citizenship: United States, Canada, and Sweden.</li>
            <li>Experience with 3D modeling, 3D printing, and laser cutting.</li>
          </ul>
        </section>

        {/* References */}
        <section id="references" className="mx-auto max-w-5xl px-3 sm:px-6 mt-12 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Reference</h2>
          <div className="mt-4 text-slate-700 leading-relaxed">
            <p className="font-semibold">David Croft</p>
            <p className="italic">Department Chair, ITAS Web and Mobile Development Program<br />Vancouver Island University</p>
            <p className="mt-2">Email: <a href="mailto:croftd@itas.ca" className="text-emerald-600 hover:underline">croftd@itas.ca</a></p>
            <p>Phone: 250-619-6763</p>
          </div>
        </section>

        {/* ...rest of your sections... */}
      </main>
    </>
  );
}