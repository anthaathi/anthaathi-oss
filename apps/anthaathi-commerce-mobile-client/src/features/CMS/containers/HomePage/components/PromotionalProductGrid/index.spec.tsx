import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PromotionalProductGrid from './index';

describe('PromotionalProductGrid', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PromotionalProductGrid
            products={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                price: 12,
                currency: 'USD',
                heading: 'Heading',
                buttonTitle: 'Shop',
                label: 'New',
                description: '100% fresh. Sourced from Netherlands',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                price: 23,
                currency: 'USD',
                heading: 'Heading',
                buttonTitle: 'Shop',
                label: 'New',
                description: '100% fresh. Sourced from Netherlands',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('promotionalProductGrid')).toBeTruthy();
  });
});
