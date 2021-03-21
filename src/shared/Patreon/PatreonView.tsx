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
  const { t } = useTranslation("common");
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
          alt={t("patreon.title")}
        />
        <HeaderText>{t("patreon.description")}</HeaderText>
      </Header>
      <Inner>
        <Title>{t("patreon.list.title")}</Title>
        <ListWrapper dangerouslySetInnerHTML={{ __html: list }} />
        <Date>
          {t("patreon.list.updatedAt")}&nbsp;{dayjs(updatedAt).format("YYYY-MM-DD")}
        </Date>
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
            {t("patreon.button")}
          </Button>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Patreon;
