import { Country } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

const defaultList = [
  Country.Poland,
  Country.England,
  Country.UnitedStates,
  Country.Serbia,
];

export const useCountries = (
  list: Country[] = defaultList
): Record<Country, string> => {
  const { t } = useTranslation("common");

  const dataEntries = Object.values(list).map((k) => [k, t(`country.${k}`)]);

  return Object.fromEntries(dataEntries);
};
