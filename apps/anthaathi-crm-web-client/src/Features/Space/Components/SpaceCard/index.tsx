import { useStyletron } from 'baseui';
import { LabelMedium } from 'baseui/typography';
import { AvatarStack } from '../../../Core/Components/AvatarStack';
import { Link, useSearchParams } from 'react-router-dom';

export function SpaceCard({
  isSelected,
  url,
}: {
  isSelected?: boolean;
  url: string;
}) {
  const [css, $theme] = useStyletron();
  const [params] = useSearchParams();

  return (
    <Link
      to={{
        pathname: url,
        search: params.toString(),
      }}
      className={css({ textDecoration: 'none', display: 'block' })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          boxShadow: $theme.lighting.shadow400,
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: isSelected
            ? $theme.colors.backgroundLightAccent
            : $theme.colors.backgroundPrimary,
          ':hover': {
            backgroundColor: isSelected
              ? $theme.colors.backgroundLightAccent
              : $theme.colors.backgroundSecondary,
          },
          transitionDuration: '50ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'ease',
        })}
      >
        <div
          className={css({
            paddingLeft: $theme.sizing.scale600,
            paddingRight: $theme.sizing.scale600,
            paddingTop: $theme.sizing.scale600,
            paddingBottom: $theme.sizing.scale600,
          })}
        >
          <LabelMedium>I wanna know have you ever seen</LabelMedium>
        </div>

        <div
          className={css({
            display: 'flex',
            marginTop: $theme.sizing.scale600,
            alignItems: 'center',
            paddingTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
            paddingLeft: $theme.sizing.scale300,
            paddingRight: $theme.sizing.scale300,
            borderTopStyle: $theme.borders.border200.borderStyle as never,
            borderTopWidth: $theme.borders.border200.borderWidth,
            borderTopColor: $theme.borders.border200.borderColor,
          })}
        >
          <span className={css({ flexGrow: 1 })} />
          <AvatarStack
            items={[
              { title: 'Omkar Yadav', key: '123' },
              { title: 'Omkar Yadav', key: '1231' },
              { title: 'Omkar Yadav', key: '12312' },
            ]}
          />
        </div>
      </div>
    </Link>
  );
}
