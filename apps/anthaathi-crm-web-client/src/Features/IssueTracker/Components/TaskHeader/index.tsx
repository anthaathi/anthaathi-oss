import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND } from 'baseui/button';
import { HeadingLarge, LabelMedium } from 'baseui/typography';
import React from 'react';
import { Icon } from '../../../Core/Components/Icon';

export interface SpaceTaskHeaderProps {
  title: string;
  subtitle: string;
  onCheckClick?: () => void;
  onClickMore?: () => void;
}

function SpaceTaskHeader({
  title,
  subtitle,
  onCheckClick,
  onClickMore,
}: SpaceTaskHeaderProps) {
  const [, $theme] = useStyletron();
  return (
    <Block display="flex" justifyContent="space-between" alignItems="center">
      <Block>
        <HeadingLarge
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          {title}
        </HeadingLarge>
        <LabelMedium>{subtitle}</LabelMedium>
      </Block>
      <Block>
        <Button
          onClick={onCheckClick}
          kind={KIND.tertiary}
          overrides={{
            BaseButton: {
              style: () => ({
                backgroundColor: '#EAEAEA',
              }),
            },
          }}
        >
          <Icon icon="check" />
        </Button>
        {/* TODO: MAKE DROPDOWN MENU */}
        <Button
          onClick={onClickMore}
          kind={KIND.tertiary}
          overrides={{
            BaseButton: {
              style: () => ({
                backgroundColor: '#EAEAEA',
                marginLeft: '10px',
              }),
            },
          }}
        >
          <Icon icon="ellipsis-h"></Icon>
        </Button>
      </Block>
    </Block>
  );
}

export default SpaceTaskHeader;
