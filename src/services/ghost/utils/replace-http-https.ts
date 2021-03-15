const replaceHttps = (str: string) => str.replace(/http:\/\//g, `https://`);

export const replaceHttpHttps = <T>(obj: T): T =>
  JSON.parse(replaceHttps(JSON.stringify(obj)));
