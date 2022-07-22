import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
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

  it('renders expected number of products', function () {
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

    const getTestId = temp.queryByTestId('productList')!;
    expect(getTestId.props.data.length).toBe(1);
    expect(getTestId.props.data[0]).toEqual({
      currency: 'USD',
      image:
        'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
      key: 'test',
      name: 'test',
      notes: 'pack',
      packaging: 'pack',
      price: 0,
      weight_unit: 'KG',
    });
  });

  it('should when we call tap', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedCollection
            title="test"
            handlePress={onpress}
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

    fireEvent.press(temp.queryByTestId('onPressCollection')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have FeaturedCollection title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedCollection
            title="Test title"
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

    expect(temp.queryByText('Test title')).toBeTruthy();
    expect(temp.queryByText('View All')).toBeTruthy();
  });
});
