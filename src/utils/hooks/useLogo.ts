import { useRouter } from "next/router";
import { paths } from "@constants";
import * as R from "ramda";

export enum LogoType {
  Group,
  Media,
  Talk,
  Quiz,
}

interface Logo {
  url: string;
  name: string;
  paths: string[];
  homepage: string;
  type: LogoType;
}

const logos: Logo[] = [
  {
    url: require("@assets/images/logos/group.png"),
    name: "myPolitics Group",
    paths: [],
    homepage: paths.home,
    type: LogoType.Group,
  },
  {
    url: require("@assets/images/logos/media.png"),
    name: "myPolitics Media",
    paths: [paths.articles],
    homepage: paths.articles,
    type: LogoType.Media,
  },
  {
    url: require("@assets/images/logos/talk.png"),
    name: "myPolitics Talk",
    paths: [paths.talks],
    homepage: paths.talks,
    type: LogoType.Talk,
  },
  {
    url: require("@assets/images/logos/quiz.png"),
    name: "myPolitics Quiz",
    paths: [paths.quizzes, paths.survey(""), paths.results("")],
    homepage: paths.quizzes,
    type: LogoType.Quiz,
  },
];

export const useLogo = (type?: LogoType): Logo => {
  const { pathname } = useRouter();
  let selectedLogo = logos[0];

  if (type) {
    selectedLogo = R.find(R.propEq("type", type))(logos);
  } else {
    logos.forEach((logo) => {
      logo.paths.forEach((path) => {
        if (R.includes(path, pathname)) {
          selectedLogo = logo;
        }
      });
    });
  }

  const isHomePage = selectedLogo.homepage === pathname;
  const homepage = isHomePage ? paths.home : selectedLogo.homepage;

  return {
    ...selectedLogo,
    homepage,
  };
};
