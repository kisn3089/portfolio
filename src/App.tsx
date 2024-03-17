import * as Page from "./pages";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TransPages from "./components/transPages/TransPages";

function App() {
  return (
    <BrowserRouter>
      <Page.MainPage />
      <TransPages />
    </BrowserRouter>
  );
}

export default App;
