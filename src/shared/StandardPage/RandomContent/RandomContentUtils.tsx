import React, { useEffect, useState } from "react";
import GroupAd from "@shared/GroupAd";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import { LANG_CODE } from "@constants";

const useRandomContentsConfig = (): React.FC[] => {
  const { lang } = useTranslation();

  const international = [
    () => (
      <iframe
        title="discord-myp"
        key="3"
        src="https://discord.com/widget?id=775013540540317716&theme=dark"
        width="100%"
        height="500"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        allowTransparency
      />
    ),
  ];

  const pl = [
    () => <GroupAd name="polemika" />,
    () => <GroupAd name="sztab" />,
  ];

  const content: React.FC[] = R.cond([
    [R.equals(LANG_CODE.pl), R.always(pl)],
    [R.T, R.always([])],
  ])(lang);

  return [...content, ...international];
};

export const useRandomContent = (): React.FC => {
  const randomContents = useRandomContentsConfig();
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(Math.floor(Math.random() * randomContents.length));
  }, [randomContents]);

  return randomContents[id];
};
