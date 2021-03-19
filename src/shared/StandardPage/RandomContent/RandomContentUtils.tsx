import React, { useEffect, useState } from "react";
import GroupAd from "@shared/GroupAd";

const useRandomContentsConfig = (): React.FC[] => [
  () => <GroupAd name="polemika" />,
  () => <GroupAd name="sztab" />,
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

export const useRandomContent = (): React.FC => {
  const randomContents = useRandomContentsConfig();
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(Math.floor(Math.random() * randomContents.length));
  }, []);

  return randomContents[id];
};
