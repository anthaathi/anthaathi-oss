import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import { Header, HeaderToggle } from './Features/Core/Components/Header';
import React from 'react';

function App() {
  return (
    <DefaultLayout>
      <Header>
        <HeaderToggle />
      </Header>
      Hello world
    </DefaultLayout>
  );
}

export default App;
