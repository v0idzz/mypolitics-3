import React from "react";
import { Patreons } from "@generated/graphql";
import dayjs from "dayjs";
import Button from "@shared/Button";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Header,
  Logo,
  Inner,
  Date,
  HeaderText,
  ListWrapper,
  ButtonWrapper,
  Title,
} from "./PatreonStyle";

library.add(faSeedling);

interface Props {
  patreons: Pick<Patreons, "updatedAt" | "list">;
}

const Patreon: React.FC<Props> = ({ patreons }) => {
  const { updatedAt, list } = patreons;

  const { lang } = useTranslation();

  return (
    <Container>
      <Header>
        <Logo
          src={
            lang === "pl"
              ? require("@assets/images/patronite-full.png")
              : require("@assets/images/patreon-full.png")
          }
          alt={lang === "pl" ? "Patronite" : "Patreon"}
        />
        {/* TODO: Translate and change Patronite -> Patreon */}
        <HeaderText>
          Nie mamy powiązania z żadną opcją wpływu i nikt nas nie finansuje.
          Możesz wesprzeć nasze działania poprzez Patronite
        </HeaderText>
      </Header>
      <Inner>
        <Title>Patroni myPolitics</Title>
        <ListWrapper dangerouslySetInnerHTML={{ __html: list }} />
        <Date>Stan na dzień&nbsp;{dayjs(updatedAt).format("DD.MM.YYYY")}</Date>
      </Inner>
      <ButtonWrapper>
        <Link
          href={
            lang === "pl"
              ? "https://patronite.pl/mypolitics"
              : "https://patreon.com/mypolitics"
          }
          passHref
        >
          <Button
            as="a"
            beforeIcon={<FontAwesomeIcon icon={faSeedling} />}
            pulsating
          >
            Zostań Patronem!
          </Button>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Patreon;
