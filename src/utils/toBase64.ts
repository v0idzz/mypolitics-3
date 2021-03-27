export const objToBase64 = (obj: Record<any, any>): string => {
  const str = unescape(encodeURIComponent(JSON.stringify(obj)));
  const buff = Buffer.from(str);
  return buff.toString("base64");
};
