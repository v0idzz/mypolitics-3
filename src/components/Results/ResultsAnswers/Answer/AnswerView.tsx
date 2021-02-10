import React, { useState } from "react";
import {
  Ideology,
  Party,
  SingleSurveyExtendedQuery,
  SurveyAnswerType,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import IdeologyIcon from "@shared/IdeologyIcon";
import { IdeologyModal } from "@components/Results";
import * as R from "ramda";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  AnswerElementContainer,
  AnswerElementContent,
  AnswerElementTitle,
  AnswerElementTitleWrapper,
  Col,
  Container,
  Content,
  Header,
  HeaderButton,
  HeaderInfo,
  IdeologyWrapper,
  Number,
  PartyImage,
  Question,
  Chip,
  HeaderActions,
} from "./AnswerStyle";

library.add(faThumbsUp, faThumbsDown);

const AnswerElement: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <AnswerElementContainer>
    <AnswerElementTitleWrapper>
      <AnswerElementTitle>{title}</AnswerElementTitle>
    </AnswerElementTitleWrapper>
    <AnswerElementContent>{children}</AnswerElementContent>
  </AnswerElementContainer>
);

interface Props {
  data: SingleSurveyExtendedQuery["survey"]["answers"][0];
  num: number;
  party?: Pick<Party, "id" | "name" | "logoUrl">;
}

const Answer: React.FC<Props> = ({ data, num, party }) => {
  const [showIdeology, setShowIdeology] = useState<Ideology | undefined>(
    undefined
  );
  const [opened, setOpened] = useState<boolean>(false);
  const { lang, t } = useTranslation("quiz");
  const { question, type, weight } = data;
  const isNeutral = type === SurveyAnswerType.Neutral;
  const effectName = type === SurveyAnswerType.Agree ? "agree" : "disagree";
  const oppositeEffectName = effectName === "agree" ? "disagree" : "agree";
  const effects = question.effects[effectName];
  const oppositeEffects = question.effects[oppositeEffectName];
  const hasParty = (effectsArr) =>
    effectsArr.parties.map((p) => p.id).includes(party.id);
  const partyNeutral =
    party &&
    !hasParty(question.effects.agree) &&
    !hasParty(question.effects.disagree);
  const partyAgree = party && hasParty(effects);

  const handleToggleOpen = () => setOpened(!opened);
  const handleShowIdeologyClose = () => setShowIdeology(undefined);

  const toIdeologyButton = (ideology) => (
    <IdeologyWrapper
      key={ideology.name[lang]}
      onClick={() => setShowIdeology(ideology)}
      background={ideology.color}
    >
      <IdeologyIcon icon={ideology.icon} />
    </IdeologyWrapper>
  );
  const ideologiesAgree = R.map(toIdeologyButton, effects.ideologies);
  const ideologiesOpposite = R.map(
    toIdeologyButton,
    oppositeEffects.ideologies
  );

  const toPartyImage = (p) => (
    <PartyImage key={p.name} src={p.logoUrl} alt={p.name} />
  );
  const partiesAgree = R.map(toPartyImage, effects.parties);
  const partiesOpposite = R.map(toPartyImage, oppositeEffects.parties);

  return (
    <Container type={type}>
      <IdeologyModal
        data={showIdeology}
        show={!!showIdeology}
        onClose={handleShowIdeologyClose}
      />
      <Header>
        <HeaderInfo>
          <Number>#{num}</Number>
          <Question>{question.text[lang]}</Question>
        </HeaderInfo>
        <HeaderActions>
          {!isNeutral && party && !partyNeutral && (
            <Chip variant={partyAgree ? "agree" : "disagree"}>
              {partyAgree ? "Zgoda z" : "Niezgoda z"}
              <img src={party.logoUrl} alt={party.name} />
            </Chip>
          )}
          {isNeutral && <Chip variant="neutral">{t(`answers.${type}`)}</Chip>}
          {!isNeutral && (
            <HeaderButton onClick={handleToggleOpen} opened={opened}>
              <FontAwesomeIcon icon={faChevronDown} />
            </HeaderButton>
          )}
        </HeaderActions>
      </Header>
      <CSSTransition
        in={opened}
        classNames="fade"
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        unmountOnExit
      >
        <Content>
          <Col>
            <AnswerElement title="Odpowiedź">
              <p>{t(`answers.${type}`)}</p>
            </AnswerElement>
            <AnswerElement title="Rodzaj">
              <p>{t(`weight.${weight}`)}</p>
            </AnswerElement>
          </Col>
          <Col>
            <AnswerElement title="Ideologie zgodne z Tobą">
              {ideologiesAgree}
            </AnswerElement>
            <AnswerElement title="Ideologie niezgodne z Tobą">
              {ideologiesOpposite}
            </AnswerElement>
          </Col>
          <Col>
            <AnswerElement title="Partie zgodne z Tobą">
              {partiesAgree}
            </AnswerElement>
            <AnswerElement title="Partie niezgodne z Tobą">
              {partiesOpposite}
            </AnswerElement>
          </Col>
        </Content>
      </CSSTransition>
    </Container>
  );
};

export default Answer;
