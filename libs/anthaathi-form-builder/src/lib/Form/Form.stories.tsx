import * as React from 'react';
import Form from './index';
import { useForm } from '../Hooks/useForm';

export default {
  title: 'Anthaathi/Form',
  component: Form,
};

function Input() {
  const { onChange, value, onBlur } = useForm<string>();

  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      onBlur={() => onBlur()}
    />
  );
}

export function Default() {
  return (
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
          $element: 'input',
          $$kind: 'anthaathi/element',
          props: {
            value: {
              $$kind: 'anthaathi/dynamic',
              jsonLogic: { var: ['test'] },
            },
            readOnly: true,
          },
        },
        {
          $element: Input,
          $$kind: 'anthaathi/element',
          binding: {
            $ref: 'https://anthaathi.org/crm/task.json#/title',
            $paths: [],
          },
        },
      ]}
      $dataSchema={[
        {
          $id: 'https://anthaathi.org/crm/task.json#',
          type: 'object',
          properties: {
            title: { type: 'string', maxLength: 255 },
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
  );
}
