export function filterProps(props: Record<string, any> = {}) {
  const returnValue: Record<string, any> = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith('$')) {
      return;
    }

    returnValue[key] = props[key];
  });

  return returnValue;
}
