import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
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

  it('should have DeliveryAddressCard title, address and mobile number', () => {
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

    expect(temp.queryByText('Delivery Address')).toBeTruthy();
    expect(temp.queryByText('USA')).toBeTruthy();
    expect(temp.queryByText('Mobile')).toBeTruthy();
    expect(temp.queryByText(': +90909090')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryAddressCard
            deliveryTitle="Delivery Address"
            deliveryAddress="USA"
            buttonTitle="Change"
            mobileNumber="+90909090"
            handlePress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('changeAddressButton')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have DeliveryAddressCard button title', () => {
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

    expect(temp.queryByTestId('deliverAddressButtonTitle')?.children).toContain(
      'Change',
    );
  });
});
