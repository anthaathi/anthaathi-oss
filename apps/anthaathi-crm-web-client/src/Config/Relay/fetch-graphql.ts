async function fetchGraphQL(text: any, variables: any) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return response.json();
}

export default fetchGraphQL;
