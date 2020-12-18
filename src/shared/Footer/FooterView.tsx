import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as R from "ramda";
import Link from "next/link";
import {
  Copyright,
  CopyrightGroup,
  GroupLogo,
  MainLogo,
  Container,
  Inner,
  Title,
  Links,
  SocialLink,
  SocialLinksWrapper,
  WebsiteLinksWrapper,
  MainCopyright,
} from "./FooterStyle";
import {
  logos,
  socialLinks,
  SocialLink as SocialLinkType,
} from "./FooterUtils";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const toSocialLink = ({ url, icon }: SocialLinkType) => (
    <SocialLink key={url} href={url} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </SocialLink>
  );

  const socialLinksElements = R.map(toSocialLink, socialLinks);

  return (
    <Container>
      <Inner>
        <Copyright>
          <MainCopyright>
            <MainLogo src={logos.main} alt="myPolitics Group" />
            <Title>&copy;&nbsp;{year}</Title>
          </MainCopyright>
          <CopyrightGroup>
            <GroupLogo src={logos.media} alt="myPolitics Media" />
            <GroupLogo src={logos.talk} alt="myPolitics Talk" />
            <GroupLogo src={logos.quiz} alt="myPolitics Quiz" />
          </CopyrightGroup>
        </Copyright>
        <Links>
          <SocialLinksWrapper>{socialLinksElements}</SocialLinksWrapper>
          <WebsiteLinksWrapper>
            <Link href="/rules">Regulamin serwisu</Link>
            <Link href="/privacy">Polityka prywatności</Link>
          </WebsiteLinksWrapper>
        </Links>
      </Inner>
    </Container>
  );
};

export default Footer;
