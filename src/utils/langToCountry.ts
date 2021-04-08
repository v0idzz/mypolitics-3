import { Country } from "@generated/graphql";

const langCountryMap = {
  pl: Country.Poland,
  en: Country.UnitedStates,
  sr: Country.Serbia,
};

export const langToCountry = (lang: string) => langCountryMap[lang];
