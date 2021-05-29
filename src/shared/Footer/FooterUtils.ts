import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialLink {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  customColor?: string;
}

export const socialLinks = (lang: string): SocialLink[] => [
  {
    url: "https://www.youtube.com/myPolitics",
    icon: faYoutube,
  },
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
