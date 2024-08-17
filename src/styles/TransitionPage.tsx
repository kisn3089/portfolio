import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TransitionPage = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionPage;
