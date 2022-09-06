const defaultInitializer = (index: number) => index;

export function createRange<T = number>(
  length: number,
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-explicit-any
  initializer: (index: number) => any = defaultInitializer
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}
