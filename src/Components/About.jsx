const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
];

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "MERN",
    label: "Stack Developer",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
       py-12 md:py-24 
        bg-[radial-gradient(circle_at_left,rgba(108,179,148,0.12),transparent_35%),linear-gradient(to_bottom,#000000,#0B1120)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className=" hidden md:flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#6CB394]/20 blur-[90px] rounded-full pointer-events-none" />

              <img
                src="/Profile.png"
                alt="Rishav Kumar"
                className="
                  relative
                  w-[280px]
                  md:w-[380px]
                  lg:w-[480px]
                  object-contain
                  hover:scale-105
                  transition-transform
                  duration-500
                "
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-left">
            <span className="block text-white font-medium tracking-widest uppercase">
              About Me
            </span>

            <h2 className="cursive-font mt-3 text-4xl md:text-5xl font-bold text-[#6CB394] leading-tight">
              Passionate MERN Stack Developer
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              I'm Rishav Kumar, a MERN Stack Developer focused on building
              scalable, responsive, and user-friendly web applications using
              modern technologies.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Currently expanding my expertise in Next.js, backend architecture,
              system design, and building real-world solutions that solve
              practical problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    p-5
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    hover:bg-white/10
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="text-2xl font-bold text-[#6CB394]">
                    {stat.value}
                  </h3>

                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#6CB394]/10
                    border border-[#6CB394]/20
                    text-[#6CB394]
                    hover:bg-[#6CB394]/20
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/Rishav_Resume.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                px-6
                py-3
                rounded-xl
                bg-[#6CB394]
                text-black
                font-semibold
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(108,179,148,0.5)]
                transition-all
                duration-300
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
