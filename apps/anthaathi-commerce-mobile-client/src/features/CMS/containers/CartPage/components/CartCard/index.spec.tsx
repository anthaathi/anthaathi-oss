import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import CartCard from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('CartCard', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <CartCard
            title={'title'}
            statusTitle={'subtitle1'}
            statusIcon={'basket'}
            deliveryDate={'Sun, 17 Jul 2022'}
            deliveryBy={'Company'}
            noOfItems={'2 Items'}
            imageList={[
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
            ]}
            orderStatus={false}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('cartCard')).toBeTruthy();
  });
});
