import * as React from 'react';
import { Block } from 'baseui/block';

export interface BottomSaveBarProps {
  children: React.ReactNode;
}

export function BottomSaveBar({ children }: BottomSaveBarProps) {
  return (
    <Block height="64px" position="fixed" bottom="0">
      {children}
    </Block>
  );
}

export default BottomSaveBar;
