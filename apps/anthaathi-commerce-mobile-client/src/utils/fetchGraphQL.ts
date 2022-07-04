export default async function fetchGraphQL(
  text: string,
  variables: Record<any, any>,
) {
  console.log(process.env.ANTHAATHI_GRAPHQL_ENDPOINT);

  const response = await fetch(process.env.ANTHAATHI_GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [process.env.ANTHAATHI_GRAPHQL_TOKEN_HEADER_NAME!]:
        process.env.ANTHAATHI_GRAPHQL_TOKEN_HEADER_VALUE!,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return response.json();
}
