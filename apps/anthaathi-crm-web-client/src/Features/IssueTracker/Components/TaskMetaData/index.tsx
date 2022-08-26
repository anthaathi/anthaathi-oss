import { useStyletron } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { LabelMedium } from 'baseui/typography';
import React from 'react';
import { AvatarStack } from '../../../Core/Components/AvatarStack';
import { Cell, Grid } from 'baseui/layout-grid';

export interface TaskMetaDataProps {
  userDetails: {
    username: string;
    userImage?: string;
  };
  dateOfTask: string;
  badgeTitle: string;
  badgeTitleColor: string;
  badgeBackgroundColor: string;
}

function TaskMetaData({
  userDetails,
  dateOfTask,
  badgeTitle,
  badgeBackgroundColor,
  badgeTitleColor,
}: TaskMetaDataProps) {
  const [, $theme] = useStyletron();

  return (
    <Block marginTop="20px" maxWidth="775px" width="100%">
      <Grid gridMaxWidth={0} gridMargins={0}>
        <Cell span={3}>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginBottom: '5px',
            }}
          >
            Assign To
          </LabelMedium>

          <AvatarStack
            align="start"
            items={[
              {
                title: userDetails.username,
                key: 'user',
                img: userDetails.userImage,
              },
            ]}
          />
        </Cell>

        <Cell span={3}>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginBottom: '5px',
            }}
          >
            Due on
          </LabelMedium>
          <LabelMedium>{dateOfTask}</LabelMedium>
        </Cell>

        <Cell span={3}>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginBottom: '5px',
            }}
          >
            Tag
          </LabelMedium>
          <Button
            kind={KIND.tertiary}
            size={SIZE.mini}
            overrides={{
              BaseButton: {
                style: () => ({
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
        </Cell>

        <Cell span={3}>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginBottom: '5px',
            }}
          >
            Followers
          </LabelMedium>
          <AvatarStack
            align="start"
            items={[
              {
                key: 'Aditya',
                title: 'Aditya Chauhan',
              },
              {
                key: 'Aditya2',
                title: 'Aditya Chauhan',
              },
            ]}
          />
        </Cell>
      </Grid>
    </Block>
  );
}

const UserData = ({
  username,
  userImage,
}: {
  username: string;
  userImage?: string;
}) => {
  return (
    <Block display="flex" justifyContent="center" alignItems="center">
      <Avatar name={username} size="scale800" src={userImage} />
      <LabelMedium $style={{ marginLeft: '5px' }}>{username}</LabelMedium>
    </Block>
  );
};

export default TaskMetaData;
