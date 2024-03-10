import * as Page from "./pages";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Trans from "./components/Test/Trans";

function App() {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <Page.MainPage />
      <Trans />
    </BrowserRouter>
  );
}

export default App;
