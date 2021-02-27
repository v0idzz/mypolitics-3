import { GroupInfo, GroupName } from "./GroupAdTypes";

export const groupsConfig: Record<GroupName, GroupInfo> = {
  polemika: {
    url: "https://www.facebook.com/groups/Polemika/",
    backgroundUrl: require("@assets/images/groups/polemika.png"),
    logoUrl: require("@assets/images/groups/polemika-logo.png"),
  },
  sztab: {
    url: "https://www.facebook.com/groups/sztabmypolitics/",
    backgroundUrl: require("@assets/images/groups/sztab.png"),
    logoUrl: require("@assets/images/groups/sztab-logo.png"),
  },
};
