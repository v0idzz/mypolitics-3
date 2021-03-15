import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as R from "ramda";
import Link from "next/link";
import { paths } from "@constants";
import useTranslation from "next-translate/useTranslation";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LanguageSelect from "@shared/LanguageSelect";
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
  TeamContainer,
} from "./FooterStyle";
import { socialLinks, SocialLink as SocialLinkType } from "./FooterUtils";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();
  const toSocialLink = ({ url, icon, customColor }: SocialLinkType) => (
    <SocialLink key={url} href={url} color={customColor} target="_blank">
      {typeof icon === "object" && "iconName" in icon ? (
        <FontAwesomeIcon icon={icon} />
      ) : (
        <img src={icon} alt={url} />
      )}
    </SocialLink>
  );

  const socialLinksElements = R.map(toSocialLink, socialLinks);

  return (
    <>
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
              <Link href={paths.rules}>{t("footer.rules")}</Link>
              <Link href={paths.privacy}>{t("footer.privacy")}</Link>
              <Link href={paths.gdpr}>{t("footer.gdpr")}</Link>
              <div>
                <LanguageSelect />
              </div>
            </WebsiteLinksWrapper>
          </Links>
        </Inner>
      </Container>
      <TeamContainer>
        <div>
          Made with&nbsp;
          <FontAwesomeIcon icon={faHeart} />
          &nbsp;by&nbsp;<Link href={paths.team}>myPolitics Team</Link>
        </div>
      </TeamContainer>
    </>
  );
};

export default Footer;
