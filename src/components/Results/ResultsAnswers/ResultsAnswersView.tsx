import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEye, faPollH } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  SingleSurveyExtendedLazyQueryHookResult,
  SingleSurveyExtendedQuery,
  useSingleSurveyExtendedLazyQuery,
} from "@generated/graphql";
import * as R from "ramda";
import Answer from "@components/Results/ResultsAnswers/Answer";
import {
  Content,
  IconWrapper,
  Header,
  Title,
  Container,
} from "./ResultsAnswersStyle";

library.add(faEye, faArrowDown, faPollH);

interface Props {
  surveyId: string;
}

const ResultsAnswers: React.FC<Props> = ({ surveyId }) => {
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
  const handleShowMore = () => setLimit(limit + BASE_LIMIT);

  const limitedAnswers = answers.filter((_, i) => i < limit);
  const showButton = limitedAnswers.length < answers.length;

  const toListElement = (answer, index) => (
    <Answer key={answer.id} data={answer} num={index + 1} />
  );
  const mapIndexed = R.addIndex(R.map);
  const listElements = mapIndexed(toListElement, limitedAnswers);

  return (
    <Container>
      <Header>
        <div>
          <IconWrapper>
            <FontAwesomeIcon icon={faPollH} />
          </IconWrapper>
          <Title>Analiza odpowiedzi</Title>
        </div>
      </Header>
      <Content>
        {listElements}
        {answers.length === 0 && (
          <Button
            onClick={() => loadAnswers()}
            beforeIcon={<FontAwesomeIcon icon={faEye} />}
            loading={loading}
          >
            Pokaż
          </Button>
        )}
        {showButton && (
          <Button
            onClick={handleShowMore}
            beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
            loading={loading}
          >
            Pokaż więcej
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default ResultsAnswers;
