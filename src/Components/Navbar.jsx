import React, { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("/");

  return (
    <nav className="fixed bottom-0 md:top-5 left-0 w-full z-50 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className="
            bg-black/20
            backdrop-blur-xl
           
            rounded-2xl
            shadow-lg
            px-4
            py-4
          "
        >
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-evenly">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    relative
                    text-md
                    font-medium
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? "text-[#A6F4C5]"
                        : "text-gray-300 hover:text-[#A6F4C5]"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-[#A6F4C5]
                    after:transition-all
                    after:duration-300

                    ${
                      activeSection === item.id
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center">
            <ul className="flex items-center justify-between w-full max-w-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`
                      text-sm
                      transition-colors
                      duration-300
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
