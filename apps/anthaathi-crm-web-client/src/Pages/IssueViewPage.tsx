import { useParams } from 'react-router';
import { useStyletron } from 'baseui';
import { IssueContainer } from '../Containers/IssueContainer';

export function IssueViewPage() {
  const { issue, space } = useParams<{ issue: string; space: string }>();

  const [css] = useStyletron();

  return (
    <>
      <IssueContainer />
      {issue}
    </>
  );
}
