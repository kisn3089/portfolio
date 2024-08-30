import "@/styles/fonts.css";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/organism/header/Header";

const RootLayout = ({ children }: PropsWithChildren) => {
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
          <Header />
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
