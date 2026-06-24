import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    url: "https://github.com/Rishav81",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={22} />,
    url: "https://www.linkedin.com/in/rishav-kumar-2027b6263/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
         pb-10 md:pb-0
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-[#6CB394]/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="cursive-font text-2xl md:text-3xl font-bold text-[#6CB394]">
              Rishav Kumar
            </h3>

            <p className="mt-2 text-sm text-gray-400">MERN Stack Developer</p>

            <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
              <FaEnvelope size={12} />
              <span>rishavkumar4383@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  text-gray-400
                  hover:text-[#6CB394]
                  hover:scale-110
                  hover:-translate-y-1
                  hover:drop-shadow-[0_0_12px_rgba(108,179,148,0.6)]
                  transition-all
                  duration-300
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-8
            pt-6
            border-t
            border-white/10
            text-center
            text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Rishav Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
