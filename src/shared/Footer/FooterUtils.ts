import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub
);

export interface SocialLink {
  url: string;
  icon: IconProp;
  customColor?: string;
}

export const socialLinks = (lang: string): SocialLink[] => [
  {
    url: "https://facebook.com/myPoliticsTest",
    icon: faFacebookF,
  },
  {
    url: "https://twitter.com/myPolitics__",
    icon: faTwitter,
  },
  {
    url: "https://www.instagram.com/mypolitics_/",
    icon: faInstagram,
  },
  {
    url: "https://t.me/mypoliticsofficial",
    icon: faTelegramPlane,
  },
  {
    url: "https://discord.com/invite/MrcmhByAcS",
    icon: faDiscord,
  },
  {
    url: "http://github.com/mypolitics",
    icon: faGithub,
  },
  {
    url:
      lang === "pl"
        ? "https://patronite.pl/mypolitics"
        : "https://patreon.com/mypolitics",
    icon:
      lang === "pl"
        ? require("@assets/images/patronite.png")
        : require("@assets/images/patreon.png"),
    customColor: lang === "pl" ? "#ED1B2D" : "#FF424D",
  },
];
