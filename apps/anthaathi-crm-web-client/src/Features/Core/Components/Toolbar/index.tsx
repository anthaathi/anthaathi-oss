import React from 'react';
import { ToolbarWrapper } from './styled';

export interface ToolbarProps {
  children: React.ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return <ToolbarWrapper>{children}</ToolbarWrapper>;
}
