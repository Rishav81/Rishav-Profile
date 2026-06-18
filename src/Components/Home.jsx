const Home = () => {
  return (
    <section
      className="min-h-screen bg-[radial-gradient(circle_at_center,rgba(108,179,148,0.35),transparent_45%),linear-gradient(to_bottom,#05070A,#000000)] text-white "
      id="home"
    >
      <div className="absolute top-40 left-20 w-40 h-40 bg-[#A6F4C5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#A6F4C5]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-24 flex flex-col min-h-screen">
        {/* Hero Text */}
        <div className="mb-12">
          <h4 className="   text-xl md:text-2xl font-bold mb-4 tracking-tighter">
            Hey 👋, I'm a{" "}
            <span className="text-[#A6F4C5]">MERN Stack Developer</span>
          </h4>

          <h1 className="text-[10vw] font-extrabold leading-[0.9] text-[#A6F4C5] tracking-tight cursive-font  ">
            RISHAV KUMAR
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex-1 grid md:grid-cols-[220px_1fr_320px] items-end gap-6 md:gap-10 pb-4 md:pb-10">
          {/* Left */}
          <div className=" md:h-100 md:flex  md:flex-col justify-between">
            <h3 className="font-bold text-md tracking-wider">©2026</h3>

            <div className=" hidden md:block space-y-1 text-sm text-gray-300">
              <p>810-222-7630</p>
              <p>rishavkumar4383@gmail.com</p>
            </div>
          </div>

          {/* Center */}
          <div className="h-full flex  justify-center items-end">
            <img
              className="w-[350px] md:w-[550px]  object-cover"
              src="/pro1.png"
              alt="profile"
              loading="lazy"
            />
          </div>

          {/* Right */}

          <div className="flex flex-col gap-6 self-center md:self-end">
            <p className="text-gray-300 leading-7">
              I build responsive and user-friendly web applications using React,
              JavaScript, and modern frontend technologies. Passionate about
              creating clean UI and great user experiences.
            </p>

            <div className="flex gap-6 text-sm font-medium">
              <a
                href="https://www.linkedin.com/in/rishav-kumar-2027b6263/"
                className="
                  relative
                  text-gray-300
                  hover:text-[#A6F4C5]
                  transition-colors
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#A6F4C5]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Rishav81"
                className="
                  relative
                  text-gray-300
                  hover:text-[#A6F4C5]
                  transition-colors
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#A6F4C5]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  
                "
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
