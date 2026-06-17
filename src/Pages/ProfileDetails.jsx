import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const ProfileDetails = () => {
  return (
    <main className="bg-[#0B1120] overflow-x-hidden">
      <Navbar />

      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
};

export default ProfileDetails;
