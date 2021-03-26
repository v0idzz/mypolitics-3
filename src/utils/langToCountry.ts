import { Country } from "@generated/graphql";

const langCountryMap = {
  pl: Country.Poland,
  en: Country.UnitedStates,
};

export const langToCountry = (lang: string) => langCountryMap[lang];
