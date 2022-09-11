import * as React from 'react';
import { useStyletron } from 'baseui';
import { LabelSmall } from 'baseui/typography';
import { Icon } from '../../../Core/Components/Icon';
import { Link } from 'react-router-dom';

export function ProjectSelectionButton() {
  const [css, $theme] = useStyletron();

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
        <LabelSmall color={$theme.colors.primaryB}>Select project</LabelSmall>
        <span className={css({ width: '3px' })} />
        <Icon
          icon="caret-down"
          className={css({ color: $theme.colors.primaryB })}
        />
      </div>
    </Link>
  );
}
