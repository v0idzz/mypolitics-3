import React, { ChangeEvent, useState } from "react";
import LanguageSelect from "@shared/LanguageSelect";
import useTranslation from "next-translate/useTranslation";
import { TextTranslationInput } from "@generated/graphql";
import { useDebounceCallback } from "@react-hook/debounce";
import { Container, Input } from "./InternationalizedInputStyle";

interface Props {
  value: TextTranslationInput;
  onChange(value: TextTranslationInput): void;
  controlled?: boolean;
}

const InternationalizedInput: React.FC<Props> = ({
  onChange: onGlobalChange,
  value: defaultValue,
  controlled = false,
}) => {
  const { lang } = useTranslation();
  const [value, setValue] = useState<TextTranslationInput>(defaultValue);
  const [selectedLang, setSelectedLang] = useState<string>(lang);
  const handleGlobalChange = useDebounceCallback((v) => onGlobalChange(v), 100);

  const handleControlledChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...defaultValue,
      [selectedLang]: e.target.value,
    };

    onGlobalChange(newValue);
  };

  const handleLocalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...value,
      [selectedLang]: e.target.value,
    };

    setValue(newValue);
    handleGlobalChange(newValue);
  };

  return (
    <Container>
      <LanguageSelect
        global={false}
        value={selectedLang}
        onChange={setSelectedLang}
        color="bluish"
      />
      <Input
        value={(controlled ? defaultValue : value)[selectedLang]}
        onChange={controlled ? handleControlledChange : handleLocalChange}
      />
    </Container>
  );
};

export default InternationalizedInput;
