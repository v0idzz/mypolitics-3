import React from "react";
import * as R from "ramda";
import { ComponentPersonPartner, usePartnersQuery } from "@generated/graphql";
import { Lead, Title } from "@shared/Typography";
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

const HomePartnersSection: React.FC = () => {
  const { data } = usePartnersQuery();
  const toPartnerLink = (partner: ComponentPersonPartner) => (
    <PartnerLink
      key={partner.id}
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

  const partnersLinks = R.map(toPartnerLink, data?.partner.partners || []);

  return (
    <Container>
      <Image src={backgroundImage.src} srcSet={backgroundImage.srcSet} />
      <Overlay as="div" />
      <Inner>
        <Header>
          <Title>Współpraca?</Title>
          <Lead>Jesteśmy na nią otwarci!</Lead>
        </Header>
        <Content>
          <ContentTitle>Nasi partnerzy</ContentTitle>
          <ContentList>{partnersLinks}</ContentList>
        </Content>
      </Inner>
    </Container>
  );
};

export default HomePartnersSection;
