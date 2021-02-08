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
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import { Container, Col, Row } from "./ResultsContentStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsContent: React.FC<Props> = ({ results, politician }) => {
  const { url } = useCanonicalUrl();
  const hasParties = results.parties.length > 0;
  const hasTraits = results.traits.length > 0;
  const [compass, setCompass] = useState<
    ResultsCompassPartsFragment | undefined
  >(results.compasses[0]);
  const authorizedPartiesIds = results.quiz.meta.features.authorizedParties.map(
    (p) => p.id
  );
  const hasAnyAdditionalFeatures = compass || hasParties || hasTraits;

  return (
    <Container>
      {politician && <PoliticianInfo politician={politician} />}
      <Description />
      <Row cols={hasAnyAdditionalFeatures ? 2 : 1}>
        <Col>
          <Axes results={results} />
        </Col>
        {hasAnyAdditionalFeatures && (
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
            {/*{hasParties && (*/}
            {/*  <Party*/}
            {/*    authorizedPartiesIds={authorizedPartiesIds}*/}
            {/*    parties={results.parties}*/}
            {/*  />*/}
            {/*)}*/}
            {hasTraits && <Traits traits={results.traits} />}
          </Col>
        )}
      </Row>
      <ShareSocial
        url={url}
        message="Sprawdź moje poglądy polityczne w myPolitics!"
      />
      <iframe
        title="like-fb-results"
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FmyPoliticsTest&width=450&layout=standard&action=like&size=small&share=false&height=35&appId=4144384798967211"
        width="450"
        height="35"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </Container>
  );
};

export default ResultsContent;
