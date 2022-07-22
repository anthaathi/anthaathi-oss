import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import HeroSlide from './index';

describe('HeroSlide', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="test"
            subTitle="test"
            buttonTitle="View All"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('heroSlide')).toBeTruthy();
  });

  it('should have HeroSlide title, subTitle', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="test title"
            subTitle="test subtitle"
            buttonTitle="View All"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('test title')).toBeTruthy();
    expect(temp.queryByText('test subtitle')).toBeTruthy();
  });

  it('should when we call tap', function () {
    const onpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="test title"
            subTitle="test subtitle"
            buttonTitle="View All"
            handlePress={onpress}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('heroSlideOnPress')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have HeroSlide Image', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="test title"
            subTitle="test subtitle"
            buttonTitle="View All"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('backgroundImage')!.props.source).toMatchObject({
      uri: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430',
    });
  });

  it('should have HeroSlide button title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="test title"
            subTitle="test subtitle"
            buttonTitle="View All"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('buttonTitle')?.children).toContain('View All');
  });
});
