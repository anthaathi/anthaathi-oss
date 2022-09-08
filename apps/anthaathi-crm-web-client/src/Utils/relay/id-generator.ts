export function idGenerator(type: string, id: string) {
  return btoa(`anthaathi://${type}/${id}`);
}
