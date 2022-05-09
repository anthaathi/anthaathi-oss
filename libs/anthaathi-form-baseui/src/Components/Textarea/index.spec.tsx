import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RenderInputFields } from '../../SpecUtils';
import Textarea from './index';

describe('Textarea', () => {
  it('should render the textarea', async () => {
    const ele = render(
      <RenderInputFields
        element={Textarea}
        props={{ textareaProps: { placeholder: 'Something' } }}
      />,
    );

    const textarea = await ele.findByPlaceholderText('Something');

    expect((textarea as HTMLTextAreaElement).value).toBe('');

    userEvent.type(textarea, 'something amazing');

    expect((textarea as HTMLTextAreaElement).value).toBe('something amazing');
  });
});
