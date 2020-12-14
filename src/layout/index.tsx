import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import GlobalStyle from "./globalStyles";
import Head from "./Head";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
