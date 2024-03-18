import * as Page from "../../pages/index";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const TransPages = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<Page.MainPage />} />
          <Route path="me" element={<Page.AboutMePage />} />
          <Route path="project" element={<Page.ProjectPage />} />
          <Route path="project/video" element={<Page.VideoPage />} />
          <Route path="project/api" element={<Page.ApiPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransPages;
