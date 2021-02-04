import React from "react";
import {
  QuizCompassAxis,
  ResultsCompassPartsFragment,
} from "@generated/graphql";
import Compass from "@shared/Compass";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import {
  Container,
  ThirdAxisContainer,
  ThirdAxisInner,
  ThirdAxisPointer,
  DescriptionElementTitle,
  Description,
  DescriptionElementContainer,
  DescriptionElementSide,
} from "./CompassContentStyle";

const ThirdAxis: React.FC<{ position: number }> = ({ position }) => (
  <ThirdAxisContainer>
    <ThirdAxisInner>
      <ThirdAxisPointer position={position} />
    </ThirdAxisInner>
  </ThirdAxisContainer>
);

const DescriptionElement: React.FC<{
  position: number;
  name: string;
}> = ({ position, name }) => {
  const { t } = useTranslation("quiz");
  const roundedPosition = position.toFixed(2);
  const sideName = R.cond([
    [R.gte(R.__, 0.33), R.always(t("compass.right"))],
    [R.gte(R.__, -0.33), R.always(t("compass.center"))],
    [R.T, R.always(t("compass.left"))],
  ])(position);

  return (
    <DescriptionElementContainer>
      <DescriptionElementTitle>
        {name}: {roundedPosition}
      </DescriptionElementTitle>
      <DescriptionElementSide>{sideName}</DescriptionElementSide>
    </DescriptionElementContainer>
  );
};

interface Props {
  selectedCompass: ResultsCompassPartsFragment;
}

const CompassContent: React.FC<Props> = ({ selectedCompass }) => {
  const { lang } = useTranslation("quiz");
  const { point, horizontal, vertical } = selectedCompass;

  return (
    <Container hasThird={!!point.third}>
      <Compass value={[point.horizontal, point.vertical]} />
      {point.third && <ThirdAxis position={point.third} />}
      <Description>
        <DescriptionElement
          position={point.horizontal}
          name={horizontal.name[lang]}
        />
        <DescriptionElement
          position={point.vertical}
          name={vertical.name[lang]}
        />
        {point.third && (
          <DescriptionElement
            position={point.third}
            name={selectedCompass.third.name[lang]}
          />
        )}
      </Description>
    </Container>
  );
};

export default CompassContent;
