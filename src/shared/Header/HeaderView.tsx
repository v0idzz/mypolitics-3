import React from "react";
import Link from "next/link";
import useWindowScroll from "@utils/hooks/useWindowScroll";
import Button from "@shared/Button";
import LanguageSelect from "@shared/LanguageSelect";
import {
  Container,
  DesktopNavigation,
  Inner,
  Logo,
  ActionsWrapper,
} from "./HeaderStyle";

const Header: React.FC = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const { scrollY } = useWindowScroll(false);
  const scrolled = scrollY > 60;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Container highlighted={scrolled}>
      <Inner>
        <Link href="/">
          <Logo
            src={require("@assets/images/logos/group.png")}
            alt="myPolitics Group"
          />
        </Link>
        <ActionsWrapper>
          <DesktopNavigation>
            <Link href="/media">Artykuły</Link>
            <Link href="/talks">Debaty</Link>
            {scrolled && (
              <Link href="/quiz">
                <Button as="a">Test poglądów politycznych</Button>
              </Link>
            )}
          </DesktopNavigation>
          <LanguageSelect />
        </ActionsWrapper>
      </Inner>
    </Container>
  );
};

export default Header;
