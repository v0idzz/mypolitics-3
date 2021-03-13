import React from "react";
import Link from "next/link";
import useWindowScroll from "@utils/hooks/useWindowScroll";
import Button from "@shared/Button";
import LanguageSelect from "@shared/LanguageSelect";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLogo } from "@utils/hooks/useLogo";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";
import { HeaderNavElement, useHeaderNav } from "@shared/Header/HeaderUtils";
import UserInfo from "@shared/UserInfo";
import { useRouter } from "next/router";
import ClientWrapper from "@shared/ClientWrapper";
import {
  Container,
  DesktopNavigation,
  Inner,
  Logo,
  ActionsWrapper,
  MobileNavigation,
  MobileNavigationButton,
  MobileNavigationWrapper,
  MobileNavigationInner,
  LinkContentWrapper,
  NavDivider,
} from "./HeaderStyle";

library.add(faBars, faTimes);

interface Props {
  forceHighlight?: boolean;
}

const Header: React.FC<Props> = ({ forceHighlight = false }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const router = useRouter();
  const logo = useLogo();
  const nav = useHeaderNav();
  const { value: firstTimer } = useFirstTimer();
  const { scrollY } = useWindowScroll(false);
  const scrolled = scrollY > 60;
  const highlighted = scrolled || showMenu || forceHighlight;

  const toggleMenu = () => setShowMenu(!showMenu);

  const toLink = ({
    text,
    icon,
    highlighted: elHighlighted,
    path,
  }: HeaderNavElement) => {
    const current = router.pathname.startsWith(path);

    const content = (
      <LinkContentWrapper current={current}>
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{text}</span>
      </LinkContentWrapper>
    );

    return (
      <React.Fragment key={text}>
        <Link href={path} passHref={elHighlighted}>
          {elHighlighted ? <Button as="a">{content}</Button> : <a>{content}</a>}
        </Link>
        <NavDivider />
      </React.Fragment>
    );
  };
  const navLinks = nav.map(toLink);

  return (
    <Container highlighted={highlighted} noTransparent={showMenu}>
      <Inner>
        <Link href={logo.homepage}>
          <a>
            <Logo src={logo.url} alt={logo.name} />
          </a>
        </Link>
        <ActionsWrapper>
          <DesktopNavigation>
            {navLinks}
            {!firstTimer && <UserInfo />}
          </DesktopNavigation>
          {firstTimer && <LanguageSelect />}
          <MobileNavigationWrapper>
            <MobileNavigationButton onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </MobileNavigationButton>
            <MobileNavigation show={showMenu} buttonPadding={firstTimer}>
              <MobileNavigationInner onClick={toggleMenu}>
                {navLinks}
                <UserInfo />
              </MobileNavigationInner>
            </MobileNavigation>
          </MobileNavigationWrapper>
        </ActionsWrapper>
      </Inner>
    </Container>
  );
};

export const HeaderWrapper: React.FC = () => (
  <ClientWrapper>
    <Header />
  </ClientWrapper>
);

export default HeaderWrapper;
