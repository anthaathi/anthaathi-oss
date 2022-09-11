import React from 'react';
import { useStyletron } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { LabelLarge, LabelMedium } from 'baseui/typography';
import { expandBorderStyles } from 'baseui/styles';

export interface DashboardCardProps {
  title: string;
  subTitle: string;
  numberOfTask: React.ReactNode;
  badgeColor: string;
  backgroundColor: string;
  onClick?: () => void;
}

function DashboardCard({
  title,
  subTitle,
  numberOfTask,
  badgeColor,
  backgroundColor,
  onClick,
}: DashboardCardProps) {
  const [css, $theme] = useStyletron();

  return (
    <Block
      onClick={() => onClick?.()}
      width="100%"
      $style={{
        textDecoration: 'none',
        marginTop: '10px',
        marginBottom: '10px',
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
        <div
          className={css({
            backgroundColor: badgeColor,
            width: $theme.sizing.scale1200,
            height: $theme.sizing.scale1200,
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            borderRadius: '50%',
            color: 'white',
            ...$theme.typography.LabelMedium,
            fontWeight: 600,
          })}
        >
          {numberOfTask}
        </div>
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
