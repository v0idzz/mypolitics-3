import React, { useState } from "react";

import { Group } from "react-facebook";

const randomContentsConfig = (): React.FC[] => [
  () => (
    <Group
      key="1"
      href="https://www.facebook.com/groups/Polemika/"
      skin="light"
      showSocialContext
      showMetaData
    />
  ),
  () => (
    <Group
      key="2"
      href="https://www.facebook.com/groups/sztabmypolitics/"
      skin="light"
      showSocialContext
      showMetaData
    />
  ),
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
  const randomContents = randomContentsConfig();
  const [id] = useState(Math.floor(Math.random() * randomContents.length));

  return randomContents[id];
};
