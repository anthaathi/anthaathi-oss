import * as React from 'react';
import { render } from '@testing-library/react';
import Anthaathi from './Anthaathi';

describe('Icons', () => {
  it('should render Anthaathi', () => {
    const icon = render(<Anthaathi />);
    expect(icon.container).toMatchSnapshot();
  });
});
