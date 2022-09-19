import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import CategoryList from './index';

describe('CategoryList', () => {
  it('should render the item', function () {
    const temp = render(
      <IntlProvider locale="en-US" messages={locale}>
        <ThemeProvider>
          <CategoryList
            list={[
              {
                title: 'test',
                title_ar: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </ThemeProvider>
      </IntlProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('categoryList')).toBeTruthy();
  });
});
