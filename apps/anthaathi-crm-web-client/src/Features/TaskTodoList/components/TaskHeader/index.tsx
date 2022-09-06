import * as React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { LabelMedium } from 'baseui/typography';

export interface TaskHeaderProps {
  title: string;
  iconName: string;
}

function TaskHeader({ title, iconName }: TaskHeaderProps) {
  const [, $theme] = useStyletron();
  return (
    <div>
      <Block
        display="flex"
        alignContent="flex-start"
        justifyContent="space-between"
        marginLeft="scale500"
        marginRight="scale500"
        alignItems="center"
        $style={{ cursor: 'pointer' }}
        onClick={() => {}}
      >
        <LabelMedium
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          {title}
        </LabelMedium>
        <span className={iconName} aria-hidden="true" />
      </Block>
    </div>
  );
}

export default TaskHeader;
