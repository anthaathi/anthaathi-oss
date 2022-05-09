import * as React from 'react';
import { render } from '@testing-library/react';
import { CommonAppProvider } from './CommonAppProvider';

describe('CommonAppProvider', () => {
  it('should render', () => {
    const element = render(<CommonAppProvider>test</CommonAppProvider>);
    expect(element.container).toMatchSnapshot();
  });
});
