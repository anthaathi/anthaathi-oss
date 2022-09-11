import * as React from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { ProjectSelection_projects$key } from '../../../../__generated__/ProjectSelection_projects.graphql';
import { Button } from 'baseui/button';
import { AppWrapper } from '../../../Core/Components/AppWrapper';
import { useStyletron } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';
import { LabelMedium, LabelSmall, LabelXSmall } from 'baseui/typography';
import { Link } from 'react-router-dom';

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

  const [css, $theme] = useStyletron();

  return (
    <AppWrapper $isDense={true}>
      <ul className={css({ marginLeft: 0, marginRight: 0, listStyle: 'none' })}>
        {data.projects?.edges?.map((res, index) => (
          <li
            key={res?.node?.id || index}
            className={css({
              paddingTop: $theme.sizing.scale600,
              paddingBottom: $theme.sizing.scale600,
              paddingLeft: $theme.sizing.scale700,
              paddingRight: $theme.sizing.scale700,
              cursor: 'pointer',
              marginBottom: $theme.sizing.scale400,
              borderRadius: '10px',
              transition: 'all ease .1s',
              ':hover': {
                backgroundColor: $theme.colors.backgroundLightAccent,
              },
              userSelect: 'none',
              ...expandBorderStyles($theme.borders.border200),
            })}
          >
            <Link
              to={`/${res?.node?.handle}`}
              className={css({ textDecoration: 'none' })}
            >
              <div className={css({ marginBottom: $theme.sizing.scale200 })}>
                <LabelMedium $style={{ fontWeight: 600 }}>
                  {res?.node?.name}
                </LabelMedium>
              </div>
              <div>
                <LabelSmall>{res?.node?.description}</LabelSmall>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {hasNext && (
        <Button isLoading={isLoadingNext} onClick={() => loadNext(10)}>
          Load more
        </Button>
      )}
    </AppWrapper>
  );
}
