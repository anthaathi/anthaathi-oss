import { KIND, Tag } from 'baseui/tag';

export function LabelRenderer() {
  return (
    <>
      <Tag kind={KIND.blue}>default</Tag>
      <Tag>long text inside the tag</Tag>
    </>
  );
}
