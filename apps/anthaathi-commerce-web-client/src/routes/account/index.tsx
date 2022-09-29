import {
  createServerAction$,
  createServerData$,
  redirect,
} from 'solid-start/server';
import { useRouteData } from '@solidjs/router';

export function routeData() {
  return createServerData$(async (_, { request }) => {
    throw redirect(
      `/account/login?return-url=${encodeURIComponent('/account')}`,
    );
  });
}

export default function () {
  const user = useRouteData();

  if (!user()) {
    return <></>;
  }

  return <>Account Page</>;
}
