import React, { ChangeEvent, useEffect, useState } from "react";
import LanguageSelect from "@shared/LanguageSelect";
import useTranslation from "next-translate/useTranslation";
import { TextTranslationInput } from "@generated/graphql";
import { useDebounce } from "use-debounce";
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
  const [valueDebounced] = useDebounce(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue({
      ...value,
      [selectedLang]: e.target.value,
    });

  useEffect(() => {
    onChange(valueDebounced);
  }, [valueDebounced]);

  return (
    <Container>
      <LanguageSelect
        global={false}
        value={selectedLang}
        onChange={setSelectedLang}
      />
      <Input value={value[selectedLang]} onChange={handleChange} />
    </Container>
  );
};

export default InternationalizedInput;
