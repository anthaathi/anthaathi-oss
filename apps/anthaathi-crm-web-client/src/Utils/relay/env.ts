import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import type { FetchFunction } from 'relay-runtime/lib/network/RelayNetworkTypes';

const fetchRelay = (token: () => string | null) => {
  const returnValue: FetchFunction = async (params, variables) => {
    const tkn = token();

    const response = await fetch(
      import.meta.env.VITE_API_ENDPOINT ||
        `/graphql?id=${encodeURIComponent(
          (params as never as { cacheID: string }).cacheID || ''
        )}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(tkn ? { Authorization: tkn } : {}),
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
      }
    );

    // Get the response as JSON
    return response.json();
  };

  return returnValue;
};

// Export a singleton instance of Relay Environment configured with our network function:
export default (token: () => string | null) =>
  new Environment({
    network: Network.create(fetchRelay(token)),
    store: new Store(new RecordSource()),
  });
