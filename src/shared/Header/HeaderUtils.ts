import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import useTranslation from "next-translate/useTranslation";
import { paths } from "@constants";
import {
  faHistory,
  faMicrophone,
  faNewspaper,
  faPencilRuler,
  faPollH,
} from "@fortawesome/free-solid-svg-icons";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";

library.add(faHistory, faMicrophone, faNewspaper, faPencilRuler, faPollH);

export interface HeaderNavElement {
  text: string;
  icon: IconProp;
  path: string;
  highlighted?: boolean;
}

export const useHeaderNav = (): HeaderNavElement[] => {
  const { t } = useTranslation("common");
  const { value: firstTimer } = useFirstTimer();
  const simple = [
    {
      text: t("header.quiz"),
      path: paths.quizzesPreInitialize,
      icon: faPollH,
      highlighted: true,
    },
  ];
  const advanced = [
    {
      text: t("header.quiz"),
      path: paths.quizzes,
      icon: faPollH,
    },
    {
      text: t("header.history"),
      path: paths.quizzesHistory,
      icon: faHistory,
    },
    {
      text: t("header.creator"),
      path: paths.editorPanel,
      icon: faPencilRuler,
    },
  ];

  return [
    {
      text: t("header.articles"),
      path: paths.articles,
      icon: faNewspaper,
    },
    {
      text: t("header.talks"),
      path: paths.talks,
      icon: faMicrophone,
    },
    ...(firstTimer ? simple : advanced),
  ];
};
