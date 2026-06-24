import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "SmartSight",
    slug: "Smart-Sight",
    description: "Smart wearable device for visually impaired users.",
    tech: ["React", "ESP32", "IoT", "GPS"],
    image: "/smartSight.png",
  },
  {
    id: 2,
    title: "Stay Finder",
    slug: "Stay-Finder",
    description: "Accommodation booking platform with modern UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/StayFinder.jpg",
  },
  {
    id: 3,
    title: "Currency Converter",
    slug: "Currency-Converter",
    description: "Real-time currency conversion using external APIs.",
    tech: ["React", "API", "Tailwind CSS", "JavaScript"],
    image: "/currency.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        scroll-mt-24
        py-16 md:py-20 lg:py-24
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_35%),linear-gradient(to_bottom,#000000,#020617)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white tracking-widest uppercase">My Work</span>

          <h2 className="cursive-font mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6CB394]">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            A collection of projects showcasing my expertise in MERN Stack
            Development, IoT systems, APIs, and problem-solving through
            technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group"
            >
              <div
                className="
                  relative
                  h-[280px]
                  sm:h-[320px]
                  lg:h-[350px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
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
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
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
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-white
                      cursive-font
                      transition-colors
                      duration-300
                      group-hover:text-[#6CB394]
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-4
                      opacity-100
                      md:opacity-0
                      md:group-hover:opacity-100
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
                          border
                          border-[#6CB394]/20
                          text-[#6CB394]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/all-projects"
            className="
              flex
              items-center
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
      </div>
    </section>
  );
};

export default Projects;
