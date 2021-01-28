import { useRouter } from "next/router";
import { paths } from "@constants";
import * as R from "ramda";

interface Logo {
  url: string;
  name: string;
  paths: string[];
}

const logos: Logo[] = [
  {
    url: require("@assets/images/logos/group.png"),
    name: "myPolitics Group",
    paths: [],
  },
  {
    url: require("@assets/images/logos/media.png"),
    name: "myPolitics Media",
    paths: [paths.articles],
  },
  {
    url: require("@assets/images/logos/talk.png"),
    name: "myPolitics Talk",
    paths: [paths.talks],
  },
  {
    url: require("@assets/images/logos/quiz.png"),
    name: "myPolitics Quiz",
    paths: [paths.quizzes],
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

  return selectedLogo;
};
