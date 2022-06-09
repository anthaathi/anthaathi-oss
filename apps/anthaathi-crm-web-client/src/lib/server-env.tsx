import {Environment, Network, Store, RecordSource} from 'relay-runtime';

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const response = await fetch(
      'https://console.crm.anthaathi.dev/v1beta1/relay',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
      },
    );

    return await response.json();
  });
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
