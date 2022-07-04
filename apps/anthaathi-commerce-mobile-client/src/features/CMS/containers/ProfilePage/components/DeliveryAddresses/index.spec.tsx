import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
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
});
