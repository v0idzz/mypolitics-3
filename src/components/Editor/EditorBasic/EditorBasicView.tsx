import React from "react";
import InternationalizedInput from "@shared/InternationalizedInput";
import { useEditor } from "@components/Editor/utils/useEditor";
import { TextTranslationInput } from "@generated/graphql";
import { Input, Container } from "./EditorBasicStyle";

const EditorBasic: React.FC = () => {
  const { actions, basicInput } = useEditor();
  const { update } = actions;

  const handleTextChange = (
    value: string | TextTranslationInput,
    name: string
  ) =>
    update({
      quiz: {
        [name]: value,
      },
    });

  return (
    <Container>
      <Input
        value={basicInput.logoUrl}
        onChange={(e) => handleTextChange(e.target.value, "logoUrl")}
      />
      <InternationalizedInput
        value={basicInput.title}
        onChange={(v) => handleTextChange(v, "title")}
      />
      <InternationalizedInput
        value={basicInput.description}
        onChange={(v) => handleTextChange(v, "description")}
      />
    </Container>
  );
};

export default EditorBasic;
