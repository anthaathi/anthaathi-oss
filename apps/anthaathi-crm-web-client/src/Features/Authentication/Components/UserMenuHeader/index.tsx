import { PLACEMENT, StatefulPopover } from 'baseui/popover';
import { Block } from 'baseui/block';
import { Button, SIZE } from 'baseui/button';
import { Icon } from '../../../Core/Components/Icon';
import { useStyletron } from 'baseui';
import { StatefulMenu } from 'baseui/menu';

export function UserMenuHeader() {
  const [, $theme] = useStyletron();

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
      <Button size={SIZE.compact}>
        <Icon icon="user" />
      </Button>
    </StatefulPopover>
  );
}
