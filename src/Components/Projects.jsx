import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "SmartSight",
    description:
      "AI-powered assistive wearable device designed for visually impaired individuals. Features obstacle detection, water detection, GPS tracking, voice alerts, and future AI integration.",
    tech: ["React", "ESP32", "IoT", "GPS"],
    image: "/smartSight.png",
  },

  {
    id: 2,
    title: "Stay Finder",
    description:
      "Full-stack MERN property booking platform with authentication, CRUD operations, REST APIs, and optimized MongoDB performance.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Rishav81/airbnb.git",
    image: "/StayFinder.jpg",
  },

  {
    id: 3,
    title: "Currency Converter",
    description:
      "Developed a modern currency converter with real-time exchange rate API integration, supporting multiple international currencies. Built an intuitive user interface with React and Tailwind CSS for seamless and accurate currency conversion.",
    tech: ["React", "API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Rishav81/Currency-Converter.git",
    image: "/currency.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
       py-12 md:py-24 
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_35%),linear-gradient(to_bottom,#000000,#020617)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-white tracking-widest uppercase">My Work</span>

          <h2 className="cursive-font mt-4 text-4xl md:text-5xl font-bold text-[#6CB394]">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            A collection of projects showcasing my expertise in MERN Stack
            Development, IoT systems, APIs, and problem-solving through
            technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                relative
                h-[300px] md:h-[350px]
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                cursor-pointer
                hover:border-[#6CB394]/30
                hover:shadow-[0_0_30px_rgba(108,179,148,0.15)]
                transition-all
                duration-500
              "
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/70
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  inset-0
                  p-6
                  flex
                  flex-col
                  justify-end
                "
              >
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                    cursive-font
                    transition-all
                    duration-300
                    group-hover:text-[#6CB394]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    text-gray-300
                    opacity-0
                    max-h-0
                    overflow-hidden
                    group-hover:opacity-100
                    group-hover:max-h-40
                    transition-all
                    duration-500
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-4
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-[#6CB394]/10
                        border border-[#6CB394]/20
                        text-[#6CB394]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Link
          to="/projects-details"
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-2
            text-white
            font-medium
            hover:text-[#6CB394]
            transition-colors
            duration-300
          "
        >
          View All Projects
          <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
