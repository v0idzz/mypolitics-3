import React from "react";
import { NextSeo } from "next-seo";
import { PanelPage as Panel } from "@components/Editor";

const EditorPage: React.FC = () => (
  <>
    <NextSeo title="Panel twórcy" titleTemplate="%s | myPolitics" />
    <Panel />
  </>
);

export default EditorPage;
