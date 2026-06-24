import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/Projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

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
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/all-projects"
          className="
            inline-flex
            items-center
            mb-8
            text-gray-400
            hover:text-[#6CB394]
            transition-colors
            duration-300
          "
        >
          ← Back to Projects
        </Link>

        {/* Project Image */}
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              w-full
              h-[250px]
              sm:h-[350px]
              md:h-[450px]
              lg:h-[550px]
              object-cover
              hover:scale-105
              transition-transform
              duration-700
            "
          />
        </div>

        {/* Content Card */}
        <div
          className="
            mt-8
            p-6
            md:p-8
          
          "
        >
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#6CB394]">
            {project.title}
          </h1>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
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

          {/* Description */}
          <p className="mt-8 text-gray-300 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-[#6CB394]
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                View GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-[#6CB394]
                  text-[#6CB394]
                  hover:bg-[#6CB394]
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
