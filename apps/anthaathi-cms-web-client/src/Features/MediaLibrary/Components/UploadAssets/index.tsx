import { CloudUpload, FolderAdd, FetchUploadCloud } from '@carbon/icons-react';
import * as React from 'react';
import { Button } from 'baseui/button';
import { useStyletron, styled } from 'baseui';
import { useIntl } from 'react-intl';
import { PLACEMENT, StatefulPopover } from 'baseui/popover';
import { Block } from 'baseui/block';
import { StatefulMenu } from 'baseui/menu';
import { useCallback } from 'react';

const MenuSpacer = styled('div', {
  width: '6px',
});

function Menu() {
  const intl = useIntl();

  const onItemSelect = useCallback(({ item }: { item: { id: string } }) => {
    console.log(item);
  }, []);

  return (
    <Block backgroundColor="primaryB">
      <StatefulMenu
        overrides={{
          ListItem: { style: { display: 'flex', alignItems: 'center' } },
        }}
        onItemSelect={({ item }) => {
          onItemSelect({ item });
        }}
        items={[
          {
            id: 'new-folder',
            label: (
              <>
                <FolderAdd />
                <MenuSpacer />
                {intl.formatMessage({
                  defaultMessage: 'Folder',
                  id: 'ukQpDs',
                })}
              </>
            ),
          },
          {
            id: 'file-upload',
            label: (
              <>
                <FetchUploadCloud />
                <MenuSpacer />
                {intl.formatMessage({
                  defaultMessage: 'File upload',
                  id: 'hEl6BL',
                })}
              </>
            ),
          },
          {
            id: 'folder-upload',
            label: (
              <>
                <CloudUpload />
                <MenuSpacer />
                {intl.formatMessage({
                  defaultMessage: 'Folder upload',
                  id: 'Wi96Vv',
                })}
              </>
            ),
          },
        ]}
      />
    </Block>
  );
}

export default function UploadAssets() {
  const [css] = useStyletron();
  const intl = useIntl();

  return (
    <StatefulPopover
      placement={PLACEMENT.leftBottom}
      content={<Menu />}
      returnFocus
      autoFocus
    >
      <Button>
        <CloudUpload />

        <span className={css({ width: '8px' })} />

        {intl.formatMessage({
          defaultMessage: 'New',
          id: 'bW7B87',
        })}
      </Button>
    </StatefulPopover>
  );
}
