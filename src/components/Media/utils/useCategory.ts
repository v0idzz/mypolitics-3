import { Tag } from "@tryghost/content-api";
import useTranslation from "next-translate/useTranslation";

interface UseCategory {
  category?: string;
  subCategories: string[];
}

export const categoriesConfig: Record<string, string[]> = {
  pl: ["Opinia", "News"],
  en: ["View", "Report"],
};

export const useCategory = (tags: Tag[]): UseCategory => {
  const { lang } = useTranslation();
  const categories = categoriesConfig[lang] || categoriesConfig.en;

  const withoutInternal = (tag: Tag) => tag.visibility !== "internal";
  const filteredTags = tags.filter(withoutInternal);

  const onlyCategory = (tag: Tag) => categories.includes(tag.name);
  const foundCategoryTag = filteredTags.filter(onlyCategory);
  const category =
    typeof foundCategoryTag[0] !== "undefined"
      ? foundCategoryTag[0].name
      : undefined;

  const withoutCategory = (tag: Tag) => category !== tag.name;
  const toName = (tag: Tag) => tag.name;
  const subCategories = filteredTags.filter(withoutCategory).map(toName);

  return {
    category,
    subCategories,
  };
};
