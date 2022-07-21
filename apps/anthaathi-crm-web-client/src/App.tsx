import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from './Features/Core/Components/Header';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const TaskPage = React.lazy(() => import('./Pages/TaskPage'));

function App() {
  return (
    <DefaultLayout
      header={
        <Header>
          <HeaderWrapper>
            <HeaderToggle />
          </HeaderWrapper>
        </Header>
      }
    >
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="task/:id" element={<TaskPage />}></Route>
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;
