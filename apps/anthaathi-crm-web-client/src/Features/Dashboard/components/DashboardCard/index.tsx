import { useStyletron } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { LabelLarge, LabelMedium } from 'baseui/typography';
import React from 'react';

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
    <div>
      <Block
        width="248px"
        height="190px"
        $style={{
          borderRadius: '3px',
          border: '1px solid #00000012',
          boxShadow: '0px 0px 3px #0000000F',
          opacity: 1,
        }}
      >
        <Block
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="248px"
          height="112px"
          $style={{
            backgroundColor: backgroundColor,
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
        <Block alignItems="center" justifyContent="center">
          <div>
            <LabelLarge
              $style={{
                marginTop: '12px',
                textAlign: 'center',
                fontFamily: $theme.typography.headingFontFamily,
              }}
            >
              {title}
            </LabelLarge>
            <LabelMedium $style={{ textAlign: 'center', color: '#666666' }}>
              {subTitle}
            </LabelMedium>
          </div>
        </Block>
      </Block>
    </div>
  );
}

export default DashboardCard;
