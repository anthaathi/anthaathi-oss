import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import DeliveryDateSelection from './index';

describe('DeliveryDateSelection', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryDateSelection title={'Delivery Date'} />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('deliveryDateSelection')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryDateSelection
            title={'Delivery Date'}
            handlePress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('selectMonth')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have DeliveryDateSelection title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <DeliveryDateSelection title={'Delivery Date'} />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Delivery Date')).toBeTruthy();
  });
});
