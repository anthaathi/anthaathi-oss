import * as React from 'react';
import { Form } from '@anthaathi/form';
import { CommonAppProvider } from '@anthaathi/web-lib';
import SelectW, { SelectProps } from './index';

export default {
  title: 'Anthaathi/Form',
  component: SelectW,
};

export function Select() {
  return (
    <CommonAppProvider>
      <Form
        $dataSchema={[
          {
            $id: 'test',
            type: 'object',
            properties: {
              title: {
                type: 'string',
              },
            },
          },
        ]}
        $renderSchema={[
          {
            $element: SelectW,
            $$kind: 'anthaathi/element',
            props: {
              key: 1,
              selectProps: {
                options: [
                  {
                    id: 'test',
                    label: 'test',
                  },
                ],
              },
              formControlProps: {},
            } as SelectProps as never,
            binding: {
              $paths: ['title'],
              $ref: 'test',
            },
          },
        ]}
      />
    </CommonAppProvider>
  );
}
