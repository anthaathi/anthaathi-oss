import { Tag } from 'baseui/tag';
import { useStyletron } from 'baseui';
import { PhotoGrid } from '../PhotoGrid';
import { FileList } from '../FileList';
import { useMemo, useState } from 'react';

export function FilesSidebar() {
  const [css] = useStyletron();

  const tagOverride = { Root: { style: { cursor: 'pointer' } } };

  const selectedItem = useMemo<Record<string, React.ReactElement>>(
    () => ({
      photo: <PhotoGrid />,
      file: <FileList />,
    }),
    []
  );

  const [selected, setSelected] = useState('file');

  return (
    <div className={css({ margin: '-12px', width: 'calc(100% + 24px)' })}>
      <div className={css({ paddingTop: '6px', paddingBottom: '6px' })}>
        <Tag
          overrides={tagOverride}
          closeable={false}
          onClick={() => setSelected('file')}
        >
          Documents
        </Tag>
        <Tag
          overrides={tagOverride}
          closeable={false}
          onClick={() => setSelected('photo')}
        >
          Photos
        </Tag>
        <Tag
          overrides={tagOverride}
          closeable={false}
          onClick={() => setSelected('link')}
        >
          Links
        </Tag>
        <Tag
          overrides={tagOverride}
          closeable={false}
          onClick={() => setSelected('other')}
        >
          Others
        </Tag>
      </div>
      <div
        className={css({
          padding: '6px',
          marginTop: '-8px',
          marginBottom: '12px',
        })}
      >
        {selectedItem[selected]}
      </div>
    </div>
  );
}
