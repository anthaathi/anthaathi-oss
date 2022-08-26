import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND } from 'baseui/button';
import { HeadingLarge, LabelMedium, ParagraphSmall } from 'baseui/typography';
import React from 'react';
import { Icon } from '../../../Core/Components/Icon';
import { PLACEMENT, StatefulPopover } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';

export interface SpaceTaskHeaderProps {
  title: string;
  subtitle: React.ReactNode;
  onCheckClick?: () => void;
  onClickMore?: () => void;
}

function SpaceTaskHeader({
  title,
  subtitle,
  onCheckClick,
  onClickMore,
}: SpaceTaskHeaderProps) {
  const [css, $theme] = useStyletron();
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
        <StatefulPopover
          content={
            <StatefulMenu
              overrides={{
                ListItem: {
                  style: {
                    display: 'flex',
                    placeContent: 'center',
                    alignItems: 'center',
                  },
                },
              }}
              items={[
                {
                  label: (
                    <>
                      <Icon icon="times-circle-o" />
                      <span className={css({ width: '6px' })} />
                      CLOSE TASK
                    </>
                  ),
                },
              ]}
            />
          }
          accessibilityType={'tooltip'}
          placement={PLACEMENT.bottomRight}
        >
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
        </StatefulPopover>
      </Block>
    </Block>
  );
}

export default SpaceTaskHeader;
