export function idGenerator(type: string, id: string) {
  return btoa(`anthaathi://${type}/${id}`);
}

export function idDecoder(id: string): null | { type: string; id: string } {
  const result = atob(id);

  try {
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const parsed = new URL(result);

    if (parsed.protocol !== 'anthaathi:') {
      return null;
    }

    const [, , type, id] = parsed.pathname.split('/');

    return {
      type,
      id,
    };
  } catch (e) {
    return null;
  }
}
