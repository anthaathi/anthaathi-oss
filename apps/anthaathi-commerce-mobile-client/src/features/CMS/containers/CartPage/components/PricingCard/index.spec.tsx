import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PricingCard from './index';

describe('PricingCard', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PricingCard
            subtotal={{currency: 'AED', price: 10.1}}
            discount={{currency: 'AED', price: 10.1}}
            taxAmount={{currency: 'AED', price: 10.1}}
            shippingCharges={{currency: 'AED', price: 0}}
            total={{currency: 'AED', price: 10.1}}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('pricingCard')).toBeTruthy();
  });

  it('should have PricingCard title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PricingCard
            subtotal={{currency: 'AED', price: 10.1}}
            discount={{currency: 'AED', price: 10.1}}
            taxAmount={{currency: 'AED', price: 10.1}}
            shippingCharges={{currency: 'AED', price: 0}}
            total={{currency: 'AED', price: 10.1}}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryAllByTestId('title').length).toBe(5);
    expect(temp.queryAllByTestId('subtitle').length).toBe(5);
  });
});
