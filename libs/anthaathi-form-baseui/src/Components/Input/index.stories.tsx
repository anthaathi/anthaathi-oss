import * as React from 'react';
import { CommonAppProvider } from '@anthaathi/web-lib';
import { Form, FormComponentRegistryProvider } from '@anthaathi/form';
import { LabelSmall } from 'baseui/typography';
import InputW from './index';

export default {
  title: 'Anthaathi/Form',
  component: InputW,
};

export function Input() {
  return (
    <CommonAppProvider>
      <FormComponentRegistryProvider
        registry={{
          'baseui/input': [{ component: InputW, $element: 'input' }],
        }}
      >
        <Form
          $dataSchema={[
            {
              $id: 'test',
              type: 'object',
              properties: { title: { type: 'string', default: 'test' } },
            },
          ]}
          $renderSchema={[
            {
              $element: 'input',
              $import: 'baseui/input',
              $$kind: 'anthaathi/element',
              props: {
                inputProps: {
                  placeholder: 'This is one form',
                },
                formControlProps: {
                  label: 'Hi',
                },
              } as never,
              binding: {
                $ref: 'test',
                $paths: ['title'],
              },
            },
            {
              $element: LabelSmall,
              $$kind: 'anthaathi/element',
              props: {
                children: {
                  $$kind: 'anthaathi/model',
                  $path: ['test', 'title'],
                },
              },
            },
          ]}
        />
      </FormComponentRegistryProvider>
    </CommonAppProvider>
  );
}
