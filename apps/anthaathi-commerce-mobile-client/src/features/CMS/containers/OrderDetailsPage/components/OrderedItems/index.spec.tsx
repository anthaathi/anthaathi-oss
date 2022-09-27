import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import OrderedItems from '.';

describe('OrderedItems', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <OrderedItems
            title="Items"
            items={[
              {
                id: 1,
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                id: 2,
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('orderedItems')).toBeTruthy();
  });
});
