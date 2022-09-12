import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProjectSelectionPageQuery } from '../__generated__/ProjectSelectionPageQuery.graphql';
import { ProjectSelection } from '../Features/Project/Component/ProjectSelection';
import { HeadingSmall } from 'baseui/typography';
import { AppWrapper } from '../Features/Core/Components/AppWrapper';
import { useStyletron } from 'baseui';
import { Button, SIZE } from 'baseui/button';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { headerOpenAtom } from '../Features/Core/Components/Header/atom';
import { useEffect } from 'react';

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
  const [css] = useStyletron();

  const [headerOpen, setHeaderOpen] = useRecoilState(headerOpenAtom);

  useEffect(() => {
    const previousValue = headerOpen;
    setHeaderOpen(false);

    return () => {
      setHeaderOpen(previousValue);
    };
  }, []);

  return (
    <AppWrapper $isDense={true}>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <HeadingSmall marginBottom="scale400" marginTop="scale400">
          Select project
        </HeadingSmall>

        <span className={css({ flexGrow: 1 })} />

        <Button $as={Link} to="/create" size={SIZE.compact}>
          Create Project
        </Button>
      </div>
      <ProjectSelection $ref={result} />
    </AppWrapper>
  );
}
