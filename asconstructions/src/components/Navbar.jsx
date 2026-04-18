import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";

const sections = [
  "home",
  "about",
  "stats",
  "projects",
  "work",
  "clients",
  "contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      // 🔥 scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollY / totalHeight) * 100);

      // 🔥 active section detection
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 TOP PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-0.75 bg-yellow-500 z-60 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-black/30 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* 🔥 LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="AS Constructions" className="h-10" />
            <span
              className={`text-lg font-semibold ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              AS Constructions
            </span>
          </a>

          {/* 🔥 DESKTOP NAV */}
          <ul
            className={`hidden md:flex gap-8 text-sm font-medium ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative transition ${
                    active === item
                      ? "text-yellow-500"
                      : "hover:text-yellow-400"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}

                  {/* 🔥 active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all duration-300 ${
                      active === item ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* 🔥 MOBILE BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1 z-50"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`w-6 h-0.5 transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              } ${scrolled || open ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`w-6 h-0.5 transition ${
                open ? "opacity-0" : ""
              } ${scrolled || open ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`w-6 h-0.5 transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              } ${scrolled || open ? "bg-black" : "bg-white"}`}
            />
          </button>
        </div>

        {/* 🔥 MOBILE MENU */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl font-medium text-gray-800">

            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    active === item
                      ? "text-yellow-500"
                      : "hover:text-yellow-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;