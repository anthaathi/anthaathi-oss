import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import ProductList from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import {RecoilRoot} from 'recoil';

describe('ProductList', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <ProductList
              products={[
                {
                  id: 1,
                  name: 'test',
                  key: 'test',
                  price: 0,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: 'pack',
                  notes: 'pack',
                  image:
                    'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                },
              ]}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('productList')).toBeTruthy();
  });

  it('renders expected number of products', function () {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <ProductList
              products={[
                {
                  id: 1,
                  name: 'test',
                  key: 'test',
                  price: 0,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: 'pack',
                  notes: 'pack',
                  image:
                    'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                },
              ]}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    const getTestId = temp.queryByTestId('productListData')!;
    expect(getTestId.props.data.length).toBe(1);
  });
});
