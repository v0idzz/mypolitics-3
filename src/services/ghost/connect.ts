import GhostContentAPI from "@tryghost/content-api";
import { GHOST_KEY, GHOST_URL } from "@constants";

export const ghost = new GhostContentAPI({
  url: GHOST_URL,
  key: GHOST_KEY,
  version: "v3",
});
