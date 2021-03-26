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
import { translate } from '@utils/translation';

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
  const hasThird = selectedCompass.third?.name !== null;

  return (
    <Container hasThird={hasThird}>
      <Compass value={[point.horizontal, point.vertical]} />
      {hasThird && <ThirdAxis position={point.third} />}
      <Description>
        <DescriptionElement
          position={point.horizontal}
          name={translate(horizontal.name, lang)}
        />
        <DescriptionElement
          position={point.vertical}
          name={translate(vertical.name, lang)}
        />
        {hasThird && (
          <DescriptionElement
            position={point.third}
            name={translate(selectedCompass.third.name, lang)}
          />
        )}
      </Description>
    </Container>
  );
};

export default CompassContent;
