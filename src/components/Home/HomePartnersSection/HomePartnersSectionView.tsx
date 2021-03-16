import React from "react";
import * as R from "ramda";
import { ComponentPersonPartner } from "@generated/graphql";
import { Lead, Title } from "@shared/Typography";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Image,
  Overlay,
  Inner,
  Header,
  PartnerImage,
  PartnerLink,
  Content,
  ContentTitle,
  ContentList,
} from "./HomePartnersSectionStyle";

const backgroundImage = require("@assets/images/home-hero.png?resize&sizes[]=600&sizes[]=1200&sizes[]=1440");

interface Props {
  partners: ComponentPersonPartner[];
}

const HomePartnersSection: React.FC<Props> = ({ partners }) => {
  const { t } = useTranslation("home");
  const toPartnerLink = (partner: ComponentPersonPartner) => (
    <PartnerLink
      key={partner.url}
      href={partner.url}
      target="_blank"
      rel="noreferrer"
    >
      <PartnerImage
        src={partner.image.formats.thumbnail.url}
        alt={partner.name}
      />
    </PartnerLink>
  );

  const partnersLinks = R.map(toPartnerLink, partners);

  return (
    <Container>
      <Image src={backgroundImage.src} srcSet={backgroundImage.srcSet} />
      <Overlay as="div" />
      <Inner>
        <Header>
          <Title>{t("partners.title")}</Title>
          <Lead>{t("partners.lead")}</Lead>
        </Header>
        <Content>
          <ContentTitle>{t("partners.content.title")}</ContentTitle>
          <ContentList>{partnersLinks}</ContentList>
        </Content>
      </Inner>
    </Container>
  );
};

export default HomePartnersSection;
