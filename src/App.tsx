import { BrowserRouter } from "react-router-dom";
import TransPages from "./components/transPages/TransPages";
import Header from "./components/header/Header";
import { useMain } from "./hooks/useMain";

function App() {
  const { isActive, toggleActive } = useMain();
  return (
    <BrowserRouter>
      <div onClick={(e) => isActive && toggleActive(e)}>
        <Header isActive={isActive} toggleActive={toggleActive} />
        <TransPages />
      </div>
    </BrowserRouter>
  );
}

export default App;
