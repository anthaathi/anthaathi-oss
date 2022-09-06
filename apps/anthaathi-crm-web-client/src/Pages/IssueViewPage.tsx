import * as React from 'react';
import { useParams } from 'react-router';
import { IssueContainer } from '../Containers/IssueContainer';

export function IssueViewPage() {
  const { issue } = useParams<{ issue: string; space: string }>();

  return (
    <>
      <IssueContainer />
      {issue}
    </>
  );
}
