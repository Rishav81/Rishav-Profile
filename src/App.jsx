import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProfileDetails from "./Pages/ProfileDetails";
import ProjectDetails from "./Pages/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="/projects-details" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
