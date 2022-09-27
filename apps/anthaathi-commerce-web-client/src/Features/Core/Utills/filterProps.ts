export function filterProps(props: Record<string, any> = {}) {
  const returnValue = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith('$')) {
      return;
    }

    returnValue[key] = props[key];
  });

  return returnValue;
}
