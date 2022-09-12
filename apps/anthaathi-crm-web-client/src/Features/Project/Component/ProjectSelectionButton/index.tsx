import * as React from 'react';
import { useStyletron } from 'baseui';
import { LabelSmall } from 'baseui/typography';
import { Icon } from '../../../Core/Components/Icon';
import { Link } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProjectSelectionButtonQuery } from '../../../../__generated__/ProjectSelectionButtonQuery.graphql';
import { useParams } from 'react-router';

const AppProjectSelectionButtonQuery = graphql`
  query ProjectSelectionButtonQuery($handle: String!) {
    projectByHandle(handle: $handle) {
      name
      id
    }
  }
`;

export function ProjectSelectionButton() {
  const [css, $theme] = useStyletron();
  const { project } = useParams<{ project: string }>();

  if (!project) {
    return null;
  }

  return (
    <Link to="/" className={css({ textDecoration: 'none' })}>
      <div
        aria-roledescription="button"
        className={css({
          paddingLeft: $theme.sizing.scale400,
          paddingRight: $theme.sizing.scale400,
          paddingTop: $theme.sizing.scale300,
          paddingBottom: $theme.sizing.scale300,
          borderRadius: '10px',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'ease all .1s',
          ':hover': {
            backgroundColor: $theme.colors.borderTransparent as never,
          },
          ':active': {
            boxShadow: $theme.lighting.shadow400,
          },
          display: 'flex',
        })}
      >
        <React.Suspense fallback={<></>}>
          <LabelSmall color={$theme.colors.primaryB}>
            <ProjectSelectionQuery />
          </LabelSmall>
          <span className={css({ width: '3px' })} />
          <Icon
            icon="caret-down"
            className={css({ color: $theme.colors.primaryB })}
          />
        </React.Suspense>
      </div>
    </Link>
  );
}

function ProjectSelectionQuery() {
  const { project } = useParams<{ project: string }>();

  const projectSelection = useLazyLoadQuery<ProjectSelectionButtonQuery>(
    AppProjectSelectionButtonQuery,
    {
      handle: project!,
    }
  );

  return <>{projectSelection.projectByHandle?.name}</>;
}
