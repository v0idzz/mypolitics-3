import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
  icon: IconDefinition;
}

export const socialLinks: SocialLink[] = [
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
];
