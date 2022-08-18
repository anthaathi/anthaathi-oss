import React from 'react';
import { useStyletron } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { LabelLarge, LabelMedium } from 'baseui/typography';
import { expandBorderStyles } from 'baseui/styles';

export interface DashboardCardProps {
  title: string;
  subTitle: string;
  numberOfTask: number;
  badgeColor: string;
  backgroundColor: string;
}

function DashboardCard({
  title,
  subTitle,
  numberOfTask,
  badgeColor,
  backgroundColor,
}: DashboardCardProps) {
  const [, $theme] = useStyletron();

  return (
    <Block
      width="100%"
      $style={{
        transitionProperty: 'all',
        transitionDuration: $theme.animation.timing100,
        transitionTimingFunction: 'ease-out',
        ...expandBorderStyles($theme.borders.border200),
        borderRadius: '4px',
        boxShadow: '0px 0px 3px #0000000F',
        opacity: 1,
        cursor: 'pointer',
        position: 'relative',
        ':hover': {
          boxShadow: $theme.lighting.shadow500,
        },
      }}
    >
      <Block
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="112px"
        $style={{
          backgroundColor: backgroundColor,
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        }}
      >
        <Avatar
          name={numberOfTask.toString().split('').join(' ')}
          size={'scale1200'}
          overrides={{
            Root: {
              style: () => ({
                backgroundColor: badgeColor,
              }),
            },
            Initials: {
              style: () => ({
                fontSize: '20px',
              }),
            },
          }}
        />
      </Block>

      <Block
        alignItems="center"
        justifyContent="center"
        paddingBottom="scale100"
      >
        <LabelLarge
          $style={{
            marginTop: '12px',
            textAlign: 'center',
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          {title}
        </LabelLarge>
        <LabelMedium
          $style={{ textAlign: 'center', color: '#666666' }}
          marginBottom="scale600"
        >
          {subTitle}
        </LabelMedium>
      </Block>
    </Block>
  );
}

export default DashboardCard;
