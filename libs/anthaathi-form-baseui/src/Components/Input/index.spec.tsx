import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './index';
import { RenderInputFields } from '../../SpecUtils';

describe('Input', () => {
  it('should render item for input', async () => {
    const renderer = render(
      <RenderInputFields
        element={Input}
        props={{
          formControlProps: {},
          inputProps: {
            placeholder: 'somecontent',
          },
        }}
      />,
    );

    const inputElement = (await renderer.findByPlaceholderText(
      'somecontent',
    )) as HTMLInputElement;

    expect(inputElement).toBeTruthy();

    userEvent.type(inputElement, 'test');

    expect(inputElement.value).toBe('test');
  });
});
