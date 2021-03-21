import React from "react";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import { ideologiesIds } from "@components/Quiz/utils/ideologiesList";
import { Select, Option } from "./QuizIdeologyInputStyle";

interface Props {
  value: string;
  onChange(ideologyId: string): void;
}

const QuizIdeologyInput: React.FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation("quiz");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);

  const toOption = (ideologyId: string) => (
    <Option key={ideologyId} value={ideologyId}>
      {t(`ideologies.${ideologyId}`)}
    </Option>
  );
  const options = R.map(toOption, ideologiesIds);

  return (
    <Select value={value} onChange={handleChange}>
      <Option value="" disabled hidden>
        {t('ideologies.select')}
      </Option>
      {options}
    </Select>
  );
};

export default QuizIdeologyInput;
