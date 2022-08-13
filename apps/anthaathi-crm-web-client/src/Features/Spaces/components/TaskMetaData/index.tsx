import { useStyletron } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { LabelMedium } from 'baseui/typography';
import React from 'react';

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
    <Block
      marginTop="20px"
      display="flex"
      width="775px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Block>
        <LabelMedium
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          Assign To
        </LabelMedium>
        <UserData
          username={userDetails.username}
          userImage={userDetails.userImage}
        />
      </Block>

      <Block>
        <LabelMedium
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          Due on
        </LabelMedium>
        <LabelMedium>{dateOfTask}</LabelMedium>
      </Block>

      <Block>
        <LabelMedium
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          Tag
        </LabelMedium>
        <Button
          // onClick={() => alert('click')}
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
      </Block>

      <Block>
        <LabelMedium
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
          }}
        >
          Followers
        </LabelMedium>
        <Avatar
          name={'J D'}
          size="scale800"
          overrides={{
            Root: {
              style: () => ({
                marginRight: '5px',
              }),
            },
          }}
        />
        <Avatar name={'U N'} size="scale800" />
      </Block>
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
