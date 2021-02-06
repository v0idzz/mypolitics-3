import { useRouter } from "next/router";
import { paths } from "@constants";
import * as R from "ramda";

interface Logo {
  url: string;
  name: string;
  paths: string[];
  homepage: string;
}

const logos: Logo[] = [
  {
    url: require("@assets/images/logos/group.png"),
    name: "myPolitics Group",
    paths: [],
    homepage: paths.home,
  },
  {
    url: require("@assets/images/logos/media.png"),
    name: "myPolitics Media",
    paths: [paths.articles],
    homepage: paths.articles,
  },
  {
    url: require("@assets/images/logos/talk.png"),
    name: "myPolitics Talk",
    paths: [paths.talks],
    homepage: paths.talks,
  },
  {
    url: require("@assets/images/logos/quiz.png"),
    name: "myPolitics Quiz",
    paths: [paths.quizzes, paths.survey(""), paths.results("")],
    homepage: paths.quizzes,
  },
];

export const useLogo = (): Logo => {
  const { pathname } = useRouter();
  let selectedLogo = logos[0];

  logos.forEach((logo) => {
    logo.paths.forEach((path) => {
      if (R.includes(path, pathname)) {
        selectedLogo = logo;
      }
    });
  });

  const isHomePage = selectedLogo.homepage === pathname;
  const homepage = isHomePage ? paths.home : selectedLogo.homepage;

  return {
    ...selectedLogo,
    homepage,
  };
};
