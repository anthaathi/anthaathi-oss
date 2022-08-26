import { LabelMedium } from 'baseui/typography';
import { FlexFill } from '../../../Core/Components/FlexFill';
import { Button, KIND, SIZE as BUTTON_SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';
import React from 'react';
import { DatePicker } from 'baseui/datepicker';

import { SIZE as DATE_SIZE } from 'baseui/input';

export interface PeopleSelectorProps {
  label: string;
}

export function SidebarSelectorDate({ label }: PeopleSelectorProps) {
  const [, $theme] = useStyletron();
  const [value, setValue] = React.useState([new Date()]);

  return (
    <div>
      <Block
        display="flex"
        alignContent="center"
        placeContent="center"
        marginBottom="scale200"
        alignItems="center"
        $style={{ cursor: 'pointer' }}
        onClick={() => {}}
      >
        <LabelMedium
          $style={{ fontFamily: $theme.typography.headingFontFamily }}
        >
          {label}
        </LabelMedium>

        <FlexFill />

        <Button size={BUTTON_SIZE.mini} kind={KIND.tertiary}>
          <Icon icon="gear" />
        </Button>
      </Block>
      <DatePicker
        size={DATE_SIZE.compact}
        value={value}
        onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
        clearable
      />
    </div>
  );
}
