import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import SubCategories from '.';

describe('SubCategories', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SubCategories
            subCategoryList={[
              {
                id: '1',
                title: 'All Fruits',
              },
              {
                id: '2',
                title: 'All Fruits',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('subCategories')).toBeTruthy();
  });

  it('renders expected number of products', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <SubCategories
            subCategoryList={[
              {
                id: '1',
                title: 'All Fruits',
              },
              {
                id: '2',
                title: 'All Fruits',
              },
            ]}
          />{' '}
        </IntlProvider>
      </ThemeProvider>,
    );

    const getTestId = temp.queryByTestId('subCategoryList')!;
    expect(getTestId.props.data.length).toBe(2);
    expect(getTestId.props.data[0]).toEqual({
      id: '1',
      title: 'All Fruits',
    });
  });
});
