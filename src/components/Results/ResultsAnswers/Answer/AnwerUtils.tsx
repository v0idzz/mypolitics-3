import {
  IdeologyWrapper,
  PartyImage,
} from "@components/Results/ResultsAnswers/Answer/AnswerStyle";
import IdeologyIcon from "@shared/IdeologyIcon";
import React, { useState } from "react";
import * as R from "ramda";
import { IdeologyModal } from "@components/Results";
import { Ideology } from "@generated/graphql";
import {
  LeanAnswer,
  LeanEffect,
} from "@components/Results/ResultsAnswers/Answer/AnswerTypes";
import useTranslation from "next-translate/useTranslation";
import { translate } from '@utils/translation';

const IdeologyButton: React.FC<{ ideology: Ideology }> = ({ ideology }) => {
  const [showIdeology, setShowIdeology] = useState<Ideology | undefined>(
    undefined
  );

  const handleShowIdeologyClose = () => setShowIdeology(undefined);

  return (
    <>
      <IdeologyModal
        data={showIdeology}
        show={!!showIdeology}
        onClose={handleShowIdeologyClose}
      />
      <IdeologyWrapper
        onClick={() => setShowIdeology(ideology)}
        background={ideology.color}
      >
        <IdeologyIcon icon={ideology.icon} />
      </IdeologyWrapper>
    </>
  );
};

interface UseAnswerEffects {
  ideologies: {
    agree: JSX.Element[];
    disagree: JSX.Element[];
    hasAny: boolean;
  };
  parties: {
    agree: JSX.Element[];
    disagree: JSX.Element[];
    hasAny: boolean;
  };
}

export const useAnswerEffects = (answer: LeanAnswer): UseAnswerEffects => {
  const { lang } = useTranslation();
  const {
    agree: agreeEffects,
    disagree: disagreeEffects,
  } = answer.question.effects;

  const mapToIdeologyButton = R.map((ideology) => (
    <IdeologyButton key={translate(ideology.name, lang)} ideology={ideology} />
  ));

  const mapToPartyImage = R.map((p) => (
    <PartyImage key={p.id} src={p.logoUrl} alt={p.name} />
  ));

  const mapToEffect = (effect: LeanEffect) => ({
    ideologies: mapToIdeologyButton(effect.ideologies),
    parties: mapToPartyImage(effect.parties),
  });

  const agreeEffectElements = mapToEffect(agreeEffects);
  const disagreeEffectElements = mapToEffect(disagreeEffects);
  const hasAnyIdeologies =
    agreeEffectElements.ideologies.length +
      disagreeEffectElements.ideologies.length >
    0;
  const hasAnyParties =
    agreeEffectElements.parties.length + disagreeEffectElements.parties.length >
    0;

  return {
    ideologies: {
      agree: agreeEffectElements.ideologies,
      disagree: disagreeEffectElements.ideologies,
      hasAny: hasAnyIdeologies,
    },
    parties: {
      agree: agreeEffectElements.parties,
      disagree: disagreeEffectElements.parties,
      hasAny: hasAnyParties,
    },
  };
};
