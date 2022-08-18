import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from './Features/Core/Components/Header';
import { SpacesPageNoItemSelected } from './Pages/SpacesPageNoItemSelected';
import { IssueViewPage } from './Pages/IssueViewPage';
import { NotificationContainer } from './Features/Core/Notification/Components/Notification';
import { FlexFill } from './Features/Core/Components/FlexFill';
import { UserMenuHeader } from './Features/Authentication/Components/UserMenuHeader';

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
          <FlexFill />
          <NotificationContainer />
          <UserMenuHeader />
        </HeaderWrapper>
      </Header>
      <DefaultLayout>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="task/:id" element={<TaskPage />} />
            <Route path="customer" element={<CustomerPage />}></Route>
            <Route path="spaces">
              <Route index element={<Link to="123">Hello world</Link>}></Route>
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
