/* eslint-disable no-param-reassign */
import { JSONSchema7, JSONSchema7Array, JSONSchema7Object } from 'json-schema';

export default function generateInitialJSON(
  schema: JSONSchema7,
  $dataSchema: Record<string, JSONSchema7> = {},
): any {
  let initialJson:
    | string
    | number
    | boolean
    | JSONSchema7Object
    | JSONSchema7Array
    | null
    | undefined;

  switch (schema.type) {
    case 'object':
      initialJson = schema.default || {};

      Object.keys(schema.properties || {}).forEach((key) => {
        if (initialJson != null) {
          (initialJson as JSONSchema7Object)[key] = generateInitialJSON(
            schema.properties![key] as never,
            $dataSchema,
          );
        }
      });

      break;
    case 'array':
      initialJson = schema.default || [];

      break;
    case 'string':
      initialJson = schema.default || '';
      break;
    default:
      initialJson = schema.default;
  }

  return initialJson;
}
