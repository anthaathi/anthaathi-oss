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
import { CreateTaskPage } from './Pages/CreateTaskPage';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { AppInfoQuery } from './__generated__/AppInfoQuery.graphql';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const CustomerPage = React.lazy(() => import('./Pages/CustomerPage'));
const SpacePage = React.lazy(() => import('./Pages/SpacesPage'));

const query = graphql`
  query AppInfoQuery {
    me @required(action: NONE) {
      id
      defaultOrganization @required(action: NONE) {
        id
        defaultProject @required(action: NONE) {
          ...DefaultLayoutFragment
        }
      }
    }
  }
`;

function App() {
  const data = useLazyLoadQuery<AppInfoQuery>(query, {});

  if (!data) {
    return <></>;
  }

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
      <DefaultLayout $ref={data.me.defaultOrganization.defaultProject}>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="customer" element={<CustomerPage />} />
            <Route path="spaces">
              <Route index element={<Link to="123">Hello world</Link>} />
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
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
}

export default App;
