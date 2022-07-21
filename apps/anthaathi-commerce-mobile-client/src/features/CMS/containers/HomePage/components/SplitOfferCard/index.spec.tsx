import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import SplitOfferCard from './index';

describe('SplitOfferCard', () => {
  const image =
    'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705';
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SplitOfferCard
            title="Get Exclusive Offers"
            subtitle="Get exclusive offers & more by signing up for our promotional email"
            image={image}
            buttonTitle="View Offers"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('splitCardOffer')).toBeTruthy();
  });

  it('should call when we call tap onPress', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SplitOfferCard
            title="Get Exclusive Offers"
            subtitle="Get exclusive offers & more by signing up for our promotional email"
            image={image}
            buttonTitle="View Offers"
            onPress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('buttonPress')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have SplitOfferCard title, subtitle and button title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SplitOfferCard
            title="Get Exclusive Offers"
            subtitle="Get exclusive offers & more by signing up for our promotional email"
            image={image}
            buttonTitle="View Offers"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Get Exclusive Offers')).toBeTruthy();
    expect(
      temp.queryByText(
        'Get exclusive offers & more by signing up for our promotional email',
      ),
    ).toBeTruthy();
    expect(temp.queryByText('View Offers')).toBeTruthy();
  });

  it('should have SplitOfferCard Image', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SplitOfferCard
            title="Get Exclusive Offers"
            subtitle="Get exclusive offers & more by signing up for our promotional email"
            image={image}
            buttonTitle="View Offers"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('offerImage')!.props.source).toMatchObject({
      uri: image,
    });
  });
});
