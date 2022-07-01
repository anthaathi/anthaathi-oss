import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import FeaturedProduct from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('FeaturedProduct', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedProduct
            productInfo={{
              name: 'test',
              price: 0,
              description: 'test',
              currency: 'USD',
              image: [
                'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              ],
            }}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('featuredProduct')).toBeTruthy();
  });
});
