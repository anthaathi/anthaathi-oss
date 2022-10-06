export function addServerTiming(
  headers: Headers,
  name: string,
  time: number,
  desc = '',
) {
  let previousValue = headers.get('Server-Timing') || '';

  previousValue += `${
    previousValue ? ',' : ''
  }${name};desc="${desc}";dur=${time}`;

  headers.set('Server-Timing', previousValue);

  return;
}
