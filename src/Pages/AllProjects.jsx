import { Link } from "react-router-dom";
import { projects } from "../Data/Projects";

const AllProjects = () => {
  return (
    <section
      className="
        min-h-screen
        pt-10
        pb-16
        px-4
        sm:px-6
        text-white
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_35%),linear-gradient(to_bottom,#000000,#020617)]
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="
            inline-flex
            items-center
            mb-10
            text-gray-400
            hover:text-[#6CB394]
            transition-colors
            duration-300
          "
        >
          ← Back to Portfolio
        </Link>

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white tracking-[0.2em] uppercase text-sm">
            My Complete Projects
          </span>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="block"
            >
              <div
                className="
                  group
                  relative
                  h-[280px]
                  sm:h-[320px]
                  md:h-[350px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  cursor-pointer
                  hover:-translate-y-2
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
                    p-5
                    md:p-6
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
                      transition-all
                      duration-300
                      group-hover:text-[#6CB394]
                    "
                  >
                    {project.title}
                  </h3>

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
                          backdrop-blur-sm
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
      </div>
    </section>
  );
};

export default AllProjects;
