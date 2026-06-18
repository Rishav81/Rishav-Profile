import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProfileDetails from "./Pages/ProfileDetails";
import ProjectDetails from "./Pages/ProjectDetails";
import AllProjects from "./Pages/AllProjects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
