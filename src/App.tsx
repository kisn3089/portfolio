import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";
import ImagePage from "./pages/ImagePage";
import ThreePage from "./pages/ThreePage";
import VideoPage from "./pages/VideoPage";
import StockPage from "./pages/StockPage";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<MainPage />} />
      <Route path="me" element={<AboutMePage />} />
      <Route path="project" element={<ProjectPage />} />
      <Route path="project/image" element={<ImagePage />} />
      <Route path="project/three" element={<ThreePage />} />
      <Route path="project/video" element={<VideoPage />} />
      <Route path="project/stock" element={<StockPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;
