import { Country } from "@generated/graphql";

export const useCountries = (list?: Country[]): Record<Country, string> => {
  const data = {
    [Country.Poland]: "Polska",
    [Country.England]: "Wielka Brytania",
    [Country.UnitedStates]: "USA",
  };

  if (!list) {
    return data;
  }

  const dataEntries = Object.keys(data)
    .filter((c) => (list as string[]).includes(c))
    .map((k) => [k, data[k]]);

  return Object.fromEntries(dataEntries);
};
