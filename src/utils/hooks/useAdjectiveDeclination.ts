import useTranslation from "next-translate/useTranslation";

interface UseAdjectiveDeclination {
  decline(adj: string, verb: string): string;
}

const config: Record<string, UseAdjectiveDeclination["decline"]> = {
  en: (adj, verb) => `${adj} ${verb}`,
  pl: (adj, verb) => {
    const feminineEnd = ["ć", "a"];
    const feminineVerb = feminineEnd.includes(verb[verb.length - 1]);

    if (feminineVerb) {
      return `${adj.slice(0, -1).concat("a")} ${verb}`;
    }

    return `${adj} ${verb}`;
  },
};

const useAdjectiveDeclination = (): UseAdjectiveDeclination => {
  const { lang } = useTranslation();
  return { decline: config[lang] };
};

export default useAdjectiveDeclination;
