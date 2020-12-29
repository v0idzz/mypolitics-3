import * as React from "react";
import * as R from "ramda";

const fontsPreloadPaths = [
  "Poppins/Poppins-Light.ttf",
  "Poppins/Poppins-Bold.ttf",
  "Poppins/Poppins-ExtraBold.ttf",
  "Roboto/Roboto-Regular.ttf",
  "Roboto/Roboto-Bold.ttf",
  "Roboto/Roboto-Light.ttf",
];

const HeadFonts: React.FC = () => {
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

  return <>{fontsPreload}</>;
};

export default HeadFonts;
