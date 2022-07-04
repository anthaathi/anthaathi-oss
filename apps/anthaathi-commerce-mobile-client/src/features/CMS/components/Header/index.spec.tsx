import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';
import locale from '../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import Header from './index';

describe('header', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Header leftIcon="menu" title="Header title" rightIcon="search" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('header')).toBeTruthy();
  });

  it('should call when we call tap leftOnPress', function () {
    const leftonpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Header
            leftIcon="menu"
            leftOnPress={leftonpress}
            title="Header title"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('leftOnHandler')!);
    expect(leftonpress).toBeCalledTimes(1);
  });

  it('should call when we call tap rightOnPress', function () {
    const rightonpress = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Header
            rightOnPress={rightonpress}
            title="Header title"
            rightIcon="search"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('rightOnHandler')!);
    expect(rightonpress).toBeCalledTimes(1);
  });
});
