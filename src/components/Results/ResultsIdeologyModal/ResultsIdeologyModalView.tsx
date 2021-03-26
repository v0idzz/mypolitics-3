import React from "react";
import Modal from "@shared/Modal";
import { ResultsIdeology } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import IdeologyIcon from "@shared/IdeologyIcon";
import {
  TitleContainer,
  IconWrapper,
  TitleWrapper,
} from "./ResultsIdeologyStyle";
import { translate } from '@utils/translation';

interface Props {
  data?: Pick<ResultsIdeology, "name" | "description" | "color" | "icon">;
  show: boolean;
  onClose(): void;
}

const ResultsIdeologyModal: React.FC<Props> = ({ data, show, onClose }) => {
  const { lang } = useTranslation();

  if (!data) {
    return null;
  }

  const { name, description, color, icon } = data;

  const header = {
    color,
    title: (
      <TitleContainer>
        <IconWrapper>
          <IdeologyIcon icon={icon} />
        </IconWrapper>
        <TitleWrapper>{translate(name, lang)}</TitleWrapper>
      </TitleContainer>
    ),
  };

  return (
    <Modal header={header} show={show} onClose={onClose}>
      {translate(description, lang)}
    </Modal>
  );
};

export default ResultsIdeologyModal;
