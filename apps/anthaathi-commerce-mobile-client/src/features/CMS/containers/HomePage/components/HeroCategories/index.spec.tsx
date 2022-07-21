import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import HeroCategories from './index';

describe('HeroCategories', () => {
  it('should render the item', function () {
    const temp = render(
      <IntlProvider locale="en-US" messages={locale}>
        <ThemeProvider>
          <HeroCategories
            title="Test"
            items={[
              {
                title: 'test',
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
    expect(temp.queryByTestId('heroCategory')).toBeTruthy();
  });

  it('should fire event when click on the categories', function () {
    const test = jest.fn();

    const temp = render(
      <IntlProvider locale="en-US" messages={locale}>
        <ThemeProvider>
          <HeroCategories
            onPress={test}
            title="Test"
            items={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
              {
                title: 'test',
                key: 'test2',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </ThemeProvider>
      </IntlProvider>,
    );

    expect(temp).toMatchSnapshot();
    fireEvent.press(temp.queryByTestId('heroItemtest')!);
    expect(test).toBeCalledWith('test');
  });

  it('renders expected number of items', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroCategories
            title="Test"
            items={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
              {
                title: 'test',
                key: 'test2',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    const getTestId = temp.queryByTestId('heroCategoriesList')!;
    expect(getTestId.props.data.length).toBe(1);
    expect(getTestId.props.data[0][0]).toEqual({
      title: 'test',
      key: 'test',
      image:
        'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
    });
  });

  it('should have HeroCategories title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroCategories
            title="Test"
            items={[
              {
                title: 'test',
                key: 'test',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
              {
                title: 'test',
                key: 'test2',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    expect(temp.queryByText('Test')).toBeTruthy();
  });
});
