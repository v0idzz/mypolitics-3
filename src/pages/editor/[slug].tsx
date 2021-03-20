import React from "react";
import CenteredPage from "@shared/CenteredPage";
import { Page } from "@components/Editor";
import Head from "next/head";
import ImageAwareDndProvider from "@shared/ImageAwareDndProvider";
import { HTML5Backend } from "react-dnd-html5-backend";
import GoogleAd from "@shared/GoogleAd";

const Editor: React.FC = () => (
  <CenteredPage>
    <Head>
      <link
        href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"
        rel="stylesheet"
      />
    </Head>
    <GoogleAd id="myp3-standard-top" />
    <ImageAwareDndProvider backend={HTML5Backend}>
      <Page />
    </ImageAwareDndProvider>
    <GoogleAd id="myp3-standard-bottom" />
  </CenteredPage>
);

export default Editor;
