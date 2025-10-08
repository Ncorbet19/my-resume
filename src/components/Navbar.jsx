// src/components/Navbar.jsx
export default function Navbar() {
  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects",   label: "Projects" },
    { href: "#contact",    label: "Contact"  },
  ];

  // one place to change the accent later if you want
  const btn =
    "bg-teal-600 text-white px-3 py-1.5 rounded-md " +
    "hover:bg-teal-700 active:bg-teal-800 transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400";

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold text-gray-800">Nicholas Corbet</a>

        <ul className="flex gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={btn}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
