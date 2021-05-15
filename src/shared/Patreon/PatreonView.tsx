import React, { useEffect, useState } from "react";
import { Patreons } from "@generated/graphql";
import Button from "@shared/Button";
import { faSeedling, faGem, faCrown } from "@fortawesome/free-solid-svg-icons";
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
} from "./PatreonStyle";
import { ParsedPatreonType } from "./types";
import PatreonsInnerSection from "@shared/Patreon/PatreonsInnerSection";

library.add(faSeedling, faGem, faCrown);

interface Props {
  patreons: Pick<Patreons, "updatedAt" | "list">;
}

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
      } else if (patreonNode.querySelector("i")) {
        type = "diamond";
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
        <PatreonsInnerSection
          type="diamond"
          list={parsedPatreons
            .filter((p) => p.type === "diamond")
            .map((p) => p.name)}
        />
        <PatreonsInnerSection
          type="gold"
          list={parsedPatreons
            .filter((p) => p.type === "gold")
            .map((p) => p.name)}
        />
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
