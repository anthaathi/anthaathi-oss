import type { StyleObject } from 'styletron-react';

export const VisuallyHiddenStyle: StyleObject = {
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  width: '2px',
  height: '2px',
  margin: '-2px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
};
