import * as React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';
import { Block } from 'baseui/block';

export function FileList() {
  const [css] = useStyletron();

  return (
    <ul
      className={css({
        paddingLeft: 0,
        paddingRight: 0,
      })}
    >
      <FileItemRenderer />
      <FileItemRenderer />
      <FileItemRenderer />
      <FileItemRenderer />
    </ul>
  );
}

export function FileItemRenderer() {
  const [css, $theme] = useStyletron();

  return (
    <ListItem
      overrides={{ Root: { style: { margin: '0 -10px', cursor: 'pointer' } } }}
    >
      <ListItemLabel description="Lorem ipsum dolor sit amet, consectetur.">
        <Block
          display="flex"
          marginBottom="scale100"
          alignItems="center"
          $style={{ fontFamily: $theme.typography.headingFontFamily }}
        >
          <Icon icon="file-word-o" />
          <span className={css({ width: '6px', display: 'block' })} />
          <span>docuemnt.docs</span>
        </Block>
      </ListItemLabel>
    </ListItem>
  );
}
