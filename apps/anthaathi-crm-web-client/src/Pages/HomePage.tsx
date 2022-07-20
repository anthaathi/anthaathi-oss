import { KanbanBoard } from '../Features/KanbanBoard/Components/Kanban';
import { Block } from 'baseui/block';
import React from 'react';

export function HomePage() {
  return (
    <Block $style={{ overflow: 'auto', minHeight: 'calc(100vh - 96px)' }}>
      <KanbanBoard />
    </Block>
  );
}
