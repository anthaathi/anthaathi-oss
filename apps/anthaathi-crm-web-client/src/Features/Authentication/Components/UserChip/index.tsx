import * as React from 'react';
import { useStyletron } from 'baseui';
import { graphql, useFragment } from 'react-relay';
import { UserChip$key } from '../../../../__generated__/UserChip.graphql';

export interface UserChipProps {
  $ref: UserChip$key;
}

export function UserChip({ $ref }: UserChipProps) {
  const [css, $theme] = useStyletron();

  const data = useFragment(
    graphql`
      fragment UserChip on User {
        id
        displayName
      }
    `,
    $ref
  );

  return (
    <span
      className={css({
        paddingLeft: $theme.sizing.scale200,
        paddingRight: $theme.sizing.scale200,
        paddingTop: $theme.sizing.scale100,
        paddingBottom: $theme.sizing.scale100,
        borderRadius: '10px',
        backgroundColor: $theme.colors.backgroundLightAccent,
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '14px',
        fontFamily: $theme.typography.headingFontFamily,
      })}
    >
      {data.displayName}
    </span>
  );
}
