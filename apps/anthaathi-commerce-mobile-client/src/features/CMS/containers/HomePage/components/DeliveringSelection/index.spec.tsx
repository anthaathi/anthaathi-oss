import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {DeliveringSelection} from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('DeliveringSection', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveringSelection
            onPress={() => {}}
            country="India"
            location="Dubai"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('deliveringSelection')).toBeTruthy();
  });

  it('should when we call tap', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveringSelection
            onPress={onpress}
            country="India"
            location="Dubai"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('deliveringSelection')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have DeliveringSelection country, location name', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveringSelection country="India" location="Dubai" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Dubai - India')).toBeTruthy();
    expect(temp.queryByText('Delivering to')).toBeTruthy();
  });
});
