import React from 'react';
import { ToolbarSection, ToolbarWrapper } from './styled';

export interface ToolbarProps {
  children: React.ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return (
    <ToolbarWrapper>
      <ToolbarSection>{children}</ToolbarSection>
    </ToolbarWrapper>
  );
}
