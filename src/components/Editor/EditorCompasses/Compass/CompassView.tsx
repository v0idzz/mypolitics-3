import React from "react";
import { EditorQuizQuery } from "@generated/graphql";
import InternationalizedInput from "@shared/InternationalizedInput";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { deepen } from "@components/Editor/EditorCompasses/Compass/CompassUtils";
import { Container, AxisTitle, AxisWrapper } from "./CompassStyle";

interface Props {
  compass: EditorQuizQuery["quiz"]["lastUpdatedVersion"]["compassModes"][0];
  index: number;
  editor: UseEditor;
}

const Compass: React.FC<Props> = ({ compass, editor, index }) => {
  const { actions } = editor;
  const { name, horizontal, vertical, third } = compass;

  const handleChange = (path: string, value: any) =>
    actions.compasses.update(index, deepen({ [path]: value }));

  return (
    <Container>
      <InternationalizedInput
        value={name}
        onChange={(value) => handleChange("name", value)}
      />
      <AxisWrapper>
        <AxisTitle>Oś pioniowa</AxisTitle>
        <InternationalizedInput
          value={vertical.name}
          onChange={(value) => handleChange("vertical.name", value)}
        />
      </AxisWrapper>
      <AxisWrapper>
        <AxisTitle>Oś pozioma</AxisTitle>
        <InternationalizedInput
          value={horizontal.name}
          onChange={(value) => handleChange("horizontal.name", value)}
        />
      </AxisWrapper>
      {!!third.name && (
        <AxisWrapper>
          <AxisTitle>Trzecia oś</AxisTitle>
          <InternationalizedInput
            value={third.name}
            onChange={(value) => handleChange("third.name", value)}
          />
        </AxisWrapper>
      )}
    </Container>
  );
};

export default Compass;
