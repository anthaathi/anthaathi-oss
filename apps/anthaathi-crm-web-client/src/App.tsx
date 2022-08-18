import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from './Features/Core/Components/Header';
import { SpacesPageNoItemSelected } from './Pages/SpacesPageNoItemSelected';
import { IssueViewPage } from './Pages/IssueViewPage';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const TaskPage = React.lazy(() => import('./Pages/TaskPage'));
const CustomerPage = React.lazy(() => import('./Pages/CustomerPage'));
const SpacePage = React.lazy(() => import('./Pages/SpacesPage'));

function App() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderToggle />
        </HeaderWrapper>
      </Header>
      <DefaultLayout>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="task/:id" element={<TaskPage />} />
            <Route path="customer" element={<CustomerPage />}></Route>
            <Route path="spaces">
              <Route path=":space" element={<SpacePage />}>
                <Route index element={<SpacesPageNoItemSelected />}></Route>
                <Route path=":issue" element={<IssueViewPage />}></Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
}

export default App;
