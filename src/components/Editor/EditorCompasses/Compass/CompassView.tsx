import React from "react";
import { EditorQuizQuery } from "@generated/graphql";
import InternationalizedInput from "@shared/InternationalizedInput";
import { Container, AxisTitle, AxisWrapper } from "./CompassStyle";

interface Props {
  compass: EditorQuizQuery["quiz"]["lastUpdatedVersion"]["compassModes"][0];
}

const Compass: React.FC<Props> = ({ compass }) => {
  const { name, horizontal, vertical, third } = compass;

  return (
    <Container>
      <InternationalizedInput value={name} onChange={() => null} />
      <AxisWrapper>
        <AxisTitle>Oś pioniowa</AxisTitle>
        <InternationalizedInput value={vertical.name} onChange={() => null} />
      </AxisWrapper>
      <AxisWrapper>
        <AxisTitle>Oś pozioma</AxisTitle>
        <InternationalizedInput value={horizontal.name} onChange={() => null} />
      </AxisWrapper>
      {!!third.name && (
        <AxisWrapper>
          <AxisTitle>Trzecia oś</AxisTitle>
          <InternationalizedInput value={third.name} onChange={() => null} />
        </AxisWrapper>
      )}
    </Container>
  );
};

export default Compass;
