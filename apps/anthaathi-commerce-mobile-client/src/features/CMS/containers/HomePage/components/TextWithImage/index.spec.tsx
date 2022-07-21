import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import TextWithImage from './index';

describe('TextWithImage', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <TextWithImage
            title="How It Works"
            columns={[
              {
                title: 'Register',
                description: 'Description Register',
                image: '',
              },
              {
                title: 'Select Products & Place Order',
                description: 'Description Select Products & Place Order',
                image: '',
              },
              {
                title: 'Schedule Delivery',
                description: 'Description Schedule Delivery',
                image: '',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('textWithImage')).toBeTruthy();
  });

  it('should have TextWithImage title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <TextWithImage
            title="How It Works"
            columns={[
              {
                title: 'Register',
                description: 'Description Register',
                image: '',
              },
              {
                title: 'Select Products & Place Order',
                description: 'Description Select Products & Place Order',
                image: '',
              },
              {
                title: 'Schedule Delivery',
                description: 'Description Schedule Delivery',
                image: '',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('How It Works')).toBeTruthy();
  });
});
