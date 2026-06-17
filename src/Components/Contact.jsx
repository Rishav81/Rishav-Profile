const Contact = () => {
  return (
    <section
      id="contact"
      className="
        py-16 md:py-24
        bg-[radial-gradient(circle_at_left,rgba(108,179,148,0.15),transparent_35%),linear-gradient(to_bottom,#020617,#000000)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-white tracking-widest uppercase">
            Get In Touch
          </span>

          <h2 className="cursive-font mt-4 text-4xl md:text-5xl font-bold text-[#6CB394]">
            Let's Connect
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            Have a project idea, internship opportunity, or just want to
            connect? Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div
            className="
              p-4 md:p-8
              rounded-3xl
              border border-white/10
             
              backdrop-blur-sm
              hover:border-[#6CB394]/20
              transition-all
              duration-300
            "
          >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-black/30
                    border border-white/10
                    text-white
                    outline-none
                    focus:border-[#6CB394]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-black/30
                    border border-white/10
                    text-white
                    outline-none
                    focus:border-[#6CB394]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-black/30
                    border border-white/10
                    text-white
                    outline-none
                    focus:border-[#6CB394]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2">Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-black/30
                    border border-white/10
                    text-white
                    outline-none
                    resize-none
                    focus:border-[#6CB394]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-[#6CB394]
                  text-black
                  font-semibold
                  hover:scale-[1.02]
                  hover:shadow-[0_0_30px_rgba(108,179,148,0.5)]
                  transition-all
                  duration-300
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="relative hidden md:flex justify-center">
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-[#6CB394]/20 blur-[100px] rounded-full" />

            <img
              src="/contact.png"
              alt="Contact Illustration"
              className="
                relative
                w-full
                max-w-lg
                object-contain
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
