import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProjectSelectionPageQuery } from '../__generated__/ProjectSelectionPageQuery.graphql';
import { ProjectSelection } from '../Features/Project/Component/ProjectSelection';

const ProjectViewQuery = graphql`
  query ProjectSelectionPageQuery {
    ...ProjectSelection_projects
  }
`;

export function ProjectSelectionPage() {
  const result = useLazyLoadQuery<ProjectSelectionPageQuery>(
    ProjectViewQuery,
    {}
  );

  return <ProjectSelection $ref={result} />;
}
