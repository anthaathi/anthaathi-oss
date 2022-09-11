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
import { NotificationContainer } from './Features/Core/Notification/Components/Notification';
import { FlexFill } from './Features/Core/Components/FlexFill';
import { UserMenuHeader } from './Features/Authentication/Components/UserMenuHeader';
import { CreateTaskPage } from './Pages/CreateTaskPage';
import { ProjectSelectionPage } from './Pages/ProjectSelectionPage';
import { ProjectViewPage } from './Pages/ProjectViewPage';
import { Outlet } from 'react-router';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const CustomerPage = React.lazy(() => import('./Pages/CustomerPage'));
const SpacePage = React.lazy(() => import('./Pages/SpacesPage'));

function App() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route
            element={
              <>
                <Header>
                  <HeaderWrapper>
                    <HeaderToggle />
                    <FlexFill />
                    <NotificationContainer />
                    <UserMenuHeader />
                  </HeaderWrapper>
                </Header>
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<></>}>
                  <ProjectSelectionPage />
                </Suspense>
              }
            />
            <Route
              path="project/:project"
              element={
                <Suspense fallback={<></>}>
                  <ProjectViewPage />
                </Suspense>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="customer" element={<CustomerPage />} />
              <Route path="spaces">
                <Route path=":space">
                  <Route path="create" element={<CreateTaskPage />} />
                  <Route element={<SpacePage />}>
                    <Route index element={<SpacesPageNoItemSelected />} />
                    <Route
                      path=":issue"
                      element={
                        <Suspense fallback={<></>}>
                          <IssueViewPage />
                        </Suspense>
                      }
                    />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
