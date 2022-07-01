import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
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
});
