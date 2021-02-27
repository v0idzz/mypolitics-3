import React, { useState } from "react";
import { Party, SurveyAnswerType } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { library } from "@fortawesome/fontawesome-svg-core";
import { LeanAnswer } from "@components/Results/ResultsAnswers/Answer/AnswerTypes";
import {
  AnswerElementContainer,
  AnswerElementContent,
  AnswerElementTitle,
  AnswerElementTitleWrapper,
  Row,
  Container,
  Content,
  Header,
  HeaderButton,
  HeaderInfo,
  Number,
  Question,
  Chip,
  HeaderActions,
  SubHeader,
} from "./AnswerStyle";
import { useAnswerEffects } from "./AnwerUtils";

library.add(faThumbsUp, faThumbsDown);

const AnswerElement: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
  type: SurveyAnswerType;
}> = ({ title, children, type }) => (
  <AnswerElementContainer type={type}>
    <AnswerElementTitleWrapper>
      <AnswerElementTitle>{title}</AnswerElementTitle>
    </AnswerElementTitleWrapper>
    <AnswerElementContent>{children}</AnswerElementContent>
  </AnswerElementContainer>
);

interface Props {
  data: LeanAnswer;
  num: number;
  party?: Pick<Party, "id" | "name" | "logoUrl">;
}

const Answer: React.FC<Props> = ({ data, num, party }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const { lang, t } = useTranslation("quiz");
  const { question, type, weight } = data;
  const { ideologies, parties } = useAnswerEffects(data);
  const { agree: agreeEffects, disagree: disagreeEffects } = question.effects;
  const isNeutral = type === SurveyAnswerType.Neutral;
  const effects =
    type === SurveyAnswerType.Agree ? agreeEffects : disagreeEffects;
  const hasParty = (effectsArr) =>
    effectsArr.parties.map((p) => p.id).includes(party.id);
  const partyNeutral =
    party && !hasParty(agreeEffects) && !hasParty(disagreeEffects);
  const partyAgree = party && hasParty(effects);

  const handleToggleOpen = () => setOpened(!opened);

  return (
    <Container type={type}>
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
          <HeaderButton onClick={handleToggleOpen} opened={opened}>
            <FontAwesomeIcon icon={faChevronDown} />
          </HeaderButton>
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
        <div>
          <SubHeader type={type}>
            {t(`answers.${type}`)}&nbsp;
            {!isNeutral && <span>({t(`weight.${weight}`)})</span>}
          </SubHeader>
          <Content>
            {ideologies.hasAny && (
              <>
                <AnswerElement
                  title="Ideologie za"
                  type={SurveyAnswerType.Agree}
                >
                  {ideologies.agree}
                </AnswerElement>
                <AnswerElement
                  title="Ideologie przeciw"
                  type={SurveyAnswerType.Disagree}
                >
                  {ideologies.disagree}
                </AnswerElement>
              </>
            )}
            {parties.hasAny && (
              <>
                <AnswerElement title="Partie za" type={SurveyAnswerType.Agree}>
                  {parties.agree}
                </AnswerElement>
                <AnswerElement
                  title="Partie przeciw"
                  type={SurveyAnswerType.Disagree}
                >
                  {parties.disagree}
                </AnswerElement>
              </>
            )}
          </Content>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default Answer;
