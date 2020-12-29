import * as React from "react";
import NextHead from "next/head";
import HeadFonts from "./HeadFonts";
import HeadManifest from "./HeadManifest";
import HeadSEO from "./HeadSEO";

const Head: React.FC = () => (
  <>
    <NextHead>
      <HeadFonts />
      <HeadManifest />
    </NextHead>
    <HeadSEO />
  </>
);

export default Head;
