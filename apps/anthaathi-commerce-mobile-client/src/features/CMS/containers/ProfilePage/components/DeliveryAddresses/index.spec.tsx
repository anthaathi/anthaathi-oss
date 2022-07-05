import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import DeliveryAddresses from '.';

describe('DeliveryAddresses', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddresses
            title="Delivery Address"
            userAddress={[
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('deliveryAddresses')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddresses
            title="Delivery Address"
            userAddress={[
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
            ]}
            handlePress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('addNewAddress')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have DeliveryAddresses title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddresses
            title="Delivery Address"
            userAddress={[
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
              {
                address: 'address',
                country: 'Country',
                city: 'city',
                apartment: 'apartment',
                landmark: 'Some great landmark',
                postalCode: 12345,
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Delivery Address')).toBeTruthy();
  });
});
