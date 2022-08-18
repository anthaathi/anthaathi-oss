import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useStyletron } from 'baseui';
import { IssueContainer } from '../Containers/IssueContainer';

export function IssueViewPage() {
  const { issue, space } = useParams<{ issue: string; space: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [issue]);

  const [css] = useStyletron();

  return (
    <div className={css({ padding: '1rem' })}>
      <IssueContainer />
      {issue}
    </div>
  );
}
