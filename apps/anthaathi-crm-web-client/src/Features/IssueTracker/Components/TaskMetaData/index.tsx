import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { LabelMedium } from 'baseui/typography';
import React from 'react';
import { AvatarStack } from '../../../Core/Components/AvatarStack';
import { Cell, Grid } from 'baseui/layout-grid';
import { graphql, useFragment } from 'react-relay';
import { TaskMetaData$key } from '../../../../__generated__/TaskMetaData.graphql';
import { RelativeTimeRenderer } from '../../../Core/Components/RelativeTimeRenderer';

export interface TaskMetaDataProps {
  $ref: TaskMetaData$key;
}

function TaskMetaData({ $ref }: TaskMetaDataProps) {
  const [, $theme] = useStyletron();

  const taskMetaData = useFragment(
    graphql`
      fragment TaskMetaData on Task {
        id

        assigned {
          ...AvatarStack
        }

        followers {
          ...AvatarStack
        }

        dueDate

        tag {
          edges {
            node {
              id
              title
              color
            }
          }
        }
      }
    `,
    $ref
  );

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

          <AvatarStack align="start" $ref={taskMetaData.assigned!} />
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
          <LabelMedium>
            <RelativeTimeRenderer time={taskMetaData.dueDate} to="from" />
          </LabelMedium>
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
          {taskMetaData.tag?.edges?.map((node, index) => {
            return (
              <Button
                kind={KIND.tertiary}
                size={SIZE.mini}
                key={node?.node?.id || index}
                overrides={{
                  BaseButton: {
                    style: () => ({
                      fontFamily: $theme.typography.headingFontFamily,
                      borderTopLeftRadius: '2px',
                      borderTopRightRadius: '2px',
                      borderBottomLeftRadius: '2px',
                      borderBottomRightRadius: '2px',
                      ':hover': {},
                    }),
                  },
                }}
              >
                {node?.node?.title}
              </Button>
            );
          })}
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
          <AvatarStack align="start" $ref={taskMetaData.followers!} />
        </Cell>
      </Grid>
    </Block>
  );
}

export default TaskMetaData;
