import React, { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible = active
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-0 md:top-5 left-0 w-full z-50 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg px-4 py-4">
          {/* Desktop */}
          <ul className="hidden md:flex items-center justify-evenly">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative text-md font-medium transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "text-[#A6F4C5]"
                        : "text-gray-300 hover:text-[#A6F4C5]"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <div className="md:hidden flex justify-center">
            <ul className="flex items-center justify-between w-full max-w-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm transition-colors duration-300
                      ${
                        activeSection === item.id
                          ? "text-[#A6F4C5]"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
