import React from "react";
import * as Page from "../../pages/index";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Trans = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Routes location={location}>
          {/* <Route path="/" element={<Page.MainPage />} /> */}
          <Route path="test1" element={<Page.Test1 />} />
          <Route path="test2" element={<Page.Test2 />} />
          <Route path="video" element={<Page.VideoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Trans;
