import * as React from 'react';
import { CommonAppProvider } from '@anthaathi/web-lib';
import { Form, FormComponentRegistryProvider } from '@anthaathi/form';
import TextareaW from './index';

export default {
  title: 'Anthaathi/Form',
  component: TextareaW,
};

export function Textarea() {
  return (
    <CommonAppProvider>
      <FormComponentRegistryProvider
        registry={{
          'baseui/input': [{ component: TextareaW, $element: 'input' }],
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
                textareaProps: {
                  placeholder: 'This is one form',
                },
                formControlProps: {
                  label: 'Some callback',
                },
              } as never,
              binding: {
                $ref: 'test',
                $paths: ['title'],
              },
            },
            {
              $element: 'pre',
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
