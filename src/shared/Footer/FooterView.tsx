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
import { socialLinks, SocialLink as SocialLinkType } from "./FooterUtils";

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
            <MainLogo
              src={require("@assets/images/logos/group.png")}
              alt="myPolitics Group"
            />
            <Title>&copy;&nbsp;{year}</Title>
          </MainCopyright>
          <CopyrightGroup>
            <GroupLogo
              src={require("@assets/images/logos/media.png")}
              alt="myPolitics Media"
            />
            <GroupLogo
              src={require("@assets/images/logos/talk.png")}
              alt="myPolitics Talk"
            />
            <GroupLogo
              src={require("@assets/images/logos/quiz.png")}
              alt="myPolitics Quiz"
            />
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
