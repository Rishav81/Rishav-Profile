import { useParams } from "react-router-dom";
import { projects } from "../Data/Projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_35%),linear-gradient(to_bottom,#000000,#020617)]  text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* IMAGE (FULL WIDTH) */}
        <div className="w-full">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-[500px] object-cover rounded-2xl hover:scale-105 duration-500 transition-all"
          />
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-4xl md:text-5xl font-bold text-[#6CB394]">
          {project.title}
        </h1>

        {/* TECH STACK */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full bg-[#6CB394]/10 border border-[#6CB394]/20 text-[#6CB394]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-300 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* GITHUB LINK */}
        {project.github && (
          <div className="mt-10">
            <a
              href={project.github}
              target="_blank"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
