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
import { Container, Col, Row } from "./ResultsContentStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsContent: React.FC<Props> = ({ results, politician }) => {
  const [compass, setCompass] = useState<
    ResultsCompassPartsFragment | undefined
  >(results.compasses[0]);

  return (
    <Container>
      {politician && <PoliticianInfo politician={politician} />}
      <Description />
      <Row>
        <Col>
          <Axes results={results} />
        </Col>
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
          {results.parties.length > 0 && <Party parties={results.parties} />}
          {results.traits.length > 0 && <Traits traits={results.traits} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ResultsContent;
