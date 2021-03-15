import { Country } from "@generated/graphql";

export const useCountries = (): Record<Country, string> => ({
  [Country.Poland]: "Polska",
  [Country.England]: "Wielka Brytania",
  [Country.UnitedStates]: "USA",
});
