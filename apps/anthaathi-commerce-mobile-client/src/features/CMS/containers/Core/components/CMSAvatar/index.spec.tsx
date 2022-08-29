import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import CMSAvatar from './index';

describe('CMSAvatar', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <CMSAvatar userData={{name: 'test', photo: 'src'}} />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('CMSAvatar')).toBeTruthy();
  });
});
