import * as Page from "./pages";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TransPages from "./components/transPages/TransPages";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TransPages />
    </BrowserRouter>
  );
}

export default App;
