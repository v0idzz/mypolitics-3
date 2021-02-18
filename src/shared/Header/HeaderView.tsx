import React from "react";
import Link from "next/link";
import useWindowScroll from "@utils/hooks/useWindowScroll";
import Button from "@shared/Button";
import LanguageSelect from "@shared/LanguageSelect";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { paths } from "@constants";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useLogo } from "@utils/hooks/useLogo";
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
} from "./HeaderStyle";

library.add(faBars, faTimes);

interface Props {
  forceHighlight?: boolean;
}

const Header: React.FC<Props> = ({ forceHighlight = false }) => {
  const { asPath } = useRouter();
  const { t } = useTranslation("common");
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(false);
  const logo = useLogo();
  const { scrollY } = useWindowScroll(false);
  const scrolled = scrollY > 60;
  const highlighted = scrolled || showMenu || forceHighlight;
  const pathNotInQuiz =
    !asPath.includes("quizzes") && !asPath.includes("surveys");

  const toggleMenu = () => setShowMenu(!showMenu);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
            <Link href={paths.articles}>{t("header.articles")}</Link>
            <Link href={paths.talks}>{t("header.talks")}</Link>
            {(scrolled || forceHighlight) && pathNotInQuiz && (
              <Link href={paths.quizzesPreInitialize} passHref>
                <Button as="a">{t("header.quiz")}</Button>
              </Link>
            )}
          </DesktopNavigation>
          <LanguageSelect />
          <MobileNavigationWrapper>
            <MobileNavigationButton onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </MobileNavigationButton>
            <MobileNavigation show={showMenu}>
              <MobileNavigationInner onClick={toggleMenu}>
                <Link href={paths.articles}>{t("header.articles")}</Link>
                <Link href={paths.talks}>{t("header.talks")}</Link>
                <Link href={paths.quiz("mypolitics")} passHref>
                  <Button as="a">{t("header.quiz")}</Button>
                </Link>
              </MobileNavigationInner>
            </MobileNavigation>
          </MobileNavigationWrapper>
        </ActionsWrapper>
      </Inner>
    </Container>
  );
};

export default Header;
