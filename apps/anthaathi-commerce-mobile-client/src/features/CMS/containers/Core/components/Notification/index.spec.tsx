import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import Notification from '.';

describe('Notification', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Notification
            title="title"
            subtitle1="subtitle1"
            subtitle2="subtitle2"
            time="2d"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('notification')).toBeTruthy();
  });

  it('should have Notification title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Notification
            title="title"
            subtitle1="subtitle1"
            subtitle2="subtitle2"
            time="2d"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('title')).toBeTruthy();
    expect(temp.queryByText('subtitle1')).toBeTruthy();
    expect(temp.queryByText('subtitle2')).toBeTruthy();
    expect(temp.queryByText('2d')).toBeTruthy();
  });
});
