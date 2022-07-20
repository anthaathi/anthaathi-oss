import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import { Header, HeaderToggle } from './Features/Core/Components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <DefaultLayout
      header={
        <Header>
          <HeaderToggle />
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="task/:id" element={<>test</>}></Route>
      </Routes>
    </DefaultLayout>
  );
}

export default App;
