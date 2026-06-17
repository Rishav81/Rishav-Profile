import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        border-t
        border-white/10
        bg-black
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="cursive-font text-2xl font-bold text-[#6CB394]">
              Rishav Kumar
            </h3>

            <p className="mt-1 text-sm text-gray-400">MERN Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
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

        {/* Bottom */}
        <div
          className="
            mt-6
            pt-6
            border-t
            border-white/10
            text-center
            text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Rishav Kumar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
