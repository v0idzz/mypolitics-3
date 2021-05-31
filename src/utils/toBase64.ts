export const objToBase64Uri = (obj: Record<any, any>): string => {
  const str = JSON.stringify(obj);
  const buff = Buffer.from(str);
  return encodeURIComponent(buff.toString("base64"));
};
