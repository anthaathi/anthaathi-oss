import * as React from 'react';
import { Form } from '@anthaathi/form';

// eslint-disable-next-line import/prefer-default-export
export function RenderInputFields({
  element,
  props,
}: {
  element: any;
  props: any;
}) {
  return (
    <Form
      $dataSchema={[
        {
          $id: 'test',
          type: 'object',
          properties: {
            test: {
              type: 'string',
              default: '',
            },
          },
        },
      ]}
      $renderSchema={{
        $element: element as never,
        $$kind: 'anthaathi/element',
        props: props as never,
        binding: {
          $ref: 'test',
          $paths: ['test'],
        },
      }}
    />
  );
}
