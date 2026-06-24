const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(108,179,148,0.35),transparent_45%),linear-gradient(to_bottom,#05070A,#000000)] text-white"
    >
      {/* Decorative Blobs */}
      <div className="hidden md:block absolute top-40 left-20 w-40 h-40 bg-[#A6F4C5]/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-40 right-20 w-40 h-40 bg-[#A6F4C5]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-24 flex flex-col min-h-screen">
        {/* Hero Text */}
        <div className=" mb-10 md:mb-12">
          <h4 className=" text-center lg:text-left text-lg sm:text-xl md:text-2xl font-bold mb-4 tracking-tight">
            Hey 👋, I'm a{" "}
            <span className="text-[#A6F4C5]">MERN Stack Developer</span>
          </h4>

          <h1 className=" text-center font-extrabold leading-[0.9] text-[#A6F4C5] tracking-tight cursive-font text-[clamp(2rem,10vw,10rem)]">
            RISHAV KUMAR
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex-1 grid lg:grid-cols-[220px_1fr_320px] items-end gap-8 lg:gap-10 pb-10 sm:pb-16 md:pb-10">
          {/* Left */}
          <div className="hidden lg:flex lg:flex-col lg:h-[400px] justify-between">
            <h3 className="font-bold tracking-wider">©2026</h3>

            <div className="space-y-1 text-sm text-gray-300">
              <p>810-222-7630</p>
              <p>rishavkumar4383@gmail.com</p>
            </div>
          </div>

          {/* Center */}
          <div className="h-full flex justify-center items-end">
            <img
              src="/pro1.png"
              alt="profile"
              loading="lazy"
              className="
w-full
max-w-[260px]
sm:max-w-[320px]
md:max-w-[550px]
object-cover
"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 self-center lg:self-end text-center lg:text-left">
            <p className="text-sm md:text-lg text-gray-300 leading-7 max-w-md mx-auto lg:mx-0">
              I build responsive and user-friendly web applications using React,
              JavaScript, and modern frontend technologies. Passionate about
              creating clean UI and great user experiences.
            </p>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/rishav-kumar-2027b6263/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 hover:text-[#A6F4C5] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A6F4C5] after:transition-all after:duration-300 hover:after:w-full"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Rishav81"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 hover:text-[#A6F4C5] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A6F4C5] after:transition-all after:duration-300 hover:after:w-full"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
