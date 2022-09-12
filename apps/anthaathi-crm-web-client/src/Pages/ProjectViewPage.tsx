import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProjectViewPageQuery } from '../__generated__/ProjectViewPageQuery.graphql';
import { Outlet, useParams } from 'react-router';
import { DefaultLayoutContainer } from '../Features/Layouts/Components/DefaultLayoutContainer';

const ProjectViewQuery = graphql`
  query ProjectViewPageQuery($handle: String!) {
    projectByHandle(handle: $handle) {
      ...DefaultLayoutContainerFragment
    }
  }
`;

export function ProjectViewPage() {
  const { project } = useParams<{ project: string }>();

  const ref = useLazyLoadQuery<ProjectViewPageQuery>(ProjectViewQuery, {
    handle: project!,
  });

  return (
    <>
      <DefaultLayoutContainer $ref={ref.projectByHandle!} />
      <React.Suspense fallback={<></>}>
        <Outlet />
      </React.Suspense>
    </>
  );
}
