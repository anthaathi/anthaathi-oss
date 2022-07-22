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
          <Header leftIcon="menu" title="Header title" />
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
            rightIcon="menu"
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('rightOnHandler')!);
    expect(rightonpress).toBeCalledTimes(1);
  });

  it('should have Header title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Header title="Header title" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Header title')).toBeTruthy();
  });

  it('should have Header Image', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <Header logoImage="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705" />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('headerImage')!.props.source).toMatchObject({
      uri: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705',
    });
  });
});
