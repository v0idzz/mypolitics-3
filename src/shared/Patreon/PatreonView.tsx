import React, { useEffect, useState } from "react";
import { Patreons } from "@generated/graphql";
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
  Date as HeaderDate,
  HeaderText,
  ListWrapper,
  ButtonWrapper,
  Title,
  GoldenPatreonsList,
  GoldenPatreonsContainer,
} from "./PatreonStyle";

library.add(faSeedling);

interface Props {
  patreons: Pick<Patreons, "updatedAt" | "list">;
}

type ParsedPatreonType = "regular" | "gold";

interface ParsedPatreon {
  name: string;
  type: ParsedPatreonType;
}

const Patreon: React.FC<Props> = ({ patreons }) => {
  const { t } = useTranslation("common");
  const { updatedAt, list } = patreons;
  const { lang } = useTranslation();
  const [parsedPatreons, setParsedPatreons] = useState<ParsedPatreon[]>([]);

  useEffect(() => {
    const parser = new DOMParser();

    const newPatreons: ParsedPatreon[] = [];
    const doc = parser.parseFromString(list, "text/html");
    const patreonNodes = doc.body.querySelectorAll("p");
    // @ts-ignore
    for (const patreonNode of patreonNodes) {
      let type: ParsedPatreonType = "regular";
      if (patreonNode.querySelector("strong")) {
        type = "gold";
      }
      newPatreons.push({ name: patreonNode.innerText, type: type });
    }

    setParsedPatreons(newPatreons);
  }, [list]);

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
        <GoldenPatreonsContainer>
          <h3>{t("patreon.list.gold")}</h3>
          <GoldenPatreonsList>
            {parsedPatreons
              .filter((p) => p.type === "gold")
              .map((p, i) => (
                <li key={i}>{p.name}</li>
              ))}
          </GoldenPatreonsList>
        </GoldenPatreonsContainer>
        <ListWrapper>
          {parsedPatreons
            .filter((p) => p.type === "regular")
            .map((p, i) => (
              <li key={i}>{p.name}</li>
            ))}
        </ListWrapper>
        <HeaderDate>
          {t("patreon.list.updatedAt")}&nbsp;
          {new Date(updatedAt).toLocaleDateString()}
        </HeaderDate>
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
