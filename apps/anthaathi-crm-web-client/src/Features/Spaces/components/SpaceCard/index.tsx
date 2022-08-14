import React from 'react';
import { Card, StyledBody } from 'baseui/card';
import { LabelMedium, LabelXSmall } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';
import { Button, KIND, SIZE } from 'baseui/button';

export interface SpaceCardProps {
  backgroundColor: string;
  title: string;
  iconBackgroundColor: string;
  iconColor: string;
  badgeTitle: string;
  badgeTitleColor: string;
  badgeBackgroundColor: string;
  userDetails: { username: string; userImage?: string };
}

function SpaceCard({
  backgroundColor,
  title,
  iconBackgroundColor,
  iconColor,
  badgeTitle,
  badgeBackgroundColor,
  badgeTitleColor,
  userDetails,
}: SpaceCardProps) {
  const [, $theme] = useStyletron();
  return (
    <Card
      overrides={{
        Root: {
          style: () => ({
            width: '430px',
            height: '122px',
            borderTopLeftRadius: '2px',
            borderTopRightRadius: '2px',
            borderBottomLeftRadius: '2px',
            borderBottomRightRadius: '2px',
            backgroundColor: backgroundColor,
          }),
        },
      }}
    >
      <StyledBody>
        <Block display="flex" alignItems="center" justifyContent="center">
          <Block
            $style={{
              backgroundColor: iconBackgroundColor,
              width: '30px',
              height: '30px',
              borderRadius: '4px',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              className="fa fa-check"
              aria-hidden="true"
              style={{ color: iconColor }}
            />
          </Block>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginLeft: '10px',
            }}
          >
            {title}
          </LabelMedium>
        </Block>
        <Block
          display="flex"
          alignItems="center"
          marginTop="20px"
          marginLeft="40px"
        >
          <Avatar
            name={userDetails.username}
            size="scale800"
            src={userDetails.userImage}
          />
          <Button
            onClick={() => alert('click')}
            kind={KIND.tertiary}
            size={SIZE.mini}
            overrides={{
              BaseButton: {
                style: () => ({
                  marginLeft: '10px',
                  backgroundColor: badgeBackgroundColor,
                  color: badgeTitleColor,
                  fontFamily: $theme.typography.headingFontFamily,
                  borderTopLeftRadius: '2px',
                  borderTopRightRadius: '2px',
                  borderBottomLeftRadius: '2px',
                  borderBottomRightRadius: '2px',
                  ':hover': {
                    backgroundColor: badgeBackgroundColor,
                  },
                }),
              },
            }}
          >
            {badgeTitle}
          </Button>
        </Block>
      </StyledBody>
    </Card>
  );
}

export default SpaceCard;