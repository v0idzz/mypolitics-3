import React, { useState } from "react";
import {
  ResultsCompassPartsFragment,
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import {
  PoliticianInfo,
  Description,
  Axes,
  Ideology,
  Compass,
  Party,
  Traits,
} from "@components/Results";
import ShareSocial from "@shared/ShareSocial";
import { Like } from "react-facebook";
import useTranslation from "next-translate/useTranslation";
import { Container, Col, Row } from "./ResultsContentStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsContent: React.FC<Props> = ({ results, politician }) => {
  const { lang } = useTranslation();
  const hasParties = results.parties.length > 0;
  const hasTraits = results.traits.length > 0;
  const hasAxes = results.axes.length > 0;
  const [compass, setCompass] = useState<
    ResultsCompassPartsFragment | undefined
  >(results.compasses[0]);
  const authorizedPartiesIds = results.quiz.meta.features.authorizedParties.map(
    (p) => p.id
  );
  const hasAdditional = hasParties || compass || hasTraits;
  const hasAxesAndAdditional = hasAxes && hasAdditional;

  return (
    <Container>
      {politician && <PoliticianInfo politician={politician} />}
      <Description />
      <Row cols={hasAxesAndAdditional ? 2 : 1}>
        {hasAxes && (
          <Col>
            <Axes results={results} />
          </Col>
        )}
        {hasAdditional && (
          <Col>
            {compass && (
              <>
                <Ideology compassMode={compass} />
                <Compass
                  selectedCompass={compass}
                  onChange={setCompass}
                  compasses={results.compasses}
                />
              </>
            )}
            {hasParties && (
              <Party
                authorizedPartiesIds={authorizedPartiesIds}
                parties={results.parties}
              />
            )}
            {hasTraits && <Traits traits={results.traits} />}
          </Col>
        )}
      </Row>
      <ShareSocial
        message={`Sprawdź moje poglądy polityczne w ${results.quiz.title[lang]}!`}
      />
      <Like
        href="http://www.facebook.com/myPoliticsTest"
        width="450"
        size="large"
      />
    </Container>
  );
};

export default ResultsContent;
