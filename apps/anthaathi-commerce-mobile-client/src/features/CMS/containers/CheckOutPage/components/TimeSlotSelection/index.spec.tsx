import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import TimeSlot from './index';

describe('TimeSlot', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <TimeSlot
            title="Timeslot"
            timeSlots={[
              {
                key: '1',
                name: '09am - 12pm',
              },
              {
                key: '2',
                name: '01pm - 05pm',
              },
              {
                key: '3',
                name: '05pm - 10pm',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('timeSlot')).toBeTruthy();
  });

  it('should have PromoCode title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <TimeSlot
            title="Timeslot"
            timeSlots={[
              {
                key: '1',
                name: '09am - 12pm',
              },
              {
                key: '2',
                name: '01pm - 05pm',
              },
              {
                key: '3',
                name: '05pm - 10pm',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Timeslot')).toBeTruthy();
  });
});
