import * as React from 'react';
import { PLACEMENT, StatefulPopover } from 'baseui/popover';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { Icon } from '../../../Core/Components/Icon';
import { useStyletron } from 'baseui';
import { StatefulMenu } from 'baseui/menu';

export function UserMenuHeader() {
  const [css, $theme] = useStyletron();

  return (
    <StatefulPopover
      content={() => (
        <Block
          backgroundColor={$theme.colors.backgroundPrimary}
          minWidth="280px"
        >
          <StatefulMenu
            items={[{ label: 'My Account' }, { label: 'Logout' }]}
          />
        </Block>
      )}
      returnFocus
      autoFocus
      placement={PLACEMENT.bottom}
    >
      <Button
        kind={KIND.primary}
        size={SIZE.compact}
        className={css({
          ':hover': { backgroundColor: $theme.colors.primaryHeaderB },
        })}
      >
        <Icon icon="user" />
      </Button>
    </StatefulPopover>
  );
}
