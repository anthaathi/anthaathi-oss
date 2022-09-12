import * as React from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { ProjectSelection_projects$key } from '../../../../__generated__/ProjectSelection_projects.graphql';
import { Button, KIND, SIZE } from 'baseui/button';
import { AppWrapper } from '../../../Core/Components/AppWrapper';
import { useStyletron } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';
import { LabelMedium, LabelSmall } from 'baseui/typography';
import { Link } from 'react-router-dom';
import DashboardCard from '../../../Core/Components/DashboardCard';
import { StandardGrid } from '../../../Core/Components/Grid';
import { Icon } from '../../../Core/Components/Icon';

const query = graphql`
  fragment ProjectSelection_projects on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 5 }
  )
  @refetchable(queryName: "ProjectSelectionPaginationQuery") {
    projects(first: $count, after: $cursor)
      @connection(key: "ProjectSelection_query__projects") {
      edges {
        node {
          id
          name
          description
          handle
        }
      }
    }
  }
`;

export interface ProjectSelectionProps {
  $ref: ProjectSelection_projects$key;
}

export function ProjectSelection({ $ref }: ProjectSelectionProps) {
  const { loadNext, hasNext, isLoadingNext, data } = usePaginationFragment(
    query,
    $ref
  );

  const [css] = useStyletron();

  return (
    <>
      <StandardGrid>
        {data.projects?.edges?.map((res, index) => (
          <div key={res?.node?.id || index}>
            <Link
              to={`/project/${res?.node?.handle}/`}
              className={css({
                textDecoration: 'none',
              })}
            >
              <DashboardCard
                title={res?.node?.name || ''}
                subTitle={res?.node?.description || ''}
                numberOfTask={<Icon icon="home" />}
                badgeColor="#2B8FC5"
                backgroundColor="#309FDB"
              />
            </Link>
          </div>
        ))}
      </StandardGrid>
      {hasNext && (
        <Button
          isLoading={isLoadingNext}
          overrides={{
            Root: {
              style: {
                width: '100%',
              },
            },
          }}
          size={SIZE.compact}
          kind={KIND.secondary}
          onClick={() => loadNext(10)}
        >
          LOAD MORE
        </Button>
      )}
    </>
  );
}
