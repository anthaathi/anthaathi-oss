import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import CategoriesCard from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('CategoryCard', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <CategoriesCard
            title="Categories"
            categories={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('categoryCard')).toBeTruthy();
  });

  it('should have CategoryCard title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <CategoriesCard
            title="Categories"
            categories={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    expect(temp.queryByText('Categories')).toBeTruthy();
  });

  it('should have Categories Image', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <CategoriesCard
            title="Categories"
            categories={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('categoryImage')!.props.source).toMatchObject({
      uri: 'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
    });
  });
});
