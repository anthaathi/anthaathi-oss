import * as React from 'react';
import { Input as InputW, InputProps } from 'baseui/input';
import { FormControl, FormControlProps } from 'baseui/form-control';
import { FC } from 'react';
import { CommonAppProvider } from '@anthaathi/web-lib';
import Form from './index';
import { useForm } from '../Hooks/useForm';

export default {
  title: 'Anthaathi/Form',
  component: Form,
};

function Input() {
  const { onChange, value, onBlur } = useForm<string>();

  return (
    <InputW
      type="text"
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      value={value}
      onBlur={() => onBlur()}
    />
  );
}

export function Default() {
  return (
    <CommonAppProvider>
      <Form
        $renderSchema={[
          {
            $element: 'b',
            $$kind: 'anthaathi/element',
            props: {
              key: '12',
              children: {
                $element: 'p',
                $$kind: 'anthaathi/element',
                props: {
                  children: 'secure',
                },
              },
            },
          },
          {
            $element: 'b',
            $$kind: 'anthaathi/element',
            props: {
              key: '122',
              children: {
                $element: 'p',
                $$kind: 'anthaathi/element',
                props: {
                  children: {
                    $$kind: 'anthaathi/element',
                    $element: 'span',
                    props: {
                      children: 'secure1',
                    },
                  },
                },
              },
            },
          },
          {
            $element: InputW as never as FC,
            $$kind: 'anthaathi/element',
            props: {
              value: {
                $$kind: 'anthaathi/model',
                $path: ['https://anthaathi.org/crm/task.json#', 'title'],
              },
              readOnly: true,
            },
            binding: {
              $ref: 'https://anthaathi.org/crm/task.json#',
              $paths: ['title'],
            },
          },
          {
            $element: Input as never,
            $$kind: 'anthaathi/element',
            binding: {
              $ref: 'https://anthaathi.org/crm/task.json#',
              $paths: ['title'],
            },
            props: {
              label: {
                $$kind: 'anthaathi/model',
                $path: ['https://anthaathi.org/crm/task.json#', 'title'],
              },
              placeholder: 'Hello world',
              readOnly: true,
            },
          },
        ]}
        $dataSchema={[
          {
            $id: 'https://anthaathi.org/crm/task.json#',
            type: 'object',
            properties: {
              title: {
                type: 'string',
                maxLength: 255,
                default: 'my name is max',
              },
              description: { type: 'string', maxLength: 5000 },
              requestType: { type: 'string' },
              customer: { type: 'array', items: { type: 'string' } },
              reporter: { type: 'array', items: { type: 'string' } },
              tags: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              assigned: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              attachment: {
                type: 'string',
              },
              reference: {
                type: 'string',
              },
              priority: {
                type: 'string',
              },
            },
          },
        ]}
      />
    </CommonAppProvider>
  );
}
