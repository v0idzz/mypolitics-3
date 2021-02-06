import * as React from "react";
import NextHead from "next/head";
import { useEffect } from "react";
import HeadFonts from "./HeadFonts";
import HeadManifest from "./HeadManifest";
import HeadSEO from "./HeadSEO";

const Head: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const gtag = (...args) => {
        (window as any).dataLayer.push(args);
      };

      gtag("js", new Date());
      gtag("config", "G-Y1XYDWC311");
    }
  }, []);

  return (
    <>
      <NextHead>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1XYDWC311"
        />
        <HeadFonts />
        <HeadManifest />
      </NextHead>
      <HeadSEO />
    </>
  );
};

export default Head;
