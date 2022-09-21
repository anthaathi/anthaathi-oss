import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import DeliveryAddressDetailsCard from '.';

describe('DeliveryAddressDetailsCard', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddressDetailsCard
            deliveryTitle="Delivery Address"
            deliveryAddress="USA"
            mobileNumber="+90909090"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('deliveryAddressDetailsCard')).toBeTruthy();
  });

  it('should have DeliveryAddressDetailsCard title, address and mobile number', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddressDetailsCard
            deliveryTitle="Delivery Address"
            deliveryAddress="USA"
            buttonTitle="Change"
            mobileNumber="+90909090"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Delivery Address')).toBeTruthy();
    expect(temp.queryByText('USA')).toBeTruthy();
    expect(temp.queryByText('Mobile')).toBeTruthy();
    expect(temp.queryByText(': +90909090')).toBeTruthy();
  });

});