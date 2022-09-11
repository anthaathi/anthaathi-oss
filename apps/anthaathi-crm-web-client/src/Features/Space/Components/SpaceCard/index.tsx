import { useStyletron } from 'baseui';
import { LabelMedium, LabelXSmall } from 'baseui/typography';
import { AvatarStack } from '../../../Core/Components/AvatarStack';
import { Link, useSearchParams } from 'react-router-dom';
import { ProgressBar } from 'baseui/progress-bar';
import React, { useState } from 'react';
import { graphql, useFragment } from 'react-relay';
import { SpaceCardFragment$key } from '../../../../__generated__/SpaceCardFragment.graphql';
import { RelativeTimeRenderer } from '../../../Core/Components/RelativeTimeRenderer';

export function SpaceCard({
  isSelected,
  url,
  noExpand = false,
  dragHandler,
  $ref,
}: {
  isSelected?: boolean;
  noExpand?: boolean;
  url: string;
  dragHandler?: React.ReactNode;
  $ref: SpaceCardFragment$key;
}) {
  const [css, $theme] = useStyletron();
  const [params] = useSearchParams();
  const [hover, setHover] = useState(false);

  const spaceInfo = useFragment(
    graphql`
      fragment SpaceCardFragment on Task {
        id
        title
        description
        dueDate
        assigned {
          ...AvatarStack
        }
      }
    `,
    $ref
  );

  const expanded = (hover || isSelected) && !noExpand;

  if (!spaceInfo) {
    return null;
  }

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
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          })}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <div>
            <LabelMedium
              $style={{
                fontWeight: 500,
                fontFamily: $theme.typography.headingFontFamily,
                marginBottom: '6px',
              }}
            >
              {spaceInfo.title}
            </LabelMedium>

            <div
              className={css({
                borderBottomColor: $theme.borders.border100.borderColor,
                borderBottomWidth: $theme.borders.border100.borderWidth,
                borderBottomStyle: $theme.borders.border100
                  .borderStyle as never,
                marginBottom: $theme.sizing.scale500,
                marginTop: $theme.sizing.scale500,
              })}
            />

            <LabelMedium
              $style={{
                maxHeight: expanded ? '210px' : '40px',
                lineClamp: '3',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                transitionDuration: expanded ? '800ms' : '200ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease',
              }}
            >
              {spaceInfo.description}
            </LabelMedium>
          </div>

          <LabelXSmall
            $style={{
              fontWeight: 500,
              marginTop: $theme.sizing.scale200,
            }}
          >
            <span
              className={css({
                backgroundColor: $theme.colors.yellowLight,
                padding: '0 6px',
                borderRadius: '12px',
              })}
            >
              <RelativeTimeRenderer time={spaceInfo.dueDate} to="from" />
            </span>
          </LabelXSmall>

          <span className={css({ flexGrow: 1 })} />
        </div>

        <div>
          <ProgressBar
            value={50}
            overrides={{
              BarContainer: {
                style: {
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                },
              },
              Bar: {
                style: {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              },
            }}
          />
        </div>

        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            paddingTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
            paddingLeft: $theme.sizing.scale300,
            paddingRight: $theme.sizing.scale300,
          })}
        >
          {dragHandler}
          <span className={css({ flexGrow: 1 })} />
          <AvatarStack $ref={spaceInfo.assigned!} />
        </div>
      </div>
    </Link>
  );
}
