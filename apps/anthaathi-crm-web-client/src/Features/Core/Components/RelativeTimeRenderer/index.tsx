import * as React from 'react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export function RelativeTimeRenderer({
  time,
  to,
}: {
  time: string;
  to?: 'to' | 'from';
}) {
  const [, setState] = useState(0);

  // This is for refreshing relative time in react
  useEffect(() => {
    const inter = setInterval(() => {
      setState((prev) => prev + 1);
    }, 60 * 1000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  return <>{to === 'from' ? dayjs(time).fromNow() : dayjs(time).toNow()}</>;
}
