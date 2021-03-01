export const deepen = (obj: Record<string, any>): Record<string, any> => {
  const result = {};

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const objectPath in obj) {
    const parts = objectPath.split(".");

    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      // eslint-disable-next-line no-multi-assign
      target = target[part] = target[part] || {};
    }

    target[parts[0]] = obj[objectPath];
  }

  return result;
};
