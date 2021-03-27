import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { Title } from "@shared/Typography";
import Button from "@shared/Button";
import { titleTemplate } from "@constants";
import useTranslation from "next-translate/useTranslation";

const NotFound: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo
        title={t("404.SEO.title")}
        titleTemplate={titleTemplate}
        noindex
      />
      <Title>{t("404.title")}</Title>
      <Image
        src="/static/404.jpg"
        width={300}
        height={350}
        alt="Obrazek 'PKW Error 404' autorstwa Goorsky.pl"
      />
      <Link href="/">
        <Button>{t("404.returnButton")}</Button>
      </Link>
    </CenteredPage>
  );
};

export default NotFound;
