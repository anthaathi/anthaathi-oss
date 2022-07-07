import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import SuggestedItem from './index';

describe('SuggestedItem', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SuggestedItem
            title="Suggested"
            products={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('suggestedItem')).toBeTruthy();
  });

  it('renders expected number of products', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SuggestedItem
            title="Suggested"
            products={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    const getTestId = temp.queryByTestId('suggestedItemList')!;
    expect(getTestId.props.data.length).toBe(2);
    expect(getTestId.props.data[0]).toEqual({
      name: 'Baby Yellow Pepper',
      image:
        'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
      key: '12',
      price: 12,
      currency: 'USD',
      weight_unit: 'KG',
      packaging: 'pack',
    });
  });

  it('should have SuggestedItem title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SuggestedItem
            title="Suggested"
            products={[
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    expect(temp.queryByText('Suggested')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SuggestedItem
            title="Suggested"
            handlePress={onpress}
            products={[
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: 'pack',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('handlePressSuggestedItem')!);
    expect(onpress).toBeCalledTimes(1);
  });
});
