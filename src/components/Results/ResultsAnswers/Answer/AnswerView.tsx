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
import { AnswerEffect } from "@components/Results";
import {
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
import { translate } from '@utils/translation';

library.add(faThumbsUp, faThumbsDown);

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
          <Question>{translate(qustion.text, lang)}</Question>
        </HeaderInfo>
        <HeaderActions>
          {!isNeutral && party && !partyNeutral && (
            <Chip variant={partyAgree ? "agree" : "disagree"}>
              {partyAgree
                ? t("results:answers.agree")
                : t("results:answers.disagree")}
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
                <AnswerEffect
                  title={t("results:answers.ideYes")}
                  type={SurveyAnswerType.Agree}
                >
                  {ideologies.agree}
                </AnswerEffect>
                <AnswerEffect
                  title={t("results:answers.ideNo")}
                  type={SurveyAnswerType.Disagree}
                >
                  {ideologies.disagree}
                </AnswerEffect>
              </>
            )}
            {parties.hasAny && (
              <>
                <AnswerEffect
                  title={t("results:answers.parYes")}
                  type={SurveyAnswerType.Agree}
                >
                  {parties.agree}
                </AnswerEffect>
                <AnswerEffect
                  title={t("results:answers.parNo")}
                  type={SurveyAnswerType.Disagree}
                >
                  {parties.disagree}
                </AnswerEffect>
              </>
            )}
          </Content>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default Answer;
