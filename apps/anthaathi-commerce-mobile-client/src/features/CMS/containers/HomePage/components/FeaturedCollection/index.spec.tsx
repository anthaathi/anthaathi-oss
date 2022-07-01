import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import FeaturedCollection from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('FeaturedCollection', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedCollection
            title="test"
            products={[
              {
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
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('featuredCollection')).toBeTruthy();
  });
});
