import { PostOrPage, PostsOrPages } from "@tryghost/content-api";

export const emptyArrayIfUndefined = (
  data: PostsOrPages | undefined
): PostOrPage[] =>
  typeof data === "undefined" ? [] : JSON.parse(JSON.stringify(data));
