import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import SplitCardOffer from './index';

describe('SplitCardOffer', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SplitCardOffer
            title="Get Exclusive Offers"
            subtitle="Get exclusive offers & more by signing up for our promotional email"
            image="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705"
            buttonTitle="View Offers"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('splitCardOffer')).toBeTruthy();
  });
});
