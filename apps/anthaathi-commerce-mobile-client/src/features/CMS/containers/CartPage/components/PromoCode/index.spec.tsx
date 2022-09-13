import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PromoCode from './index';

describe('PromoCode', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PromoCode title="Add your promo code" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('promoCode')).toBeTruthy();
  });

  it('should have PromoCode title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PromoCode title="Add your promo code" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Add your promo code')).toBeTruthy();
  });
});
