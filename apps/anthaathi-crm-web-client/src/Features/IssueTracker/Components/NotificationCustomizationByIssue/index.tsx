import * as React from 'react';
import { LabelMedium, LabelSmall } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { FlexFill } from '../../../Core/Components/FlexFill';

export function NotificationCustomizationByIssue() {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <Block
        display="flex"
        alignContent="center"
        placeContent="center"
        marginBottom="scale200"
        alignItems="center"
      >
        <LabelMedium
          $style={{ fontFamily: $theme.typography.headingFontFamily }}
        >
          Notification
        </LabelMedium>

        <FlexFill />

        <Button size={SIZE.mini} kind={KIND.tertiary}>
          Customize
        </Button>
      </Block>

      <Button
        className={css({ width: '100%' })}
        size={SIZE.compact}
        kind={KIND.secondary}
      >
        Unsubscribe
      </Button>

      <LabelSmall marginTop="scale400" marginBottom="scale400">
        You’re receiving notifications because you were assigned.
      </LabelSmall>
    </div>
  );
}
