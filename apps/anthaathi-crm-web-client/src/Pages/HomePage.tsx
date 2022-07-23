import { KanbanBoard } from '../Features/KanbanBoard/Components/Kanban';
import { Block } from 'baseui/block';
import React from 'react';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from '../Features/Core/Components/Header';

export default function HomePage() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderToggle />
        </HeaderWrapper>
      </Header>
      <Block $style={{ overflow: 'auto', minHeight: 'calc(100vh - 96px)' }}>
        <KanbanBoard />
      </Block>
    </>
  );
}
