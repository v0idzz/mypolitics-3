import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { Title } from "@shared/Typography";
import Button from "@shared/Button";

const NotFound: NextPage = () => (
  <CenteredPage fullWidth={false}>
    <NextSeo title="Błąd 404" titleTemplate="%s – myPolitics" />
    <Title>Strona nie została znaleziona</Title>
    <Image
      src="/static/404.jpg"
      width={300}
      height={350}
      alt="Obrazek 'PKW Error 404' autorstwa Goorsky.pl"
    />
    <Link href="/">
      <Button>Powróć na stronę główną</Button>
    </Link>
  </CenteredPage>
);

export default NotFound;
