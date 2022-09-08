import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import type { FetchFunction } from 'relay-runtime/lib/network/RelayNetworkTypes';

const fetchRelay: FetchFunction = async (params, variables) => {
  const response = await fetch(
    process.env.VITE_API_ENDPOINT || 'http://localhost:8080/graphql',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'application/json',
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

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
