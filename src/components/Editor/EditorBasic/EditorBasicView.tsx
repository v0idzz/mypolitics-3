import React from "react";
import InternationalizedInput from "@shared/InternationalizedInput";
import { UseEditor } from '@components/Editor/utils/useEditor';
import { TextTranslationInput } from "@generated/graphql";
import { Container } from "./EditorBasicStyle";

interface Props {
  editor: UseEditor;
}

const EditorBasic: React.FC<Props> = ({ editor }) => {
  const { actions, basicInput } = editor;
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
