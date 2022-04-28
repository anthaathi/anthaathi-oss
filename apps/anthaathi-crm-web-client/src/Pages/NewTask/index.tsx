import * as React from 'react';
import { AppContent } from '@anthaathi/web-lib';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { HeadingMedium } from 'baseui/typography';
import { useIntl } from 'react-intl';
import CreateTask from '../../Feature/Task/Form/CreateTask';

export default function NewTask() {
  const [, $theme] = useStyletron();
  const intl = useIntl();

  return (
    <AppContent $style={{ marginTop: '12px' }}>
      <Block
        $style={{
          padding: $theme.sizing.scale800,
        }}
      >
        <HeadingMedium marginTop="scale200" marginBottom="scale200">
          {intl.formatMessage({
            defaultMessage: 'Create new task',
            id: 'G7GwpG',
          })}
        </HeadingMedium>

        <CreateTask />
      </Block>
    </AppContent>
  );
}
