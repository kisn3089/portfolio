import "@/styles/fonts.css";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/organism/header/Header";
import { useMain } from "@/hooks/useMain";
import TransitionPage from "./TransitionPage";

const RootLayout = ({ children }: PropsWithChildren) => {
  const { isActive, toggleActive } = useMain();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Header isActive={isActive} toggleActive={toggleActive} />
          <TransitionPage>{children}</TransitionPage>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
