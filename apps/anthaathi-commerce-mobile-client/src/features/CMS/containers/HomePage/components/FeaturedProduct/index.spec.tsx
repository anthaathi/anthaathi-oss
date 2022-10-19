import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import FeaturedProduct from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import {RecoilRoot} from 'recoil';

describe('FeaturedProduct', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('featuredProduct')).toBeTruthy();
  });

  it('should have FeaturedProduct name, description', () => {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'Name test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Name test')).toBeTruthy();
  });

  
  it('should have FeaturedProduct name', () => {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp.queryByText('test')).toBeTruthy();
  });

  it('should have FeaturedProduct Image', () => {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('productImage')!.props.source).toMatchObject({
      uri: 'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
    });
  });

  it('should have button title', function () {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Add to cart')).toBeTruthy();
    expect(temp.queryByText('Buy it now')).toBeTruthy();
  });

  it('should have number of badge for image selection', function () {
    const temp = render(
      <ThemeProvider>
        <RecoilRoot>
          <IntlProvider locale="en-US" messages={locale}>
            <FeaturedProduct
              productInfo={{
                name: 'test',
                listInfo: {
                  description: 'test',
                  shippingInformation: 'Shipping Information',
                },
                blockInfo: {
                  freeShipping: 'Free shipping in UAE',
                  inStock: 'In stock, ready to ship',
                  securePayments: 'Secure Payments',
                  isFresh: 'Fresh',
                },
                price: 0,
                currency: 'USD',
                image: [
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                ],
              }}
            />
          </IntlProvider>
        </RecoilRoot>
      </ThemeProvider>,
    );

    expect(temp.queryAllByTestId('badgeSelectImage').length).toBe(2);
  });
});
