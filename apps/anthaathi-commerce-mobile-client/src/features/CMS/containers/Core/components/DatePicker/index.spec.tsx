import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import DatePicker from './index';

describe('DatePicker', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DatePicker title="Date" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('datePicker')).toBeTruthy();
  });

  it('should have DatePicker title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DatePicker title="Date" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Date')).toBeTruthy();
  });
});
