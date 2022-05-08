import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';
import { useForm } from '../Hooks/useForm';

describe('Form Module', () => {
  function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { value, onChange, onBlur } = useForm<string>();

    return (
      <input
        type="text"
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    );
  }

  it('should render item', () => {
    const snapshot = render(
      <Form
        $dataSchema={[]}
        $renderSchema={{
          $element: 'p',
          $$kind: 'anthaathi/element',
          props: { children: 'test', 'data-id': 'p element' },
        }}
      />,
    );

    expect(snapshot.container).toMatchSnapshot();
  });

  it('should render item array', () => {
    const snapshot = render(
      <Form
        $dataSchema={[]}
        $renderSchema={[
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: { children: 'test', 'data-testid': 'p-element', key: 1 },
          },
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: { children: 'test2', 'data-testid': 'p2-element', key: 2 },
          },
        ]}
      />,
    );

    expect(snapshot.getByTestId('p-element').textContent).toBe('test');
    expect(snapshot.getByTestId('p2-element').textContent).toBe('test2');
  });

  it('should render with two way data binding', () => {
    const snapshot = render(
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
            $element: Input,
            $$kind: 'anthaathi/element',
            props: {
              'data-testid': 'input',
              key: 1,
            },
            binding: {
              $ref: 'test',
              $paths: ['title'],
            },
          },
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: {
              children: { $$kind: 'anthaathi/model', $path: ['test', 'title'] },
              'data-testid': 'p2-element',
              key: 2,
            },
          },
        ]}
      />,
    );

    expect((snapshot.getByTestId('input') as HTMLInputElement).value).toBe(
      'test',
    );

    userEvent.type(snapshot.getByTestId('input'), 'This is one of the test');

    expect((snapshot.getByTestId('input') as HTMLInputElement).value).toBe(
      'testThis is one of the test',
    );

    expect(
      (snapshot.getByTestId('p2-element') as HTMLInputElement).textContent,
    ).toBe('testThis is one of the test');

    expect(snapshot.container).toMatchSnapshot();
  });

  it('should render item when it model', () => {
    const snapshot = render(
      <Form
        $dataSchema={[
          {
            $id: 'test',
            type: 'object',
            properties: { title: { type: 'string', default: '' } },
          },
        ]}
        $renderSchema={[
          {
            $element: Input,
            $$kind: 'anthaathi/element',
            props: {
              'data-testid': 'input',
              key: 1,
            },
            binding: {
              $ref: 'test',
              $paths: ['title'],
            },
          },
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: {
              key: 2,
              children: {
                $$kind: 'anthaathi/model',
                $path: ['test', 'title'],
              },
              'data-testid': 'p',
            },
          },
        ]}
      />,
    );

    userEvent.type(snapshot.getByTestId('input'), 'test');
    expect((snapshot.getByTestId('input') as HTMLInputElement).value).toBe(
      'test',
    );
    expect(snapshot.getByTestId('p').textContent).toBe('test');
    expect(snapshot.container).toMatchSnapshot();
  });

  it('should render when item', () => {
    const snapshot = render(
      <Form
        $dataSchema={[
          {
            type: 'object',
            $id: 'test',
            properties: { title: { type: 'string', default: 'test' } },
          },
        ]}
        $renderSchema={[
          {
            $element: Input,
            $$kind: 'anthaathi/element',
            props: {
              'data-testid': 'input',
              key: 2,
            },
            binding: {
              $ref: 'test',
              $paths: ['title'],
            },
          },
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: {
              key: 4,
              'data-testid': 'pElement',
              children: {
                $$kind: 'anthaathi/dynamic',
                jsonLogic: {
                  var: ['test.title'],
                },
              },
            },
          },
          {
            $element: 'p',
            $$kind: 'anthaathi/element',
            props: {
              key: 1,
              'data-testid': 'pElement2',
              children: {
                $$kind: 'anthaathi/dynamic',
                jsonLogic: {
                  cat: [{ var: 'test.title' }, '_TOBE_APPENEDED'],
                },
              },
            },
          },
        ]}
      />,
    );

    expect(snapshot.getByTestId('pElement').textContent).toBe('test');

    userEvent.type(snapshot.getByTestId('input'), 'Something amazing');

    expect(snapshot.container).toMatchSnapshot();
  });
});
