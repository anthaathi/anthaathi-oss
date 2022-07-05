import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import WalletBalance from './index';

describe('WalletBalance', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <WalletBalance
            title="Wallet Balance"
            balance={0}
            currency="USD"
            buttonTitle="Top-up"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('walletBalance')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <WalletBalance
            title="Wallet Balance"
            balance={0}
            currency="USD"
            buttonTitle="Top-up"
            handlePress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('handlePress')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have WalletBalance title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <WalletBalance
            title="Wallet Balance"
            balance={0}
            currency="USD"
            buttonTitle="Top-up"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Wallet Balance')).toBeTruthy();
  });
});
