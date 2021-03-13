import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import useTranslation from "next-translate/useTranslation";
import { paths } from "@constants";
import {
  faHistory,
  faMicrophone,
  faNewspaper,
  faPencilRuler,
  faPollH,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";
import { useCurrentUserQuery, UserRole } from "@generated/graphql";

library.add(
  faHistory,
  faMicrophone,
  faNewspaper,
  faPencilRuler,
  faPollH,
  faShieldAlt
);

export interface HeaderNavElement {
  text: string;
  icon: IconProp;
  path: string;
  highlighted?: boolean;
}

export const useHeaderNav = (): HeaderNavElement[] => {
  const { t } = useTranslation("common");
  const { value: firstTimer } = useFirstTimer();
  const { data } = useCurrentUserQuery({
    errorPolicy: "ignore",
  });
  const isAdmin = [UserRole.Moderator, UserRole.Admin].includes(data?.me.role);

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

  const admin = [
    {
      text: t("header.quizMod"),
      path: paths.editorAdmin,
      icon: faShieldAlt,
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
    ...(isAdmin ? admin : []),
  ];
};
