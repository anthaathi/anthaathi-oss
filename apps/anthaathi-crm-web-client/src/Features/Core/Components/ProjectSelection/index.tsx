import { styled, useStyletron } from 'baseui';
import { StatefulPanel } from 'baseui/accordion';
import { Button, KIND } from 'baseui/button';
import { LabelLarge, LabelSmall } from 'baseui/typography';

export function ProjectSelection() {
  const [css, $theme] = useStyletron();

  return (
    <ul
      className={css({
        marginLeft: 0,
        paddingLeft: 0,
        paddingTop: 0,
        marginTop: 0,
        marginBottom: 0,
      })}
    >
      <StatefulPanel
        overrides={{
          Header: {
            style: {
              backgroundColor: $theme.colors.primaryA,
              color: $theme.colors.primaryB,
              ':hover': {
                color: $theme.colors.primaryB,
              },
            },
          },
          Content: {
            style: {
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
            },
          },
          ToggleIcon: {
            style: {
              color: $theme.colors.primaryB,
            },
          },
        }}
        title={
          <div>
            <LabelSmall color="contentInverseSecondary" marginBottom="scale200">
              Projects
            </LabelSmall>
            <LabelLarge color="primaryB">Ajinkyatara</LabelLarge>
          </div>
        }
      >
        <Button
          $style={{
            width: '100%',
            borderRadius: 0,
            backgroundColor: $theme.colors.primaryB,
          }}
          kind={KIND.secondary}
        >
          Ajinkyatara
          <span className={css({ flexGrow: 1 })} />
        </Button>
      </StatefulPanel>
    </ul>
  );
}

export const ProjectSelectionWrapper = styled('div', {});
