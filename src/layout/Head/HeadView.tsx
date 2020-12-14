import * as React from "react";
import * as R from "ramda";
import NextHead from "next/head";

const fontsPreloadPaths = [
  "Poppins/Poppins-Light.ttf",
  "Poppins/Poppins-Bold.ttf",
  "Poppins/Poppins-ExtraBold.ttf",
  "Roboto/Roboto-Regular.ttf",
  "Roboto/Roboto-Bold.ttf",
  "Roboto/Roboto-Light.ttf",
];

const Head: React.FC = () => {
  const toFontPreloadLink = (path: string) => (
    <link
      key={path}
      rel="preload"
      as="font"
      crossOrigin=""
      href={`/static/fonts/${path}`}
    />
  );

  const fontsPreload = R.map(toFontPreloadLink, fontsPreloadPaths);

  return <NextHead>{fontsPreload}</NextHead>;
};

export default Head;
