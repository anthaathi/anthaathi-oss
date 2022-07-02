import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import DeliveryAddressCard from './index';

describe('DeliveryAddressCard', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddressCard
            deliveryTitle="Delivery Address"
            deliveryAddress="USA"
            buttonTitle="Change"
            mobileNumber="+90909090"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('deliveryAddressCard')).toBeTruthy();
  });
});
