import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RootLayout from "./styles/RootLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
