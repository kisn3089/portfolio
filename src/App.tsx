import { BrowserRouter } from "react-router-dom";
import TransPages from "./pages/TransPages";
import Header from "./components/organism/header/Header";
import { useMain } from "./hooks/useMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/fonts.css";

function App() {
  const { isActive, toggleActive } = useMain();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <BrowserRouter>
      <div onClick={(e) => isActive && toggleActive(e)}>
        <Header isActive={isActive} toggleActive={toggleActive} />
        <QueryClientProvider client={queryClient}>
          <TransPages />
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
