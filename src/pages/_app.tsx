import * as React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@services/apollo";
import { Toaster } from "react-hot-toast";
import Layout from "@layout";
import "modern-normalize/modern-normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
<<<<<<< HEAD
import { config } from "@fortawesome/fontawesome-svg-core";
=======
import { config } from '@fortawesome/fontawesome-svg-core';
>>>>>>> main
import { FacebookProvider } from "react-facebook";
import useTranslation from "next-translate/useTranslation";
import NextNprogress from "nextjs-progressbar";

config.autoAddCss = false;
<<<<<<< HEAD
=======

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
>>>>>>> main

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  const apolloClient = useApollo(pageProps.initialApolloState);
  const facebookLanguage = `${lang}_${lang.toUpperCase()}`;

  return (
    <FacebookProvider appId="4144384798967211" language={facebookLanguage}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster />
        <NextNprogress />
      </ApolloProvider>
    </FacebookProvider>
  );
};

export default App;
