import * as React from 'react';
import { useParams } from 'react-router';
import { IssueContainer } from '../Containers/IssueContainer';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { IssueViewPageQuery } from '../__generated__/IssueViewPageQuery.graphql';
import { idGenerator } from '../Utils/relay/id-generator';

const AppIssueViewPageQuery = graphql`
  query IssueViewPageQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Task {
        ...IssueContainerFragment
      }
    }
  }
`;

export function IssueViewPage() {
  const { issue } = useParams<{ issue: string; space: string }>();

  const data = useLazyLoadQuery<IssueViewPageQuery>(AppIssueViewPageQuery, {
    id: idGenerator('Task', issue!),
  });

  if (!data.node) {
    return <></>;
  }

  return <IssueContainer $ref={data.node} />;
}
