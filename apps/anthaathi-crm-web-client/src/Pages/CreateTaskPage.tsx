import * as React from 'react';
import { TaskCreateContainer } from '../Containers/TaskCreateContainer';
import { graphql, useLazyLoadQuery } from 'react-relay';

const CreateTaskQuery = graphql`
  query CreateTaskPageQuery {
    taskTemplates {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export function CreateTaskPage() {
  const templates = useLazyLoadQuery(CreateTaskQuery, {});

  return (
    <>
      <TaskCreateContainer />
    </>
  );
}
