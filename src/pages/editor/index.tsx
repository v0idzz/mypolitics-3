import React from "react";
import { NextSeo } from "next-seo";
import { PanelPage as Panel } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import { titleTemplate } from '@constants';

const EditorPage: React.FC = () => {
  const { t } = useTranslation("editor");

  return (
    <>
      <NextSeo title={t("panel.title")} titleTemplate={titleTemplate} />
      <Panel />
    </>
  );
};

export default EditorPage;
