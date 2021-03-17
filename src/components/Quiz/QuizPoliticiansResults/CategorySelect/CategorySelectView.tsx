import { Enum_Politicianresults_Category as PoliticianCategory } from "@generated/graphql";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import { Wrapper, Element } from "./CategorySelectStyle";

interface CategorySelectProps {
  light: boolean;
  value: PoliticianCategory;
  onChange: (value: PoliticianCategory) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  light,
  value,
  onChange,
}) => {
  const { t } = useTranslation("quiz");

  const options = [
    PoliticianCategory.Politician,
    PoliticianCategory.Commentator,
  ];

  const toOption = (category: PoliticianCategory) => (
    <Element
      key={t(`politicianCategory.${category}`)}
      light={light}
      active={category === value}
      onClick={() => onChange(category)}
    >
      {t(`politicianCategory.${category}`)}
    </Element>
  );

  const optionsElements = R.map(toOption, options);

  return <Wrapper>{optionsElements}</Wrapper>;
};

export default CategorySelect;
