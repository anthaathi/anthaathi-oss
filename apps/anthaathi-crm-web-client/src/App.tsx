import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import { Header, HeaderToggle } from './Features/Core/Components/Header';
import React from 'react';
import { KanbanBoard } from './Features/KanbanBoard/Components/Kanban';
import { Block } from 'baseui/block';

function App() {
  return (
    <DefaultLayout
      header={
        <Header>
          <HeaderToggle />
        </Header>
      }
    >
      <Block $style={{ overflow: 'auto', minHeight: 'calc(100vh - 96px)' }}>
        <KanbanBoard />
      </Block>
    </DefaultLayout>
  );
}

export default App;
