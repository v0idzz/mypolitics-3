import React, { ChangeEvent, useEffect, useState } from "react";
import LanguageSelect from "@shared/LanguageSelect";
import useTranslation from "next-translate/useTranslation";
import { TextTranslationInput } from "@generated/graphql";
import { useDebounce } from "use-debounce";
import { useDebounceCallback } from "@react-hook/debounce";
import { Container, Input } from "./InternationalizedInputStyle";

interface Props {
  value: TextTranslationInput;
  onChange(value: TextTranslationInput): void;
}

const InternationalizedInput: React.FC<Props> = ({
  value: defaultValue,
  onChange,
}) => {
  const { lang } = useTranslation();
  const [value, setValue] = useState<TextTranslationInput>(defaultValue);
  const [selectedLang, setSelectedLang] = useState<string>(lang);
  const handleChange = useDebounceCallback((v) => onChange(v), 1000);

  const handleLocalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...value,
      [selectedLang]: e.target.value,
    };

    setValue(newValue);
    handleChange(newValue);
  };

  return (
    <Container>
      <LanguageSelect
        global={false}
        value={selectedLang}
        onChange={setSelectedLang}
        color="bluish"
      />
      <Input value={value[selectedLang]} onChange={handleLocalChange} />
    </Container>
  );
};

export default InternationalizedInput;
