import React from "react";
import * as R from "ramda";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import Footer from "@shared/Footer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import GlobalStyle from "./globalStyles";
import Head from "./Head";
import { ContentWrapper } from "./style";
import { pathsWithHero } from "./utils";

const Header = dynamic(() => import("@shared/Header"), { ssr: false });

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathWithoutHero = R.not(R.includes(router.pathname, pathsWithHero));

  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header forceHighlight={pathWithoutHero} />
        <ContentWrapper headerMargin={pathWithoutHero}>
          {children}
        </ContentWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
