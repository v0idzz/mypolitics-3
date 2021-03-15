import React from "react";
import { NextSeo } from "next-seo";
import { ModPage as Panel } from "@components/Editor";

const ModPage: React.FC = () => (
  <>
    <NextSeo title="Panel moderacji" titleTemplate="%s | myPolitics" />
    <Panel />
  </>
);

export default ModPage;
