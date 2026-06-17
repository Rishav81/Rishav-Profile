const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Libraries",
    skills: ["GSAP", "Framer Motion", "Bootstrap"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
  },
  {
    title: "Currently Learning",
    skills: ["Next.js", "System Design"],
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="
      py-12 md:py-24 
        bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_left,rgba(108,179,148,0.12),transparent_35%),linear-gradient(to_bottom,#0B1120,#000000)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-white font-medium tracking-widest uppercase">
            My Expertise
          </span>

          <h2 className="cursive-font mt-4 text-4xl md:text-5xl font-bold text-[#6CB394]">
            Skills & Technologies
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Technologies and tools I use to build scalable, responsive, and
            modern web applications with a strong focus on performance,
            maintainability, and user experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group
                h-full
                p-6
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                hover:bg-white/10
                hover:border-[#6CB394]/30
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(108,179,148,0.12)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-[#6CB394] mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-2
                      rounded-full
                      text-sm
                      bg-[#6CB394]/10
                      border border-[#6CB394]/20
                      text-[#6CB394]
                      hover:bg-[#6CB394]/20
                      hover:text-white
                      hover:scale-105
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Glow */}
        <div className="relative ">
          <div className="absolute left-1/2 -translate-x-1/2 w-80 h-20 bg-[#6CB394]/20 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
