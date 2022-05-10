import * as React from 'react';
import { render } from '@testing-library/react';
import { Form } from '@anthaathi/form';
import Select from './index';

describe('Select', () => {
  it('should render select', () => {
    const d = render(
      <Form
        $dataSchema={[
          {
            $id: 'test',
            type: 'object',
            properties: {
              title: {
                type: 'string',
              },
              arrayOfTitle: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        ]}
        $renderSchema={[
          {
            $$kind: 'anthaathi/element',
            $element: Select,
            binding: { $ref: 'test', $paths: ['title'] },
            props: {
              key: 1,
            },
          },
          {
            $$kind: 'anthaathi/element',
            $element: Select,
            binding: { $ref: 'test', $paths: ['arrayOfTitle'] },
            props: {
              key: 2,
            },
          },
        ]}
        $dataSources={{
          test: [
            {
              id: 'id',
              label: 'Omkar',
            },
          ],
        }}
      />,
    );

    expect(d).toBeTruthy();

    expect(d.container).toMatchSnapshot();
  });
});
