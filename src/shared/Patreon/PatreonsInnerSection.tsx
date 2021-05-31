import { PatreonsContainer, PatreonsList } from "@shared/Patreon/PatreonStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ParsedPatreonTypeExceptRegular } from "./types";
import useTranslation from "next-translate/useTranslation";

interface Props {
  type: ParsedPatreonTypeExceptRegular;
  list: string[];
}

const PatreonsInnerSection: React.FC<Props> = ({ type, list }) => {
  const { t } = useTranslation("common");

  if (list.length === 0) return null;

  return (
    <PatreonsContainer type={type}>
      <h3>
        <span>
          <FontAwesomeIcon icon={faGem} />
        </span>
        {t(type === "gold" ? "patreon.list.gold" : "patreon.list.diamond")}
      </h3>
      <PatreonsList type={type}>
        {list.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </PatreonsList>
    </PatreonsContainer>
  );
};

export default PatreonsInnerSection;
