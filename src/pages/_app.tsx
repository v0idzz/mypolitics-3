import * as React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@services/apollo";
import { ToastProvider } from "react-toast-notifications";
import Layout from "@layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "normalize.min.css";
import { FacebookProvider } from "react-facebook";
import useTranslation from "next-translate/useTranslation";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  const apolloClient = useApollo(pageProps.initialApolloState);
  const facebookLanguage = `${lang}_${lang.toUpperCase()}`;

  return (
    <FacebookProvider appId="4144384798967211" language={facebookLanguage}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Layout>
      </ApolloProvider>
    </FacebookProvider>
  );
};

export default App;
