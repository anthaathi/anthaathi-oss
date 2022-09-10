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
            userAddresses={[
              {
                key: 1,
                title: 'Apartment',
                subtitle: '14b street, AI Quoz Industrial Area 4',
              },
              {
                key: 2,
                title: 'Apartment',
                subtitle: '1A street, Discovery Gardens',
              },
            ]}
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
            userAddresses={[
              {
                key: 1,
                title: 'Apartment',
                subtitle: '14b street, AI Quoz Industrial Area 4',
              },
              {
                key: 2,
                title: 'Apartment',
                subtitle: '1A street, Discovery Gardens',
              },
            ]}
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
          <DeliveringSelection
            userAddresses={[
              {
                key: 1,
                title: 'Apartment',
                subtitle: '14b street, AI Quoz Industrial Area 4',
              },
              {
                key: 2,
                title: 'Apartment',
                subtitle: '1A street, Discovery Gardens',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Delivering to')).toBeTruthy();
  });
});
