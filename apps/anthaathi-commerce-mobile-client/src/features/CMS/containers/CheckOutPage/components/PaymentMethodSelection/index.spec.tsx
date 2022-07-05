import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PaymentMethodSelection from './index';

describe('PaymentMethodSelection', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PaymentMethodSelection
            title="Payment Method"
            options={[
              {
                key: '1',
                name: 'Credit / Debit Card',
              },
              {
                key: '2',
                name: 'Cash on delivery',
              },
              {
                key: '3',
                name: 'Wallet',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('paymentMethodSelection')).toBeTruthy();
  });

  it('should have PaymentMethodSelection title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PaymentMethodSelection
            title="Payment Method"
            options={[
              {
                key: '1',
                name: 'Credit / Debit Card',
              },
              {
                key: '2',
                name: 'Cash on delivery',
              },
              {
                key: '3',
                name: 'Wallet',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Payment Method')).toBeTruthy();
  });
});
