import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
// import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";
import ImagePage from "./pages/ImagePage";
import ThreePage from "./pages/ThreePage";
import VideoPage from "./pages/VideoPage";
import StockPage from "./pages/StockPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="me" element={<AboutMePage />} /> */}
          <Route path="project" element={<ProjectPage />} />
          <Route path="project/image" element={<ImagePage />} />
          <Route path="project/three" element={<ThreePage />} />
          <Route path="project/video" element={<VideoPage />} />
          <Route path="project/stock/:query" element={<StockPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default App;
