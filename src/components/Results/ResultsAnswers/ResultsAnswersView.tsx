import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEye, faPollH } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Party,
  SingleSurveyExtendedLazyQueryHookResult,
  useSingleSurveyExtendedLazyQuery,
} from "@generated/graphql";
import * as R from "ramda";
import Answer from "@components/Results/ResultsAnswers/Answer";
import useTranslation from "next-translate/useTranslation";
import {
  Content,
  IconWrapper,
  Header,
  Title,
  Container,
  Select,
} from "./ResultsAnswersStyle";

library.add(faEye, faArrowDown, faPollH);

interface Props {
  surveyId: string;
  parties: Pick<Party, "id" | "name" | "logoUrl">[];
}

const ResultsAnswers: React.FC<Props> = ({ surveyId, parties }) => {
  const [party, setParty] = useState(undefined);
  const [
    loadAnswers,
    { data, loading },
  ]: SingleSurveyExtendedLazyQueryHookResult = useSingleSurveyExtendedLazyQuery(
    {
      variables: {
        id: surveyId,
      },
    }
  );
  const answers = data?.survey?.answers || [];
  const BASE_LIMIT = 25;
  const [limit, setLimit] = useState<number>(BASE_LIMIT);
  const { t } = useTranslation("results");
  const handleShowMore = () => setLimit(limit + BASE_LIMIT);

  const limitedAnswers = answers.filter((_, i) => i < limit);
  const showButton = limitedAnswers.length < answers.length;

  const toListElement = (answer, index) => (
    <Answer key={answer.id} data={answer} party={party} num={index + 1} />
  );
  const mapIndexed = R.addIndex(R.map);
  const listElements = mapIndexed(toListElement, limitedAnswers);

  const handlePartyChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setParty(parties.find(({ id }) => id === e.target.value));

  return (
    <Container>
      <Header>
        <div>
          <IconWrapper>
            <FontAwesomeIcon icon={faPollH} />
          </IconWrapper>
          <Title>{t("answers.analyze")}</Title>
        </div>
        {parties.length > 0 && (
          <Select
            value={party?.id || typeof party}
            onChange={handlePartyChange}
          >
            <option value="undefined" disabled hidden>
              {t("answers.compare")}
            </option>
            {parties.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        )}
      </Header>
      <Content>
        {listElements}
        {answers.length === 0 && (
          <Button
            onClick={() => loadAnswers()}
            beforeIcon={<FontAwesomeIcon icon={faEye} />}
            loading={loading}
            pulsating
          >
            {t("answers.show")}
          </Button>
        )}
        {showButton && (
          <Button
            onClick={handleShowMore}
            beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
            loading={loading}
          >
            {t("answers.showMore")}
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default ResultsAnswers;
