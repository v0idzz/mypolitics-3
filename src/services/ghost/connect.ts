import GhostContentAPI from "@tryghost/content-api";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const ghost = new GhostContentAPI({
  url: publicRuntimeConfig.GHOST_URL,
  key: publicRuntimeConfig.GHOST_KEY,
  version: "v3",
});
