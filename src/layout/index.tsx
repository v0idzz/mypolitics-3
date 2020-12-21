import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import Footer from "@shared/Footer";
import Header from "@shared/Header";
import GlobalStyle from "./globalStyles";
import Head from "./Head";
import { ContentWrapper } from "./style";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
