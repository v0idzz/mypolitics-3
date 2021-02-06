import React, { useState } from 'react';
import { Ideology, SingleSurveyExtendedQuery, SurveyAnswerType, } from '@generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import IdeologyIcon from '@shared/IdeologyIcon';
import { IdeologyModal } from '@components/Results';
import * as R from 'ramda';
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
  NeutralChip,
} from './AnswerStyle';

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
}

const Answer: React.FC<Props> = ({ data, num }) => {
  const [showIdeology, setShowIdeology] = useState<Ideology | undefined>(
    undefined
  );
  const [opened, setOpened] = useState<boolean>(false);
  const { lang, t } = useTranslation("quiz");
  const { question, type, weight } = data;
  const isNeutral = type === SurveyAnswerType.Neutral;
  const effectName = type === SurveyAnswerType.Agree ? "agree" : "disagree";
  const effects = question.effects[effectName];

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
  const ideologies = R.map(toIdeologyButton, effects.ideologies);

  const toPartyImage = (party) => (
    <PartyImage key={party.name} src={party.logoUrl} alt={party.name} />
  );
  const parties = R.map(toPartyImage, effects.parties);

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
        {isNeutral && (
          <NeutralChip>
            {t(`answers.${type}`)}
          </NeutralChip>
        )}
        {!isNeutral && (
          <HeaderButton onClick={handleToggleOpen} opened={opened}>
            <FontAwesomeIcon icon={faChevronDown} />
          </HeaderButton>
        )}
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
              {t(`answers.${type}`)}
            </AnswerElement>
            <AnswerElement title="Rodzaj">
              {t(`weight.${weight}`)}
            </AnswerElement>
          </Col>
          <AnswerElement title="Ideologie">{ideologies}</AnswerElement>
          <AnswerElement title="Partie">{parties}</AnswerElement>
        </Content>
      </CSSTransition>
    </Container>
  );
};

export default Answer;
