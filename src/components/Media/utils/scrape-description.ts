import { parse } from "node-html-parser";

export const scrapeDescription = (article: string): string => {
  const root = parse(article);
  const lead = root.querySelector("strong");
  const firstChild = root.childNodes[0];

  return lead ? lead.innerText : firstChild.innerText;
};
