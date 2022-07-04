import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import PersonalInformation from './index';

describe('PersonalInformation', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <PersonalInformation
            title={'Personal Information'}
            personalInfo={{
              name: 'User name',
              email: 'user_mail@gmail.com',
              mobile: '+91 0000000000',
              alternateMobile: '+91 0000000000',
            }}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('personalInformation')).toBeTruthy();
  });
});
