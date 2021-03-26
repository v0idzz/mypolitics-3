import React from "react";
import { NextSeo } from "next-seo";
import { ModPage as Panel } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import { titleTemplate } from '@constants';

const ModPage: React.FC = () => {
  const { t } = useTranslation("editor");

  return (
    <>
      <NextSeo title={t("admin.title")} titleTemplate={titleTemplate} />
      <Panel />
    </>
  );
};

export default ModPage;
