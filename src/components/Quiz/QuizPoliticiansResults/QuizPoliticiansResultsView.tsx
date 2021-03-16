import React, { useState } from "react";
import QuizzesSection from "@components/Quiz/QuizzesSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Enum_Politicianresults_Category as PoliticianCategory,
  PoliticianResults,
  usePoliticiansResultsQuery,
} from "@generated/graphql";
import * as R from "ramda";
import Loading from "@shared/Loading";
import Link from "next/link";
import { paths } from "@constants";
import Button from "@shared/Button";
import CategorySelect from "./CategorySelect";
import {
  PoliticianResultsLink,
  PoliticianImage,
  PoliticianName,
  ResultsList,
  ButtonWrapper,
  EmptyWrapper,
} from "./QuizPoliticianResultsStyle";

library.add(faLandmark);

interface Props {
  quizSlug?: string;
  onlyContent?: boolean;
}

const QuizPoliticiansResults: React.FC<Props> = ({
  onlyContent = false,
  ...props
}) => {
  const BASE_LIMIT = 6;
  const [limit, setLimit] = useState<number>(BASE_LIMIT);
  const [category, setCategory] = useState<PoliticianCategory>(
    PoliticianCategory.Politician
  );
  const { data, loading } = usePoliticiansResultsQuery({
    variables: {
      category,
      ...props,
    },
  });

  const politiciansResults = data?.politicianResultsConnection.values || [];
  const resultsLimited = politiciansResults.filter((_, k) => k < limit);
  const hasMore = resultsLimited.length < politiciansResults.length;

  const handleShowMore = () => setLimit(limit + BASE_LIMIT);

  const toPoliticianResults = ({ rid, politician }: PoliticianResults) => (
    <Link href={paths.results(rid)} passHref key={politician.name}>
      <PoliticianResultsLink>
        <PoliticianImage src={politician.image.url} alt={politician.name} />
        <PoliticianName>{politician.name}</PoliticianName>
      </PoliticianResultsLink>
    </Link>
  );
  const resultsList = R.map(toPoliticianResults, resultsLimited);

  const baseContent = (
    <>
      <ButtonWrapper>
        <CategorySelect
          light={onlyContent}
          value={category}
          onChange={setCategory}
        />
      </ButtonWrapper>
      {loading && <Loading />}
      {!loading && <ResultsList>{resultsList}</ResultsList>}
      {hasMore && (
        <ButtonWrapper>
          <Button onClick={handleShowMore} showShadow>
            Pokaż więcej
          </Button>
        </ButtonWrapper>
      )}
    </>
  );

  const empty = !loading && resultsList.length === 0;

  const content = empty ? (
    <EmptyWrapper>Brak wyników</EmptyWrapper>
  ) : (
    baseContent
  );

  if (onlyContent) {
    return content;
  }

  return (
    <QuizzesSection
      icon={<FontAwesomeIcon icon={faLandmark} />}
      title="Wyniki znanych postaci"
    >
      {content}
    </QuizzesSection>
  );
};

export default QuizPoliticiansResults;
