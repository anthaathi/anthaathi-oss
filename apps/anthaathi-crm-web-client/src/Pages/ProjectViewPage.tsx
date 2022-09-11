import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { DefaultLayoutContain } from '../Features/Layouts/Components/DefaultLayout';
import { ProjectViewPageQuery } from '../__generated__/ProjectViewPageQuery.graphql';
import { idGenerator } from '../Utils/relay/id-generator';
import { useParams } from 'react-router';

const ProjectViewQuery = graphql`
  query ProjectViewPageQuery($id: ID!) {
    node(id: $id) {
      ... on Project {
        ...DefaultLayoutFragment
      }
    }
  }
`;

export function ProjectViewPage() {
  const { project } = useParams<{ project: string }>();

  const ref = useLazyLoadQuery<ProjectViewPageQuery>(ProjectViewQuery, {
    id: idGenerator('Project', project!),
  });

  return <DefaultLayoutContain $ref={ref.node!} />;
}
