import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import OrderDetailsList from './index';

describe('OrderDetailsList', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <OrderDetailsList
            orders={[
              {
                orderId: '#123456',
                dateOfOrder: 'Tue, 12 Aug 2022',
                currency: 'USD',
                numberOrderItems: 5,
                totalPrice: 0,
              },
              {
                orderId: '#123456',
                dateOfOrder: 'Tue, 12 Aug 2022',
                currency: 'USD',
                numberOrderItems: 5,
                totalPrice: 0,
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('orderDetailsList')).toBeTruthy();
  });
});
