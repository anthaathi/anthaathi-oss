import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PromotionalGrid from './index';

describe('PromotionalGrid', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PromotionalGrid
            items={[
              {
                key: '12',
                subHeading: 'Something',
                heading: 'Something',
                text: 'test',
                button1Text: 'SHOP NOW',
                height: [180, 240, 260, 270],
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                width: ['100%', '50%', '100%', '100%'],
              },
              {
                key: '1233',
                subHeading: 'Something',
                heading: 'Something',
                text: 'test',
                button1Text: 'SHOP NOW',
                height: [180, 240, 260, 270],
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                width: ['100%', '50%', '100%', '100%'],
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('promotionalGrid')).toBeTruthy();
  });
});
